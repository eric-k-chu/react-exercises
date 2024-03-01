import { useState } from "react";
import { HangmanLetter, chars } from "./chars";

export function Letters({
  word,
  onWrongGuess,
}: {
  word: string;
  onWrongGuess: () => void;
}) {
  const [letters, setLetters] = useState(chars);

  function checkLetter(char: HangmanLetter) {
    if (word.toLowerCase().includes(char.letter.toLowerCase())) {
      const newLetters = letters.map((n) => {
        if (n.letter.toLowerCase() === char.letter.toLowerCase()) {
          return {
            ...n,
            ok: true,
          };
        } else {
          return n;
        }
      });
      setLetters(newLetters);
    } else {
      const newLetters = letters.map((n) => {
        if (n.letter.toLowerCase() === char.letter.toLowerCase()) {
          return {
            ...n,
            ok: false,
          };
        } else {
          return n;
        }
      });
      setLetters(newLetters);
      onWrongGuess();
    }
  }

  return (
    <section className="mx-auto mt-8 flex w-full max-w-7xl basis-1/2 flex-col items-center gap-4">
      <div className="space-x-4">
        {letters.slice(0, letters.length / 2).map((n) => (
          <button
            className={`px-4 py-2 capitalize ring-2 transition-colors duration-300 ease-in-out ${n.ok === undefined ? "ring-neutral-50 hover:text-sky-400 hover:ring-sky-400" : n.ok ? "pointer-events-none cursor-default text-neutral-600 ring-neutral-600" : "pointer-events-none cursor-default text-neutral-600 line-through ring-neutral-600"}`}
            key={n.letter}
            onClick={() => checkLetter(n)}
          >
            {n.letter}
          </button>
        ))}
      </div>
      <div className="space-x-4">
        {letters.slice(letters.length / 2).map((n) => (
          <button
            className={`px-4 py-2 capitalize ring-2 transition-colors duration-300 ease-in-out ${n.ok === undefined ? "ring-neutral-50 hover:text-sky-400 hover:ring-sky-400" : n.ok ? "pointer-events-none cursor-default text-neutral-600 ring-neutral-600" : "pointer-events-none cursor-default text-neutral-600 line-through ring-neutral-600"}`}
            key={n.letter}
            onClick={() => checkLetter(n)}
          >
            {n.letter}
          </button>
        ))}
      </div>
    </section>
  );
}
