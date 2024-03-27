export interface Position {
  x: number;
  y: number;
}

export type Color = "white" | "black";

export type PieceType =
  | "queen"
  | "king"
  | "pawn"
  | "rook"
  | "knight"
  | "bishop";

export interface Piece extends Position {
  type: PieceType;
  sprite: string;
  color: Color;
}

export interface Cell extends Position {
  isEven: boolean;
}

export interface Board {
  cells: Cell[][];
  pieces: Piece[];
}

export type X = Pick<Position, "x">;

export function generatePiece(
  type: PieceType,
  color: Color,
  x: number,
  y: number,
): Piece {
  return {
    type,
    color,
    sprite: "",
    x,
    y,
  };
}

export function generateBoard(): Board {
  const board: Board = {
    cells: [],
    pieces: [],
  };

  // Creating Board
  for (let x = 0; x < 8; x++) {
    board.cells.push([]);
    for (let y = 0; y < 8; y++) {
      board.cells[x].push({
        x,
        y,
        isEven: (x + y) % 2 ? true : false,
      });
    }
  }

  for (let x = 0; x < 8; x++) {
    board.pieces.push(generatePiece("pawn", "black", 1, x));
    board.pieces.push(generatePiece("pawn", "white", 6, x));
  }

  board.pieces.push(generatePiece("rook", "black", 0, 0));
  board.pieces.push(generatePiece("rook", "black", 0, 7));
  board.pieces.push(generatePiece("rook", "white", 7, 0));
  board.pieces.push(generatePiece("rook", "white", 7, 7));

  board.pieces.push(generatePiece("knight", "black", 0, 1));
  board.pieces.push(generatePiece("knight", "black", 0, 6));
  board.pieces.push(generatePiece("knight", "white", 7, 1));
  board.pieces.push(generatePiece("knight", "white", 7, 6));

  board.pieces.push(generatePiece("bishop", "black", 0, 2));
  board.pieces.push(generatePiece("bishop", "black", 0, 5));
  board.pieces.push(generatePiece("bishop", "white", 7, 2));
  board.pieces.push(generatePiece("bishop", "white", 7, 5));

  board.pieces.push(generatePiece("queen", "black", 0, 3));
  board.pieces.push(generatePiece("queen", "white", 7, 3));

  board.pieces.push(generatePiece("king", "black", 0, 4));
  board.pieces.push(generatePiece("king", "white", 7, 4));

  return board;
}
