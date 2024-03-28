export function Cell({
  isEven,
  isEmpty,
  isSelected,
  onClick,
  children,
}: {
  isEven: boolean;
  isEmpty: boolean;
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  const color = getCellColor(isEmpty, isSelected, isEven);

  return (
    <div
      className={`flex items-center justify-center ${color} ${getCursorType(isEmpty, isSelected)}`}
      onMouseDown={onClick}
    >
      {children}
    </div>
  );
}

function getCellColor(
  isEmptyCell: boolean,
  isSelected: boolean,
  isEvenCell: boolean,
): string {
  // Empty Cell, default colors
  if (isEmptyCell) return isEvenCell ? "bg-[#B78662]" : "bg-[#ECD5B0]";

  // If piece is selected, show highlighted colors
  if (isSelected) return isEvenCell ? "bg-[#DBC24A]" : "bg-[#F5EA71]";

  // if piece is not selected, default colors
  return isEvenCell ? "bg-[#B78662]" : "bg-[#ECD5B0]";
}

function getCursorType(isEmptyCell: boolean, isCellSelected: boolean): string {
  if (isEmptyCell) return "cursor-default";

  return isCellSelected ? "cursor-grabbing" : "cursor-grab";
}
