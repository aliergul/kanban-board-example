import DeleteIcon from "../icons/DeleteIcon";
import { Id } from "../types/types";

interface Props {
  id: Id;
  title: string;
  deleteColumn: (id: Id) => void;
}

function KanbanHeader({ id, title, deleteColumn }: Props) {
  return (
    <div
      className="
    flex
    justify-between
    bg-mainBgColor
    h-[60px]
    cursor-grab
    rounded-md
    rounded-b-none
    p-3
    font-bold
    border-columnBgColor
    border-4
  "
    >
      <div
        className="
        flex
        gap-2
        items-center
      "
      >
        <div
          className="
            flex
            justify-center
            items-center
            bg-columnBgColor
            px-2
            py-1
            text-sm
            rounded-full
        "
        >
          0
        </div>
        {title}
      </div>
      <button
        onClick={() => deleteColumn(id)}
        className="
        stroke-gray-500
        hover:stroke-white
        hover:bg-columnBgColor
        rounded
        px-1
      "
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default KanbanHeader;
