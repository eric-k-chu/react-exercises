import { getCharStateFromWordle } from "@/lib/utils";
import { useWordleContext } from "./WordleContext";

export function Interface() {
  const { grid, wordle, currentRow } = useWordleContext();

  return (
    <div className="space-y-2 p-8">
      {grid.map((arr, rowId) => (
        <div key={rowId} className="flex items-center gap-x-2">
          {arr.map((char, id) => (
            <LetterBox
              key={id}
              wordle={wordle.split("")}
              letter={{ char, charIndex: id }}
              active={rowId === currentRow}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

type LetterBoxProps = {
  wordle: string[];
  letter: {
    char: string;
    charIndex: number;
  };
  active: boolean;
};

function LetterBox({ wordle, letter, active }: LetterBoxProps) {
  const state = getCharStateFromWordle(
    active,
    letter.char,
    letter.charIndex,
    wordle,
  );

  if (state === "wrong") {
    return (
      <div className="flex size-16 items-center justify-center bg-neutral-800 ring-2 ring-neutral-800">
        <p className="text-4xl font-semibold uppercase">{letter.char}</p>
      </div>
    );
  }

  if (state === "misplaced") {
    return (
      <div className="flex size-16 items-center justify-center bg-[#B59F3B] ring-2 ring-[#B59F3B]">
        <p className="text-4xl font-semibold uppercase">{letter.char}</p>
      </div>
    );
  }

  if (state === "correct") {
    return (
      <div className="flex size-16 items-center justify-center bg-[#538D4E] ring-2 ring-[#538D4E]">
        <p className="text-4xl font-semibold uppercase">{letter.char}</p>
      </div>
    );
  }

  return (
    <div className="flex size-16 items-center justify-center bg-transparent ring-2 ring-neutral-600">
      <p className="text-4xl font-semibold uppercase">{letter.char}</p>
    </div>
  );
}
