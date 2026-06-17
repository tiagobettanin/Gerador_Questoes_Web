export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  onClick,
  href,
  download,
  target,
  rel,
  disabled = false,
  className = "",
}) {
  const base =
    "px-4 rounded-md font-semibold text-sm transition flex items-center justify-center gap-2";

  const sizes = {
    sm: "h-8",
    md: "h-10",
  };

  const variants = {
    primary: "bg-[#03000f] text-white hover:bg-gray-900",
    secondary: "bg-white border border-gray-300 text-black hover:bg-gray-100",
    ghost: "bg-transparent text-black hover:bg-gray-100",
    outlineGray:
    "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900",
  };

  const disabledStyle = disabled
    ? "opacity-60 cursor-not-allowed pointer-events-none"
    : "";

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${disabledStyle} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}