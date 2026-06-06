import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Header from "../components/Header";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import { useExerciseLists } from "../context/useExerciseLists";

export default function PreviewList() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addExerciseList } = useExerciseLists();
  const [list, setList] = useState(location.state?.generatedList || null);

  function updateQuestion(questionId, field, value) {
    setList((currentList) => ({
      ...currentList,
      questions: currentList.questions.map((question) =>
        question.id === questionId ? { ...question, [field]: value } : question
      ),
    }));
  }

  function updateAlternative(questionId, alternativeIndex, value) {
    setList((currentList) => ({
      ...currentList,
      questions: currentList.questions.map((question) => {
        if (question.id !== questionId) {
          return question;
        }

        const alternatives = [...question.alternatives];
        alternatives[alternativeIndex] = value;

        return { ...question, alternatives };
      }),
    }));
  }

  function handleSave() {
    addExerciseList(list);
    navigate("/my-lists");
  }

  if (!list) {
    return (
      <main className="min-h-screen bg-[#f7f7f8]">
        <Header />
        <section className="mx-auto max-w-[960px] px-6 py-9">
          <ErrorMessage>
            Nenhuma lista foi gerada. Volte para gerar uma nova lista.
          </ErrorMessage>
          <div className="mt-5">
            <Button onClick={() => navigate("/generate")}>Gerar lista</Button>
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
              Prévia da lista
            </h1>
            <p className="mt-3 text-base text-gray-600">{list.title}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge>{list.subject}</Badge>
            <Badge>{list.schoolYear}</Badge>
            <Badge variant="indigo">{list.difficulty}</Badge>
          </div>
        </div>

        <div className="grid gap-5">
          {list.questions.map((question, index) => (
            <article
              key={question.id}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <h2 className="mb-5 text-lg font-bold text-black">
                Questão {index + 1}
              </h2>

              <TextArea
                label="Enunciado"
                value={question.statement}
                onChange={(event) =>
                  updateQuestion(question.id, "statement", event.target.value)
                }
              />

              {question.alternatives.length > 0 && (
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {question.alternatives.map((alternative, alternativeIndex) => (
                    <Input
                      key={`${question.id}-${alternativeIndex}`}
                      label={`Alternativa ${alternativeIndex + 1}`}
                      value={alternative}
                      onChange={(event) =>
                        updateAlternative(
                          question.id,
                          alternativeIndex,
                          event.target.value
                        )
                      }
                    />
                  ))}
                </div>
              )}

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <Input
                  label="Resposta correta ou esperada"
                  value={question.correctAnswer}
                  onChange={(event) =>
                    updateQuestion(
                      question.id,
                      "correctAnswer",
                      event.target.value
                    )
                  }
                />

                <TextArea
                  label="Explicação"
                  rows={3}
                  value={question.explanation}
                  onChange={(event) =>
                    updateQuestion(question.id, "explanation", event.target.value)
                  }
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button onClick={handleSave}>Salvar lista</Button>
          <Button variant="secondary" onClick={() => navigate("/generate")}>
            Gerar novamente
          </Button>
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            Cancelar
          </Button>
        </div>
      </section>
    </main>
  );
}
