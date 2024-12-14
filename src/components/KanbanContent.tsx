import { Task } from "../types/types";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
}

function KanbanContent({ tasks }: Props) {
  return (
    <div
      className="
    flex
    flex-col
    flex-grow
    gap-4
    p-2
    overflow-x-hidden
    overflow-y-auto
  "
    >
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}

export default KanbanContent;
