# Handoff da IA - Sprint 3

## O que ja foi preparado

- Existe a rota `POST /ai/generate-exercise-list`.
- A rota exige autenticacao JWT.
- A logica da IA esta isolada em [ai_service.py](/c:/Users/gabri/Desktop/Facu/26-01/WEB/Gerador_Questoes_Web/sprint3/backend/app/services/ai_service.py).
- Hoje a implementacao usa `generate_exercise_list_mock`.

## O que a dupla precisa trocar depois

Substituir a funcao mock por uma funcao real, por exemplo:

```python
def generate_exercise_list_real(payload: GenerateExerciseListRequest) -> GenerateExerciseListResponse:
    ...
```

Depois, atualizar a rota em `app/routers/ai.py` para chamar a versao real.

## Contrato que deve ser mantido

A resposta precisa continuar neste formato:

```json
{
  "title": "Matematica - Adicao e subtracao",
  "description": "observacoes opcionais",
  "subject": "Matematica",
  "school_year": "3o ano",
  "topic": "Adicao e subtracao",
  "difficulty": "Facil",
  "question_type": "Multipla escolha",
  "quantity": 5,
  "questions": [
    {
      "id": 1,
      "statement": "Enunciado",
      "answer": null,
      "difficulty": "Facil",
      "alternatives": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "correct_answer": "C",
      "explanation": "Explicacao",
      "order": 1,
      "exercise_list_id": 0
    }
  ],
  "provider": "mock",
  "warning": "IA real ainda nao configurada."
}
```

## Sugestao de substituicao segura

- Criar variavel `OPENAI_API_KEY` no backend.
- Criar variavel `OPENAI_MODEL`.
- Validar resposta antes de devolver ao frontend.
- Se a IA falhar, responder com erro HTTP claro sem quebrar o backend.
