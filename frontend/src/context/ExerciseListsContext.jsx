import { useEffect, useState } from "react";
import { mockExerciseLists } from "../data/mockExerciseLists";
import { ExerciseListsContext } from "./ExerciseListsContext";

export function ExerciseListsProvider({ children }) {
  const [exerciseLists, setExerciseLists] = useState(() => {
    const savedLists = localStorage.getItem("exerciseLists");

    if (savedLists) {
      return JSON.parse(savedLists);
    }

    return mockExerciseLists;
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
    <ExerciseListsContext.Provider
      value={{
        exerciseLists,
        addExerciseList,
        removeExerciseList,
        updateExerciseList,
        getExerciseListById,
      }}
    >
      {children}
    </ExerciseListsContext.Provider>
  );
}