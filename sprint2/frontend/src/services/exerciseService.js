import { apiRequest } from "./api";

function normalizeQuestion(question) {
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

function normalizeExerciseList(list) {
  return {
    id: list.id,
    title: list.title,
    description: list.description || "",
    subject: list.subject || "",
    schoolYear: list.school_year || "",
    topic: list.topic || "",
    difficulty: list.difficulty || "",
    questionType: list.question_type || "",
    quantity: list.quantity ?? list.questions?.length ?? 0,
    ownerId: list.owner_id,
    createdAt: list.created_at ? new Date(list.created_at).toLocaleDateString("pt-BR") : "",
    updatedAt: list.updated_at || "",
    questions: (list.questions || []).map(normalizeQuestion),
  };
}

function serializeQuestion(question, index) {
  return {
    statement: question.statement,
    answer: question.answer || question.correctAnswer || null,
    difficulty: question.difficulty || null,
    alternatives: question.alternatives || [],
    correct_answer: question.correctAnswer || null,
    explanation: question.explanation || null,
    order: question.order || index + 1,
  };
}

function serializeExerciseListPayload(list) {
  return {
    title: list.title,
    description: list.description || null,
    subject: list.subject || null,
    school_year: list.schoolYear || null,
    topic: list.topic || null,
    difficulty: list.difficulty || null,
    question_type: list.questionType || null,
    quantity: list.quantity ?? list.questions?.length ?? 0,
    questions: (list.questions || []).map(serializeQuestion),
  };
}

export async function fetchExerciseLists() {
  const data = await apiRequest("/exercise-lists");
  return data.map(normalizeExerciseList);
}

export async function fetchExerciseListById(id) {
  const data = await apiRequest(`/exercise-lists/${id}`);
  return normalizeExerciseList(data);
}

export async function createExerciseList(list) {
  const data = await apiRequest("/exercise-lists", {
    method: "POST",
    body: JSON.stringify(serializeExerciseListPayload(list)),
  });
  return normalizeExerciseList(data);
}

export async function updateExerciseList(id, list) {
  const data = await apiRequest(`/exercise-lists/${id}`, {
    method: "PUT",
    body: JSON.stringify(serializeExerciseListPayload(list)),
  });
  return normalizeExerciseList(data);
}

export async function deleteExerciseList(id) {
  await apiRequest(`/exercise-lists/${id}`, {
    method: "DELETE",
  });
}
