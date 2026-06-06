import { useContext } from "react";
import { ExerciseListsContext } from "./ExerciseListsContext";

export function useExerciseLists() {
  const context = useContext(ExerciseListsContext);

  if (!context) {
    throw new Error(
      "useExerciseLists deve ser usado dentro de ExerciseListsProvider"
    );
  }

  return context;
}