import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { Column, Id } from "../types/types";
import KanbanContainer from "./KanbanContainer";
import generateId from "../utils/generateId";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);

  function createNewColumn() {
    const addColumn: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, addColumn]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((column) => column.id !== id);
    setColumns(filteredColumns);
  }

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
      <div className="m-auto flex gap-4">
        <div
          className="
          flex
          gap-4
        "
        >
          {columns.map((column, i) => (
            <KanbanContainer
              key={i}
              column={column}
              deleteColumn={deleteColumn}
            />
          ))}
        </div>

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
}

export default KanbanBoard;
