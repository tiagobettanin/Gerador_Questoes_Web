import { useNavigate } from "react-router-dom";

export default function EmptyState() {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[230px] w-full items-center justify-center rounded-xl border border-gray-200 bg-white">
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-16 w-16 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>

        <p className="mt-6 text-sm text-gray-700">
          Você ainda não criou nenhuma lista
        </p>

        <button
          onClick={() => navigate("/generate")}
          className="mt-5 h-9 rounded-md bg-[#03000f] px-5 text-sm font-bold text-white hover:bg-gray-900"
        >
          Criar primeira lista
        </button>
      </div>
    </section>
  );
}