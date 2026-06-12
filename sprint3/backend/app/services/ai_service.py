from __future__ import annotations

from app.schemas.ai import GenerateExerciseListRequest, GenerateExerciseListResponse
from app.schemas.question import QuestionRead


def generate_exercise_list_mock(payload: GenerateExerciseListRequest) -> GenerateExerciseListResponse:
    has_alternatives = payload.question_type.lower() == "multipla escolha" or payload.question_type.lower() == "múltipla escolha"
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
                correct_answer="C" if has_alternatives else f"Resposta esperada sobre {payload.topic}.",
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
