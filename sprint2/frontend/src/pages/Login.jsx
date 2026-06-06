import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import LogoMark from "../components/LogoMark";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("professor@escola.com");
  const [password, setPassword] = useState("12345678");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Preencha e-mail e senha para continuar.");
      return;
    }

    setError("");
    navigate("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#eef4ff] flex items-center justify-center px-4">
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

          <Button type="submit" className="w-full mt-3">
            Entrar
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
    </main>
  );
}