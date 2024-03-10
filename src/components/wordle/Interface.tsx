import { isCharInWordle } from "@/lib/utils";
import { useWordleContext } from "./WordleContext";

export function Interface() {
  const { grid, wordle, buffer, currentRow } = useWordleContext();

  return (
    <div className="space-y-2 p-8">
      {grid.map((arr, i) => {
        if (i === currentRow) {
          return (
            <div key={i} className="flex items-center gap-x-2">
              {buffer.map((char, id) => (
                <div
                  className={`flex size-16 items-center justify-center ring-2 ring-neutral-500 ${isCharInWordle(wordle, char) === true ? "bg-green-400" : isCharInWordle(wordle, char) === false ? "bg-red-400" : "bg-transparent"}`}
                  key={id}
                >
                  <p className="text-4xl font-semibold uppercase">{char}</p>
                </div>
              ))}
            </div>
          );
        }

        return (
          <div key={i} className="flex items-center gap-x-2">
            {arr.map((char, id) => (
              <div
                className={`flex size-16 items-center justify-center ring-2 ring-neutral-500 ${isCharInWordle(wordle, char) === true ? "bg-green-400" : isCharInWordle(wordle, char) === false ? "bg-red-400" : "bg-transparent"}`}
                key={id}
              >
                <p className="text-4xl font-semibold uppercase">{char}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
