export default function LogoMark({ size = "large" }) {
  const sizes = {
    small: "w-10 h-10",
    large: "w-16 h-16",
  };

  const iconSizes = {
    small: "w-6 h-6",
    large: "w-8 h-8",
  };

  return (
    <div
      className={`${sizes[size]} rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={iconSizes[size]}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
      </svg>
    </div>
  );
}