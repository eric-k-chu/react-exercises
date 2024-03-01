import { useState } from "react";
import { Drawing } from "./Drawing";
import { Letters } from "./Letters";
import { generate } from "random-words";

export function Driver() {
  const [word, setWord] = useState(
    generate({ minLength: 5, maxLength: 10 }) as string,
  );
  const [wrongGuesses, setWrongGuesses] = useState(0);

  console.log(word);

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-neutral-900 text-white">
      <Drawing wrongGuesses={wrongGuesses} word={word} />
      <Letters
        word={word}
        onWrongGuess={() => setWrongGuesses((prev) => prev + 1)}
      />
    </main>
  );
}
