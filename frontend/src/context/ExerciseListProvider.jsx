import { useEffect, useState } from "react";
import { mockExerciseLists } from "../data/mockExerciseLists";
import { ExerciseListContext } from "./ExerciseListContext";

export function ExerciseListProvider({ children }) {
  const [exerciseLists, setExerciseLists] = useState(() => {
    try {
      const savedLists = localStorage.getItem("exerciseLists");

      if (savedLists) {
        return JSON.parse(savedLists);
      }

      return mockExerciseLists;
    } catch {
      return mockExerciseLists;
    }
  });

  useEffect(() => {
    localStorage.setItem("exerciseLists", JSON.stringify(exerciseLists));
  }, [exerciseLists]);

  function addExerciseList(newList) {
    setExerciseLists((currentLists) => [newList, ...currentLists]);
  }

  function removeExerciseList(listId) {
    setExerciseLists((currentLists) =>
      currentLists.filter((list) => list.id !== Number(listId))
    );
  }

  function updateExerciseList(updatedList) {
    setExerciseLists((currentLists) =>
      currentLists.map((list) =>
        list.id === updatedList.id ? updatedList : list
      )
    );
  }

  function getExerciseListById(listId) {
    return exerciseLists.find((list) => list.id === Number(listId));
  }

  return (
    <ExerciseListContext.Provider
      value={{
        exerciseLists,
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