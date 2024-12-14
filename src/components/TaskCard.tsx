import { useState } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import { Id, Task } from "../types/types";

interface Props {
  task: Task;
  deleteTask: (taskId: Id) => void;
}

function TaskCard({ task, deleteTask }: Props) {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  return (
    <div
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      className="
    bg-mainBgColor
    p-2.5
    h-[100px]
    min-h-[100px]
    items-center
    flex
    text-left
    rounded-xl
    hover:ring-2
    hover:ring-inset
    hover:ring-rose-500
    cursor-grab
    relative
  "
    >
      {task.content}
      {mouseOver && (
        <button
          onClick={() => deleteTask(task.id)}
          className="
    stroke-white
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      bg-columnBgColor
      p-2
      rounded
      opacity-50
      hover:opacity-100
      "
        >
          <DeleteIcon />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
