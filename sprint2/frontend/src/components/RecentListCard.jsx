export default function RecentListCard({ list, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full max-w-[394px] rounded-xl border border-gray-200 bg-white p-6 text-left transition hover:border-indigo-300 hover:shadow-sm"
    >
      <h3 className="text-lg font-bold text-black">{list.title}</h3>

      <p className="mt-3 text-sm text-gray-600">
        {list.subject} - {list.schoolYear}
      </p>

      <div className="mt-7 flex gap-2">
        <span className="rounded bg-gray-100 px-3 py-1 text-xs text-gray-700">
          {list.topic}
        </span>

        <span className="rounded bg-indigo-100 px-3 py-1 text-xs text-indigo-700">
          {list.difficulty}
        </span>
      </div>

      <p className="mt-4 text-xs text-gray-600">{list.createdAt}</p>
    </button>
  );
}