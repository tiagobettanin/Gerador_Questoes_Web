from __future__ import annotations

import json

from openai import OpenAI

from app.core.config import get_settings
from app.schemas.ai import GenerateExerciseListRequest, GenerateExerciseListResponse
from app.schemas.question import QuestionRead


def generate_exercise_list(payload: GenerateExerciseListRequest) -> GenerateExerciseListResponse:
    settings = get_settings()

    if not settings.use_real_ai or not settings.openai_api_key:
        return generate_exercise_list_mock(payload)

    try:
        return generate_exercise_list_real(payload)
    except Exception as error:
        fallback = generate_exercise_list_mock(payload)
        fallback.warning = (
            "IA real falhou. Foi usado o stub seguro para manter o fluxo funcionando. "
            f"Erro: {type(error).__name__}"
        )
        return fallback


def generate_exercise_list_real(
    payload: GenerateExerciseListRequest,
) -> GenerateExerciseListResponse:
    settings = get_settings()

    client = OpenAI(api_key=settings.openai_api_key)

    prompt = f"""
Você é uma IA educacional para professores do Ensino Fundamental 2.

Gere uma lista de exercícios com base nos dados abaixo:

Disciplina: {payload.subject}
Ano escolar: {payload.school_year}
Assunto: {payload.topic}
Dificuldade: {payload.difficulty}
Tipo de questão: {payload.question_type}
Quantidade de questões: {payload.quantity}
Observações do professor: {payload.observations or "Nenhuma"}

Responda somente com JSON válido.
Não use markdown.
Não escreva texto fora do JSON.

O JSON deve seguir exatamente este formato:

{{
  "title": "string",
  "description": "string ou null",
  "subject": "string",
  "school_year": "string",
  "topic": "string",
  "difficulty": "string",
  "question_type": "string",
  "quantity": número,
  "questions": [
    {{
      "id": número,
      "statement": "enunciado da questão",
      "answer": "resposta esperada ou null",
      "difficulty": "string",
      "alternatives": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "correct_answer": "resposta correta",
      "explanation": "explicação da resposta",
      "order": número,
      "exercise_list_id": 0
    }}
  ]
}}

Regras:
- Gere exatamente {payload.quantity} questões.
- Use linguagem adequada ao {payload.school_year}.
- Se o tipo for múltipla escolha, crie 4 alternativas.
- Se não for múltipla escolha, deixe alternatives como lista vazia.
- Use exercise_list_id sempre como 0, pois a lista ainda não foi salva no banco.
"""

    response = client.responses.create(
        model=settings.openai_model,
        input=[
            {
                "role": "system",
                "content": "Você gera listas de exercícios educacionais em JSON válido.",
            },
            {
                "role": "user",
                "content": prompt,
            },
        ],
    )

    raw_text = response.output_text
    data = load_json_from_ai_response(raw_text)

    questions: list[QuestionRead] = []

    for index, question in enumerate(data.get("questions", []), start=1):
        questions.append(
            QuestionRead(
                id=question.get("id", index),
                statement=question.get("statement", ""),
                answer=question.get("answer"),
                difficulty=question.get("difficulty", payload.difficulty),
                alternatives=question.get("alternatives", []),
                correct_answer=question.get("correct_answer", ""),
                explanation=question.get("explanation", ""),
                order=question.get("order", index),
                exercise_list_id=question.get("exercise_list_id", 0),
            )
        )

    return GenerateExerciseListResponse(
        title=data.get("title") or f"{payload.subject} - {payload.topic}",
        description=data.get("description") or payload.observations,
        subject=data.get("subject") or payload.subject,
        school_year=data.get("school_year") or payload.school_year,
        topic=data.get("topic") or payload.topic,
        difficulty=data.get("difficulty") or payload.difficulty,
        question_type=data.get("question_type") or payload.question_type,
        quantity=len(questions),
        questions=questions,
        provider="openai",
        warning=None,
    )


def load_json_from_ai_response(text: str) -> dict:
    cleaned = text.strip()

    if cleaned.startswith("```json"):
        cleaned = cleaned.removeprefix("```json").strip()

    if cleaned.startswith("```"):
        cleaned = cleaned.removeprefix("```").strip()

    if cleaned.endswith("```"):
        cleaned = cleaned.removesuffix("```").strip()

    return json.loads(cleaned)


def generate_exercise_list_mock(
    payload: GenerateExerciseListRequest,
) -> GenerateExerciseListResponse:
    has_alternatives = (
        payload.question_type.lower() == "multipla escolha"
        or payload.question_type.lower() == "múltipla escolha"
    )

    questions: list[QuestionRead] = []

    for index in range(payload.quantity):
        number = index + 1

        questions.append(
            QuestionRead(
                id=number,
                statement=(
                    f"Questao {number}: responda sobre {payload.topic} em {payload.subject}, "
                    f"com linguagem adequada ao {payload.school_year}."
                ),
                answer=(
                    f"Resposta esperada sobre {payload.topic}."
                    if not has_alternatives
                    else None
                ),
                difficulty=payload.difficulty,
                alternatives=[
                    f"A) Alternativa sobre {payload.topic}",
                    "B) Alternativa incompleta",
                    "C) Alternativa correta",
                    "D) Alternativa distratora",
                ]
                if has_alternatives
                else [],
                correct_answer=(
                    "C"
                    if has_alternatives
                    else f"Resposta esperada sobre {payload.topic}."
                ),
                explanation=(
                    "Resposta mockada da Sprint 3. A camada de IA real ainda nao foi conectada."
                ),
                order=number,
                exercise_list_id=0,
            )
        )

    return GenerateExerciseListResponse(
        title=f"{payload.subject} - {payload.topic}",
        description=payload.observations,
        subject=payload.subject,
        school_year=payload.school_year,
        topic=payload.topic,
        difficulty=payload.difficulty,
        question_type=payload.question_type,
        quantity=payload.quantity,
        questions=questions,
        provider="mock",
        warning="IA real ainda nao configurada. Esta resposta vem de um stub seguro.",
    )