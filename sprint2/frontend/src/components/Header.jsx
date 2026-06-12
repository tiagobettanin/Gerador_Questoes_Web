import { useNavigate } from "react-router-dom";
import { clearAuthSession } from "../services/authService";

export default function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    clearAuthSession();
    navigate("/login");
  }

  return (
    <header className="h-16 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-full max-w-[1216px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 10L12 5 2 10l10 5 10-5z" />
              <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
            </svg>
          </div>

          <span className="text-xl font-bold tracking-wide text-black">
            AI Educacional
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="flex h-8 items-center gap-2 rounded-md border border-gray-300 bg-white px-4 text-sm font-semibold text-black hover:bg-gray-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <path d="M10 17l5-5-5-5" />
            <path d="M15 12H3" />
          </svg>
          Sair
        </button>
      </div>
    </header>
  );
}
