import { useContext } from "react";
import { ExerciseListContext } from "./ExerciseListContext";

export function useExerciseLists() {
  const context = useContext(ExerciseListContext);

  if (!context) {
    throw new Error(
      "useExerciseLists deve ser usado dentro de ExerciseListProvider"
    );
  }

  return context;
}