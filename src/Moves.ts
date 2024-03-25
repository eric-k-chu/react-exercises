export interface Position {
  x: number;
  y: number;
}

export interface ChessPiece extends Position {
  type: string;
  color: "white" | "black";
}

export interface Cell extends Position {
  color: "white" | "black";
}

export interface Board {
  cells: Cell[][];
  pieces: ChessPiece[];
}

export function move(
  startPos: Position,
  endPos: Position,
  board: Board,
): Cell[][] {
  const distanceX = startPos.x - endPos.x;
  const distanceY = startPos.y - endPos.y;

  return [[]];
}
