export default function Badge({ children, variant = "gray" }) {
  const variants = {
    gray: "bg-gray-100 text-gray-700",
    indigo: "bg-indigo-100 text-indigo-700",
    green: "bg-green-100 text-green-700",
  };

  return (
    <span className={`rounded px-3 py-1 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
}
