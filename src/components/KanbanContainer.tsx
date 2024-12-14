import { useSortable } from "@dnd-kit/sortable";
import { Column, Id } from "../types/types";
import KanbanContent from "./KanbanContent";
import KanbanFooter from "./KanbanFooter";
import KanbanHeader from "./KanbanHeader";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
}

function KanbanContainer({ column, deleteColumn, updateColumn }: Props) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
    bg-columnBgColor
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      opacity-30
      border-2
      border-rose-500
  "
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
      bg-columnBgColor
        w-[350px]
        h-[500px]
        max-h-[500px]
        rounded-md
        flex
        flex-col
    "
    >
      <KanbanHeader
        id={column.id}
        title={column.title}
        deleteColumn={deleteColumn}
        attributes={{ ...attributes }}
        listeners={{ ...listeners }}
        editMode={editMode}
        setEditMode={setEditMode}
        updateColumn={updateColumn}
      />
      <KanbanContent />
      <KanbanFooter />
    </div>
  );
}

export default KanbanContainer;
