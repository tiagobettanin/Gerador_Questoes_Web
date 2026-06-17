import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import LogoMark from "../components/LogoMark";
import { registerUser } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function updateField(field, value) {
    setFormData({
      ...formData,
      [field]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.confirmPassword.trim()
    ) {
      setError("Preencha todos os campos para criar sua conta.");
      setSuccess("");
      return;
    }

    if (formData.password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      setSuccess("");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas nao conferem.");
      setSuccess("");
      return;
    }

    setIsLoading(true);
    try {
      await registerUser({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
      });
      setError("");
      setSuccess("Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/login");
      }, 900);
    } catch (registerError) {
      setError(registerError.message);
      setSuccess("");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#eef4ff] flex flex-col items-center justify-center px-4">
      <section className="w-full max-w-[448px] rounded-xl border border-gray-200 bg-white px-6 py-7 shadow-sm">
        <div className="mb-6 text-center">
          <LogoMark />

          <h1 className="mt-5 text-3xl font-bold tracking-wide text-black">
            Criar Conta
          </h1>

          <p className="mt-6 text-base text-gray-500">
            Cadastre-se para começar a criar listas com IA
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Nome"
            type="text"
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
          />

          <Input
            label="E-mail"
            type="email"
            placeholder="professor@escola.com"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={(event) => updateField("password", event.target.value)}
          />

          <Input
            label="Confirmação de senha"
            type="password"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={(event) =>
              updateField("confirmPassword", event.target.value)
            }
          />

          {error && (
            <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          {success && (
            <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
              {success}
            </p>
          )}

          <Button type="submit" className="w-full mt-3">
            {isLoading ? "Criando conta..." : "Criar conta"}
          </Button>
        </form>

        <div className="mt-7 text-center">
          <Link
            to="/login"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Voltar para login
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