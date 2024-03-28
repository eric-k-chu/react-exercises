import { HangmanLetter } from "./chars";
import { useHangmanContext } from "./HangmanContext";

export function Letters() {
  const { word, letters, wrongGuesses, gameState, reset, validate } =
    useHangmanContext();

  function checkLetter(char: HangmanLetter) {
    if (char.ok !== undefined) return;
    validate(char.letter);
  }

  if (gameState.get()) {
    return (
      <section className="mx-auto mt-8 flex w-full max-w-7xl basis-1/2 flex-col items-center gap-y-4">
        <strong className="text-xl tracking-widest md:text-3xl">
          Finished!
        </strong>
        <p className="text-lg md:text-xl">
          Wrong Guesses: {wrongGuesses.get()}
        </p>
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-base transition-colors duration-300 ease-in-out hover:bg-blue-500/80 md:text-xl"
          type="button"
          onClick={reset}
        >
          Restart?
        </button>
      </section>
    );
  }

  return (
    <section className="mx-auto mt-8 flex w-full max-w-7xl basis-1/2 flex-col items-center gap-4">
      <div className="space-x-4">
        {letters
          .get()
          .slice(0, letters.get().length / 2)
          .map((n) => (
            <button
              className={`px-4 py-2 capitalize ring-2 transition-colors duration-300 ease-in-out ${n.ok === undefined ? "ring-neutral-50 hover:text-sky-400 hover:ring-sky-400" : n.ok ? "pointer-events-none cursor-default text-green-800 ring-green-800" : "pointer-events-none cursor-default text-red-800 line-through ring-red-800"}`}
              key={n.letter}
              onClick={() => checkLetter(n)}
            >
              {n.letter}
            </button>
          ))}
      </div>
      <div className="space-x-4">
        {letters
          .get()
          .slice(letters.get().length / 2)
          .map((n) => (
            <button
              className={`px-4 py-2 capitalize ring-2 transition-colors duration-300 ease-in-out ${n.ok === undefined ? "ring-neutral-50 hover:text-sky-400 hover:ring-sky-400" : n.ok ? "pointer-events-none cursor-default text-green-800 ring-green-800" : "pointer-events-none cursor-default text-red-800 line-through ring-red-800"}`}
              key={n.letter}
              onClick={() => checkLetter(n)}
            >
              {n.letter}
            </button>
          ))}
      </div>
      {import.meta.env.DEV && (
        <div className="group mb-4 mt-auto w-48 rounded-md bg-neutral-800 p-4">
          <p className="block text-center group-hover:hidden">
            Hover to See Answer
          </p>
          <p className="hidden text-center uppercase group-hover:block">
            {word.get()}
          </p>
        </div>
      )}
    </section>
  );
}
