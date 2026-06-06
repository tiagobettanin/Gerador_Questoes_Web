export default function Select({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-black">{label}</label>

      <select
        value={value}
        onChange={onChange}
        className="h-10 w-full rounded-md bg-zinc-100 px-4 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
