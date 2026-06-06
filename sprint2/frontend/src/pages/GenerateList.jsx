import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import Input from "../components/Input";
import LoadingMessage from "../components/LoadingMessage";
import Select from "../components/Select";
import TextArea from "../components/TextArea";
import { mockGenerateExerciseList } from "../data/mockGenerateExerciseList";

const subjects = ["Português", "Matemática", "Ciências", "História", "Geografia"];
const schoolYears = ["1º ano", "2º ano", "3º ano", "4º ano", "5º ano"];
const difficulties = ["Fácil", "Média", "Difícil"];
const questionTypes = ["Múltipla escolha", "Discursiva"];

const initialFormData = {
  subject: "",
  schoolYear: "",
  topic: "",
  difficulty: "",
  quantity: "5",
  questionType: "",
  observations: "",
};

export default function GenerateList() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function updateField(field, value) {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }));
  }

  function validateForm() {
    if (
      !formData.subject ||
      !formData.schoolYear ||
      !formData.topic.trim() ||
      !formData.difficulty ||
      !formData.quantity ||
      !formData.questionType
    ) {
      return "Preencha todos os campos obrigatórios para gerar a lista.";
    }

    const quantity = Number(formData.quantity);

    if (Number.isNaN(quantity) || quantity < 1 || quantity > 10) {
      return "Informe uma quantidade entre 1 e 10 questões.";
    }

    return "";
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      const generatedList = mockGenerateExerciseList(formData);
      setIsLoading(false);
      navigate("/preview", { state: { generatedList } });
    }, 900);
  }

  function handleClear() {
    setFormData(initialFormData);
    setError("");
  }

  return (
    <main className="min-h-screen bg-[#f7f7f8]">
      <Header />

      <section className="mx-auto max-w-[960px] px-6 py-9">
        <div className="mb-7">
          <h1 className="text-3xl font-bold tracking-wide text-black">
            Gerar lista com IA
          </h1>
          <p className="mt-3 text-base text-gray-600">
            Crie questões para turmas do 1º ao 5º ano do Fundamental.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-gray-200 bg-white p-6"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Select
              label="Disciplina"
              value={formData.subject}
              onChange={(event) => updateField("subject", event.target.value)}
              options={subjects}
            />

            <Select
              label="Ano escolar"
              value={formData.schoolYear}
              onChange={(event) =>
                updateField("schoolYear", event.target.value)
              }
              options={schoolYears}
            />

            <Input
              label="Assunto"
              placeholder="Ex: Frações, leitura, corpo humano"
              value={formData.topic}
              onChange={(event) => updateField("topic", event.target.value)}
            />

            <Select
              label="Dificuldade"
              value={formData.difficulty}
              onChange={(event) =>
                updateField("difficulty", event.target.value)
              }
              options={difficulties}
            />

            <Input
              label="Quantidade de questões"
              type="number"
              placeholder="5"
              value={formData.quantity}
              onChange={(event) => updateField("quantity", event.target.value)}
            />

            <Select
              label="Tipo de questão"
              value={formData.questionType}
              onChange={(event) =>
                updateField("questionType", event.target.value)
              }
              options={questionTypes}
            />
          </div>

          <div className="mt-5">
            <TextArea
              label="Observações opcionais"
              placeholder="Ex: usar exemplos do cotidiano e frases curtas"
              value={formData.observations}
              onChange={(event) =>
                updateField("observations", event.target.value)
              }
            />
          </div>

          <div className="mt-6 grid gap-3">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {isLoading && (
              <LoadingMessage>Gerando questões simuladas...</LoadingMessage>
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button type="submit">Gerar com IA</Button>
            <Button type="button" variant="secondary" onClick={handleClear}>
              Limpar formulário
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={() => navigate("/dashboard")}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
