import DeleteIcon from "../icons/DeleteIcon";
import { Id } from "../types/types";

interface Props {
  id: Id;
  title: string;
  deleteColumn: (id: Id) => void;
  attributes?: object | undefined;
  listeners?: object | undefined;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  updateColumn: (id: Id, title: string) => void;
  index?: number | undefined;
}

function KanbanHeader({
  id,
  title,
  deleteColumn,
  attributes,
  listeners,
  editMode,
  setEditMode,
  updateColumn,
  index,
}: Props) {
  return (
    <div
      {...attributes}
      {...listeners}
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
        onClick={() => setEditMode(true)}
        className="
        flex
        gap-2
        items-center
        hover:cursor-text
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
          {index}
        </div>
        {!editMode ? (
          title
        ) : (
          <input
            autoFocus
            value={title}
            onChange={(e) => updateColumn(id, e.target.value)}
            onBlur={() => setEditMode(false)}
            onKeyDown={(e) => {
              if (e.key !== "Enter") return;
              setEditMode(false);
            }}
            className="
                bg-black
                focus:border-rose-500
                border
                rounded
                outline-none
                px-2
                w-[250px]
            "
          />
        )}
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
