import PlusIcon from "../icons/PlusIcon";
import { Id } from "../types/types";

interface Props {
  columnId: Id;
  createTask: (columnId: Id) => void;
}

function KanbanFooter({ columnId, createTask }: Props) {
  return (
    <button
      onClick={() => {
        createTask(columnId);
      }}
      className="
      flex
      gap-2
      border-columnBgColor
      border-2
      rounded
      p-4
      border-x-columnBgColor
      hover:bg-mainBgColor
      hover:text-rose-500
      active:bg-black
    "
    >
      <PlusIcon />
      Add Task
    </button>
  );
}

export default KanbanFooter;
