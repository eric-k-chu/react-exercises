import { useState } from "react";
import { Position, Board, ChessPiece } from "./Moves";

function generateBoard(): Board {
  const board: Board = {
    cells: [],
    pieces: [],
  };
  for (let x = 0; x < 8; x++) {
    board.cells.push([]);
    for (let y = 0; y < 8; y++) {
      board.cells[x].push({
        x,
        y,
        color: (x + y) % 2 ? "white" : "black",
      });
    }
  }

  for (let x = 0; x < 8; x++) {
    // Setting up black pawns on second row
    board.pieces.push({
      type: "pawn",
      color: "black",
      x: 1,
      y: x,
    });
    board.pieces.push({
      type: "pawn",
      color: "white",
      x: 6,
      y: x,
    });
  }

  return board;
}

function App() {
  const [board, setBoard] = useState(generateBoard());
  const [selected, setSelected] = useState<Position>();

  function handleCellClick(piece: ChessPiece) {}

  return (
    <main className="grid min-h-screen grid-cols-8 bg-neutral-900 p-4">
      {board.cells.map((row) =>
        row.map((col) => {
          const piece = board.pieces.find(
            (p) => p.x === col.x && p.y === col.y,
          );
          return <Cell color={col.color} piece={piece} />;
        }),
      )}
    </main>
  );
}

export default App;

function Cell({
  color,
  piece,
}: {
  color: "white" | "black";
  piece?: ChessPiece;
}) {
  return (
    <div
      className={`flex size-32 cursor-pointer items-center justify-center border ${color === "white" ? "bg-white" : "bg-black"}`}
    >
      <h1
        className={`text-sm font-semibold ${piece?.color === "white" ? "text-red-400" : "text-blue-400"}`}
      >
        {piece ? piece.type : " "}
      </h1>
    </div>
  );
}
