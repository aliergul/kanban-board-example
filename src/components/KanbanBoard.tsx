import PlusIcon from "../icons/PlusIcon";

function KanbanBoard() {
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