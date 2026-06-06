import { useNavigate, useParams } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import { useExerciseLists } from "../context/useExerciseLists";

export default function ListDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getExerciseListById, removeExerciseList } = useExerciseLists();
  const list = getExerciseListById(id);

  function handleDelete() {
    const shouldDelete = window.confirm("Deseja excluir esta lista?");

    if (shouldDelete) {
      removeExerciseList(id);
      navigate("/my-lists");
    }
  }

  if (!list) {
    return (
      <main className="min-h-screen bg-[#f7f7f8]">
        <Header />
        <section className="mx-auto max-w-[960px] px-6 py-9">
          <ErrorMessage>Lista não encontrada.</ErrorMessage>
          <div className="mt-5">
            <Button onClick={() => navigate("/my-lists")}>
              Voltar para minhas listas
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f8]">
      <Header />

      <section className="mx-auto max-w-[1040px] px-6 py-9">
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-wide text-black">
              {list.title}
            </h1>
            <p className="mt-3 text-base text-gray-600">
              Lista salva em {list.createdAt}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => navigate("/my-lists")}>
              Voltar
            </Button>
            <Button variant="ghost" onClick={handleDelete}>
              Excluir
            </Button>
          </div>
        </div>

        <section className="mb-7 rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex flex-wrap gap-2">
            <Badge>{list.subject}</Badge>
            <Badge>{list.schoolYear}</Badge>
            <Badge>{list.topic}</Badge>
            <Badge variant="indigo">{list.difficulty}</Badge>
            <Badge>{list.questionType}</Badge>
            <Badge>{list.quantity} questões</Badge>
          </div>
        </section>

        <div className="grid gap-5">
          {list.questions.map((question, index) => (
            <QuestionCard key={question.id} question={question} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
