export default function Button({
  children,
  type = "button",
  variant = "primary",
  onClick,
  className = "",
}) {
  const base =
    "h-10 px-4 rounded-md font-semibold text-sm transition flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-[#03000f] text-white hover:bg-gray-900",
    secondary: "bg-white border border-gray-300 text-black hover:bg-gray-100",
    ghost: "bg-transparent text-black hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}