import { LetterState } from "@/lib/utils";
import { useWordleContext } from "./WordleContext";

const top = "qwertyuiop".split("");
const mid = "asdfghjkl".split("");
const bot = "zxcvbnm".split("");

export function Keyboard() {
  const { guess, del, add, guessedLetters } = useWordleContext();

  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="flex items-center gap-x-2">
        {top.map((n) => (
          <KeyBox state={guessedLetters[n]} add={() => add(n)}>
            {n}
          </KeyBox>
        ))}
      </div>
      <div className="flex items-center gap-x-2">
        {mid.map((n) => (
          <KeyBox state={guessedLetters[n]} add={() => add(n)}>
            {n}
          </KeyBox>
        ))}
      </div>
      <div className="flex items-center gap-x-2">
        <button
          type="button"
          onClick={guess}
          className="flex h-16 w-20 items-center justify-center rounded-md bg-neutral-500 p-4 text-sm font-semibold uppercase"
        >
          Enter
        </button>
        {bot.map((n) => (
          <KeyBox state={guessedLetters[n]} add={() => add(n)}>
            {n}
          </KeyBox>
        ))}
        <button
          type="button"
          onClick={del}
          className="flex h-16 w-20 items-center justify-center rounded-md bg-neutral-500 p-4 text-sm font-semibold uppercase"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

type KeyBoxProp = {
  state: LetterState;
  add: () => void;
  children: React.ReactNode;
};

function KeyBox({ state, add, children }: KeyBoxProp) {
  if (state === "correct") {
    return (
      <button
        onClick={add}
        type="button"
        className="flex h-16 w-12 items-center justify-center rounded-md bg-[#538D4E] p-4 text-xl font-semibold uppercase"
      >
        {children}
      </button>
    );
  }

  if (state === "misplaced") {
    return (
      <button
        onClick={add}
        type="button"
        className="flex h-16 w-12 items-center justify-center rounded-md bg-[#B59F3B] p-4 text-xl font-semibold uppercase"
      >
        {children}
      </button>
    );
  }

  if (state === "wrong") {
    return (
      <button
        onClick={add}
        type="button"
        className="flex h-16 w-12 items-center justify-center rounded-md bg-neutral-800 p-4 text-xl font-semibold uppercase"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={add}
      type="button"
      className="flex h-16 w-12 items-center justify-center rounded-md bg-neutral-500 p-4 text-xl font-semibold uppercase"
    >
      {children}
    </button>
  );
}
