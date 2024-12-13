import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column } from "../types/types";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);
  console.log("columns", columns);
  return (
    <div
      className="
        m-auto
        flex
        min-h-screen
        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden
        px-[40px]
    "
    >
      <div className="m-auto">
        <button
          onClick={() => createNewColumn()}
          className="
            h-[60px]
            w-[350px]
            min-w-[350px]
            cursor-pointer
            rounded-lg
            border-2
            bg-mainBgColor
            border-columnBgColor
            p-4
            ring-rose-500
            hover:ring-2
            flex
            gap-2
        "
        >
          <PlusIcon />
          Add Column
        </button>
      </div>
    </div>
  );

  function createNewColumn() {
    const addColumn: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, addColumn]);
  }
}

function generateId() {
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
