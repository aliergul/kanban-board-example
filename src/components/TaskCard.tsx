import { useState } from "react";
import DeleteIcon from "../icons/DeleteIcon";
import { Id, Task } from "../types/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
interface Props {
  task: Task;
  deleteTask: (taskId: Id) => void;
  updateTask: (taskId: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      task
    bg-mainBgColor
      p-2.5
      h-[100px]
      min-h-[100px]
      items-center
      flex
      text-left
      rounded-xl
      cursor-grab
      relative
      opacity-30
      border-2
      border-rose-500
    "
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
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
        <textarea
          className="
            h-[90%]
            w-full
            resize-none
            border-none
            rounded
            bg-transparent
            text-white
            focus:outline-none
        "
          autoFocus
          value={task.content}
          placeholder="Task Content"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) toggleEditMode();
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </div>
    );
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      className="
    task
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
      <p
        className="
        my-auto
        h-[90%]
        w-full
        overflow-y-auto
        overflow-x-hidden
        whitespace-pre-wrap
     "
      >
        {task.content}
      </p>
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
