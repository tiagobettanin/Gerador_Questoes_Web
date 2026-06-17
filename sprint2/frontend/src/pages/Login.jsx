import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import LogoMark from "../components/LogoMark";
import { loginUser, saveAuthSession } from "../services/authService";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Preencha e-mail e senha para continuar.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await loginUser({
        email: email.trim(),
        password: password.trim(),
      });
      saveAuthSession(response.access_token, response.user);
      setError("");
      navigate(location.state?.from?.pathname || "/dashboard");
    } catch (loginError) {
      setError(loginError.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#eef4ff] flex flex-col items-center justify-center px-4">
      <section className="w-full max-w-[448px] rounded-xl border border-gray-200 bg-white px-6 py-8 shadow-sm">
        <div className="mb-7 text-center">
          <LogoMark />

          <h1 className="mt-5 text-3xl font-bold tracking-wide text-black">
            AI Educacional
          </h1>

          <p className="mt-6 text-base text-gray-500">
            Sistema de criação de listas para professores
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="E-mail"
            type="email"
            placeholder="professor@escola.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {error && (
            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          {isLoading && (
            <p className="rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-700">
              Validando acesso...
            </p>
          )}

          <Button type="submit" className="w-full mt-3">
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="mt-7 text-center">
          <Link
            to="/register"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Ir para cadastro
          </Link>
        </div>
      </section>
      <div className="flex justify-center w-full max-w-[448px] mt-4">
      <Button
        variant="outlineGray"
        size="sm"
        href={`${import.meta.env.BASE_URL}manual-usuario.pdf`}
        download="manual-usuario.pdf"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        Manual do Usuário
      </Button>
      </div>
    </main>
  );
}
