import { generate } from "random-words";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { HangmanLetter, chars } from "./chars";

interface GetterSetter<T> {
  get: T;
  set: (n: T) => void;
}

interface HangmanContext {
  word: GetterSetter<string>;
  letters: GetterSetter<HangmanLetter[]>;
  wrongGuesses: GetterSetter<number>;
  correctGuesses: GetterSetter<string[]>;
  gameState: GetterSetter<boolean>;
  reset: () => void;
}

const HangmanContext = createContext<HangmanContext>({
  word: {
    get: "",
    set: () => undefined,
  },
  letters: {
    get: [],
    set: () => undefined,
  },
  wrongGuesses: {
    get: 0,
    set: () => undefined,
  },
  correctGuesses: {
    get: [],
    set: () => undefined,
  },
  gameState: {
    get: false,
    set: () => undefined,
  },
  reset: () => undefined,
});

export function HangmanProvider({ children }: { children: ReactNode }) {
  const [word, setWord] = useState(
    generate({ minLength: 5, maxLength: 10 }) as string,
  );
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [letters, setLetters] = useState(chars);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  console.log(word);

  useEffect(() => {
    if (word.split("").every((n) => correctGuesses.includes(n)))
      setIsFinished(true);
  }, [word, correctGuesses]);

  useEffect(() => {
    if (wrongGuesses === 6) setIsFinished(true);
  }, [wrongGuesses]);

  return (
    <HangmanContext.Provider
      value={{
        word: {
          get: word,
          set: setWord,
        },
        letters: {
          get: letters,
          set: setLetters,
        },
        wrongGuesses: {
          get: wrongGuesses,
          set: setWrongGuesses,
        },
        correctGuesses: {
          get: correctGuesses,
          set: setCorrectGuesses,
        },
        gameState: {
          get: isFinished,
          set: setIsFinished,
        },
        reset: () => {
          setWord(generate({ minLength: 5, maxLength: 10 }) as string);
          setCorrectGuesses([]);
          setWrongGuesses(0);
          setLetters(chars);
          setIsFinished(false);
        },
      }}
    >
      {children}
    </HangmanContext.Provider>
  );
}

export function useHangmanContext() {
  return useContext(HangmanContext);
}
