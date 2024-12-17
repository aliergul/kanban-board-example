import { SortableContext } from "@dnd-kit/sortable";
import { Id, Task } from "../types/types";
import TaskCard from "./TaskCard";
import { useMemo } from "react";

interface Props {
  tasks: Task[];
  deleteTask: (taskId: Id) => void;
  updateTask: (taskId: Id, content: string) => void;
}

function KanbanContent({ tasks, deleteTask, updateTask }: Props) {
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);
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
      <SortableContext items={tasksIds}>
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </SortableContext>
    </div>
  );
}

export default KanbanContent;
