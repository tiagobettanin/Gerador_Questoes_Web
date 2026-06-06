import Badge from "./Badge";
import Button from "./Button";

export default function ExerciseListCard({ list, onOpen, onDelete }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-black">{list.title}</h3>
          <p className="mt-2 text-sm text-gray-600">
            {list.subject} - {list.schoolYear}
          </p>
        </div>

        <Badge variant="indigo">{list.difficulty}</Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge>{list.topic}</Badge>
        <Badge>{list.quantity} questões</Badge>
        <Badge>{list.createdAt}</Badge>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button onClick={onOpen}>Abrir detalhes</Button>
        <Button variant="secondary" onClick={onDelete}>
          Excluir
        </Button>
      </div>
    </article>
  );
}
