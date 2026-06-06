export default function DashboardCard({ total, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full max-w-[390px] rounded-xl border border-gray-200 bg-white p-6 text-left transition hover:border-indigo-300 hover:shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-black">Listas Criadas</h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </svg>
      </div>

      <p className="mt-9 text-3xl font-normal text-black">{total}</p>
      <p className="mt-1 text-xs text-gray-600">Total de listas no sistema</p>
    </button>
  );
}