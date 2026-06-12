import { useEffect, useEffectEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import EmptyState from "../components/EmptyState";
import ExerciseListCard from "../components/ExerciseListCard";
import Header from "../components/Header";
import { useExerciseLists } from "../context/useExerciseLists";

export default function MyLists() {
  const navigate = useNavigate();
  const { exerciseLists, removeExerciseList, isLoading, error, loadExerciseLists } =
    useExerciseLists();

  const syncLists = useEffectEvent(() => {
    loadExerciseLists();
  });

  useEffect(() => {
    syncLists();
  }, []);

  async function handleDelete(listId) {
    const shouldDelete = window.confirm("Deseja excluir esta lista?");
    if (shouldDelete) {
      await removeExerciseList(listId);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f7f8]">
      <Header />

      <section className="mx-auto max-w-[1216px] px-6 py-9">
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-wide text-black">
              Minhas listas
            </h1>
            <p className="mt-3 text-base text-gray-600">
              Consulte e organize as listas salvas.
            </p>
          </div>

          <Button onClick={() => navigate("/generate")}>Nova lista</Button>
        </div>

        {isLoading && (
          <p className="mb-4 rounded-md bg-blue-50 px-4 py-3 text-sm text-blue-700">
            Carregando listas...
          </p>
        )}

        {error && !isLoading && (
          <p className="mb-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        {!isLoading && exerciseLists.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {exerciseLists.map((list) => (
              <ExerciseListCard
                key={list.id}
                list={list}
                onOpen={() => navigate(`/list/${list.id}`)}
                onDelete={() => handleDelete(list.id)}
              />
            ))}
          </div>
        ) : !isLoading ? (
          <EmptyState />
        ) : null}
      </section>
    </main>
  );
}
