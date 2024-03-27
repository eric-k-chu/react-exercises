import { Piece } from "@/lib/chess";

export function Cell({
  isEven,
  piece,
  selected,
  onClick,
}: {
  isEven: boolean;
  piece?: Piece;
  selected: Piece | undefined;
  onClick: () => void;
}) {
  const color = getCellColor(piece === undefined, selected === piece, isEven);

  return (
    <div
      className={`flex items-center justify-center ${color} ${getCursorType(piece === undefined, selected === piece)}`}
      onMouseDown={onClick}
    >
      <h1
        className={`text-sm font-semibold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] ${piece?.color === "white" ? "text-white" : "text-black"}`}
      >
        {piece ? piece.type : " "}
      </h1>
    </div>
  );
}

function getCellColor(
  isEmptyCell: boolean,
  isSelected: boolean,
  isEvenCell: boolean,
): string {
  // Empty Cell or Piece is not selected
  if (isEmptyCell || !isSelected) {
    // Default colors
    return isEvenCell ? "bg-[#B78662]" : "bg-[#ECD5B0]";
  }

  // If piece is selected, show highlighted colors
  if (isSelected) return isEvenCell ? "bg-[#DBC24A]" : "bg-[#F5EA71]";

  return isEvenCell ? "bg-[#B78662]" : "bg-[#ECD5B0]";
}

function getCursorType(isEmptyCell: boolean, isCellSelected: boolean): string {
  if (isEmptyCell) return "cursor-default";

  return isCellSelected ? "cursor-grabbing" : "cursor-grab";
}
