import AppRoutes from "./routes/AppRoutes";
import { ExerciseListProvider } from "./context/ExerciseListProvider";

export default function App() {
  return (
    <ExerciseListProvider>
      <AppRoutes />
    </ExerciseListProvider>
  );
}