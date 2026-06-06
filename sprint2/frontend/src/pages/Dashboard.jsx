import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import RecentListCard from "../components/RecentListCard";
import EmptyState from "../components/EmptyState";
import { mockUser } from "../data/mockUser";
import { useExerciseLists } from "../context/useExerciseLists";

export default function Dashboard() {
  const navigate = useNavigate();
  const { exerciseLists } = useExerciseLists();

  const totalLists = exerciseLists.length;
  const hasLists = totalLists > 0;
  const recentLists = exerciseLists.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#f7f7f8]">
      <Header />

      <section className="mx-auto max-w-[1216px] px-6 py-9">
        <div>
          <h1 className="text-3xl font-bold tracking-wide text-black">
            Olá, Professor(a) {mockUser.name}
          </h1>

          <p className="mt-3 text-base text-gray-600">
            Bem-vindo ao seu painel de controle
          </p>
        </div>

        <DashboardCard
            total={totalLists}
            onClick={() => navigate("/my-lists")}
        />

        <section className="mt-8 rounded-xl bg-indigo-600 px-6 py-8 text-white">
          <h2 className="text-2xl font-bold">Criar Nova Lista com IA</h2>

          <p className="mt-3 text-base text-indigo-50">
            Gere listas de exercícios personalizadas usando inteligência artificial
          </p>

          <button
            onClick={() => navigate("/generate")}
            className="mt-7 flex h-10 items-center gap-3 rounded-md bg-white px-5 text-sm font-bold text-indigo-600 hover:bg-indigo-50"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-indigo-600 text-xs">
              +
            </span>
            Criar nova lista
          </button>
        </section>

        <section className="mt-9">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-black">Listas Recentes</h2>

            {hasLists && (
              <button
                onClick={() => navigate("/my-lists")}
                className="flex h-9 items-center gap-3 rounded-md border border-gray-300 bg-white px-4 text-sm font-bold text-black hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 6h13" />
                  <path d="M8 12h13" />
                  <path d="M8 18h13" />
                  <path d="M3 6h.01" />
                  <path d="M3 12h.01" />
                  <path d="M3 18h.01" />
                </svg>
                Ver todas
              </button>
            )}
          </div>

          {hasLists ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recentLists.map((list) => (
                <RecentListCard
                  key={list.id}
                  list={list}
                  onClick={() => navigate(`/list/${list.id}`)}
                />  
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </section>
      </section>
    </main>
  );
}