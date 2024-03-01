import { useState } from "react";
import { Drawing } from "./Drawing";
import { Letters } from "./Letters";
import { generate } from "random-words";

export function Driver() {
  const [word, setWord] = useState(generate({ maxLength: 10 }) as string);

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-neutral-900 text-white">
      <Drawing />
      <Letters word={word} />
    </main>
  );
}
