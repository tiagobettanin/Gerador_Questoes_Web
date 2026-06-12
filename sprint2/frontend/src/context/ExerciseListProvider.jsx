import { useState } from "react";
import { clearAuthSession, getAccessToken } from "../services/authService";
import {
  createExerciseList,
  deleteExerciseList,
  fetchExerciseLists,
  updateExerciseList as updateExerciseListRequest,
} from "../services/exerciseService";
import { ExerciseListContext } from "./ExerciseListContext";

export function ExerciseListProvider({ children }) {
  const [exerciseLists, setExerciseLists] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean(getAccessToken()));
  const [error, setError] = useState("");

  async function loadExerciseLists() {
    if (!getAccessToken()) {
      setExerciseLists([]);
      setIsLoading(false);
      setError("");
      return;
    }

    setIsLoading(true);
    try {
      const lists = await fetchExerciseLists();
      setExerciseLists(lists);
      setError("");
    } catch (loadError) {
      if (loadError.status === 401) {
        clearAuthSession();
      }
      setExerciseLists([]);
      setError(loadError.message);
    } finally {
      setIsLoading(false);
    }
  }
  async function addExerciseList(newList) {
    const createdList = await createExerciseList(newList);
    setExerciseLists((currentLists) => [createdList, ...currentLists]);
    return createdList;
  }

  async function removeExerciseList(listId) {
    await deleteExerciseList(listId);
    setExerciseLists((currentLists) =>
      currentLists.filter((list) => list.id !== Number(listId))
    );
  }

  async function updateExerciseList(updatedList) {
    const savedList = await updateExerciseListRequest(updatedList.id, updatedList);
    setExerciseLists((currentLists) =>
      currentLists.map((list) => (list.id === savedList.id ? savedList : list))
    );
    return savedList;
  }

  function getExerciseListById(listId) {
    return exerciseLists.find((list) => list.id === Number(listId));
  }

  return (
    <ExerciseListContext.Provider
      value={{
        exerciseLists,
        isLoading,
        error,
        loadExerciseLists,
        addExerciseList,
        removeExerciseList,
        updateExerciseList,
        getExerciseListById,
      }}
    >
      {children}
    </ExerciseListContext.Provider>
  );
}
