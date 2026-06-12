import Badge from "./Badge";

export default function QuestionCard({ question, index }) {
  const hasAlternatives = question.alternatives?.length > 0;
  const answerLabel = question.correctAnswer || question.answer || "Nao informado";
  const explanationLabel =
    question.explanation || question.answer || "Sem explicacao cadastrada.";

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-black">Questão {index + 1}</h3>
        <Badge variant="green">Gabarito: {answerLabel}</Badge>
      </div>

      <p className="text-sm leading-6 text-gray-800">{question.statement}</p>

      {hasAlternatives && (
        <div className="mt-5 grid gap-3">
          {question.alternatives.map((alternative, alternativeIndex) => (
            <p
              key={`${question.id}-${alternativeIndex}`}
              className="rounded-md bg-gray-50 px-4 py-3 text-sm text-gray-700"
            >
              {alternative}
            </p>
          ))}
        </div>
      )}

      <div className="mt-5 rounded-md bg-indigo-50 px-4 py-3">
        <p className="text-sm font-semibold text-indigo-700">Explicação</p>
        <p className="mt-1 text-sm leading-6 text-gray-700">{explanationLabel}</p>
      </div>
    </article>
  );
}
