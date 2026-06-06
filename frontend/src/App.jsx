import AppRoutes from "./routes/AppRoutes";
import { ExerciseListsProvider } from "./context/ExerciseListsProvider";

export default function App() {
  return (
    <ExerciseListsProvider>
      <AppRoutes />
    </ExerciseListsProvider>
  );
}