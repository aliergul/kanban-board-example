import { Id, Task } from "../types/types";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteTask: (taskId: Id) => void;
  updateTask: (taskId: Id, content: string) => void;
}

function KanbanContent({ tasks, deleteTask, updateTask }: Props) {
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
        <TaskCard
          key={index}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}

export default KanbanContent;
