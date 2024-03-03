/* eslint-disable react-refresh/only-export-components */
import { generate } from "random-words";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { HangmanLetter, chars } from "./chars";
import {
  GetterSetter,
  createGetSet,
  hasKeyBeenPressed,
  isEveryGuessInWord,
  isLetter,
  isLetterInWord,
} from "./utils";

interface HangmanContext {
  word: GetterSetter<string>;
  letters: GetterSetter<HangmanLetter[]>;
  wrongGuesses: GetterSetter<number>;
  correctGuesses: GetterSetter<string[]>;
  gameState: GetterSetter<boolean>;
  reset: () => void;
  validate: (letter: string) => void;
}

const HangmanContext = createContext<HangmanContext>({
  word: {
    get: () => "",
    set: () => undefined,
  },
  letters: {
    get: () => [],
    set: () => undefined,
  },
  wrongGuesses: {
    get: () => 0,
    set: () => undefined,
  },
  correctGuesses: {
    get: () => [],
    set: () => undefined,
  },
  gameState: {
    get: () => false,
    set: () => undefined,
  },
  reset: () => undefined,
  validate: () => undefined,
});

export function HangmanProvider({ children }: { children: ReactNode }) {
  const [word, setWord] = useState(
    generate({ minLength: 5, maxLength: 10 }) as string,
  );
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [letters, setLetters] = useState(chars);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const validateLetter = useCallback(
    (letter: string) => {
      if (isFinished) return;

      const isOk = isLetterInWord(letter, word);
      setLetters(
        letters.map((n) =>
          n.letter.toLowerCase() === letter.toLowerCase()
            ? { ...n, ok: isOk }
            : n,
        ),
      );

      if (isOk) {
        setCorrectGuesses((prev) => [...prev, letter]);
      } else {
        setWrongGuesses((prev) => prev + 1);
      }
    },
    [isFinished, word, letters],
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isLetter(e.key) || hasKeyBeenPressed(e.key, letters)) return;

      validateLetter(e.key);
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [letters, validateLetter]);

  useEffect(() => {
    if (isEveryGuessInWord(correctGuesses, word)) setIsFinished(true);
  }, [word, correctGuesses]);

  useEffect(() => {
    if (wrongGuesses === +import.meta.env.VITE_MAX_GUESSES) setIsFinished(true);
  }, [wrongGuesses]);

  return (
    <HangmanContext.Provider
      value={{
        word: createGetSet(word, setWord),
        letters: createGetSet(letters, setLetters),
        wrongGuesses: createGetSet(wrongGuesses, setWrongGuesses),
        correctGuesses: createGetSet(correctGuesses, setCorrectGuesses),
        gameState: createGetSet(isFinished, setIsFinished),
        reset: () => {
          setWord(generate({ minLength: 5, maxLength: 10 }) as string);
          setCorrectGuesses([]);
          setWrongGuesses(0);
          setLetters(chars);
          setIsFinished(false);
        },
        validate: validateLetter,
      }}
    >
      {children}
    </HangmanContext.Provider>
  );
}

export function useHangmanContext() {
  return useContext(HangmanContext);
}
