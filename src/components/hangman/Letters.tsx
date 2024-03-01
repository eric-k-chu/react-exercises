import { useState } from "react";

const chars = "abcdefghijklmnopqrstuvwxyz".split("");

export function Letters({ word }: { word: string }) {
  const [letters, setLetters] = useState(chars);

  return (
    <section className="mx-auto mt-8 flex w-full max-w-7xl basis-1/2 flex-col items-center gap-4">
      <div className="space-x-4">
        {letters.slice(0, letters.length / 2).map((n) => (
          <button
            className="px-4 py-2 capitalize ring-2 ring-neutral-50 transition-colors duration-300 ease-in-out hover:text-sky-400 hover:ring-sky-400"
            key={n}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="space-x-4">
        {letters.slice(letters.length / 2).map((n) => (
          <button
            className="px-4 py-2 capitalize ring-2 ring-neutral-50 transition-colors duration-300 ease-in-out hover:text-sky-400 hover:ring-sky-400"
            key={n}
          >
            {n}
          </button>
        ))}
      </div>
    </section>
  );
}
