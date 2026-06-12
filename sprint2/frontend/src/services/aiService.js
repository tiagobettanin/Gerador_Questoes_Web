import { apiRequest } from "./api";

function normalizeGeneratedQuestion(question) {
  return {
    id: question.id,
    statement: question.statement,
    answer: question.answer || "",
    difficulty: question.difficulty || "",
    alternatives: question.alternatives || [],
    correctAnswer: question.correct_answer || "",
    explanation: question.explanation || "",
    order: question.order,
    exerciseListId: question.exercise_list_id,
  };
}

export async function generateExerciseList(payload) {
  const data = await apiRequest("/ai/generate-exercise-list", {
    method: "POST",
    body: JSON.stringify({
      subject: payload.subject,
      school_year: payload.schoolYear,
      topic: payload.topic,
      difficulty: payload.difficulty,
      question_type: payload.questionType,
      quantity: Number(payload.quantity),
      observations: payload.observations || null,
    }),
  });

  return {
    title: data.title,
    description: data.description || "",
    subject: data.subject,
    schoolYear: data.school_year,
    topic: data.topic,
    difficulty: data.difficulty,
    questionType: data.question_type,
    quantity: data.quantity,
    questions: (data.questions || []).map(normalizeGeneratedQuestion),
    provider: data.provider,
    warning: data.warning || "",
  };
}
