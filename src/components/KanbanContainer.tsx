import { Column, Id } from "../types/types";
import KanbanContent from "./KanbanContent";
import KanbanFooter from "./KanbanFooter";
import KanbanHeader from "./KanbanHeader";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

function KanbanContainer({ column, deleteColumn }: Props) {
  return (
    <div
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
      />
      <KanbanContent />
      <KanbanFooter />
    </div>
  );
}

export default KanbanContainer;
