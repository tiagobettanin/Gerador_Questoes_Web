export default function TextArea({
  label,
  placeholder,
  value,
  onChange,
  rows = 4,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-black">{label}</label>

      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full resize-none rounded-md bg-zinc-100 px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
