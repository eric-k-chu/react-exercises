import { Piece, generateBoard } from "@/lib/chess";
import { useState } from "react";
import { Cell } from "./Cell";

export function Driver() {
  const [board] = useState(generateBoard());
  const [selected, setSelected] = useState<Piece>();

  function handleCellClick(piece: Piece | undefined) {
    if (selected === piece) {
      setSelected(undefined);
    } else {
      setSelected(piece);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div
        style={{
          display: "grid",
          gridTemplate:
            "repeat(8, min(10vw, 10vh)) / repeat(8, min(10vw, 10vh))",
        }}
      >
        {board.cells.map((row) =>
          row.map((col) => {
            const piece = board.pieces.find(
              (p) => p.x === col.x && p.y === col.y,
            );
            return (
              <Cell
                isEven={col.isEven}
                selected={selected}
                piece={piece}
                onClick={() => handleCellClick(piece)}
              />
            );
          }),
        )}
      </div>
    </main>
  );
}
