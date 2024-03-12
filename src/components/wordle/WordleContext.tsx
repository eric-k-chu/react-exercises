import {
  LetterState,
  getCharStateFromWordle,
  isValidKeyword,
  isValidWord,
} from "@/lib/utils";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

/*
Four States a letter can be in:
- default: bg-transparent, typing in letter
- wrong: bg-neutral-600, letter dne in wordle
- misplaced: bg-yellow-600, letter exists in wordle but misplaced
- correct: bg-green-600, letter in correct place
*/

type GuessedLetters = Record<string, LetterState>;

interface WordleContext {
  wordle: string;
  grid: string[][];
  currentRow: number;
  add: (ch: string) => void;
  del: () => void;
  guess: () => void;
  guessedLetters: GuessedLetters;
}

const WordleContext = createContext<WordleContext>({
  wordle: "",
  grid: [[]],
  currentRow: 0,
  add: () => undefined,
  del: () => undefined,
  guess: () => undefined,
  guessedLetters: {},
});

const starter = Array(6).fill(Array(5).fill(""));

export function WordleProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [wordle] = useState("apple");
  const [grid, setGrid] = useState<string[][]>(starter);
  const [currentRow, setCurrentRow] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGameDone, setIsGameDone] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState<GuessedLetters>({});

  const addLetter = useCallback(
    (letter: string) => {
      if (activeIndex === 5) return;
      setGrid((prev) =>
        prev.map((row, i) =>
          row.map((char, j) => {
            if (i === currentRow && j === activeIndex) {
              return letter;
            } else {
              return char;
            }
          }),
        ),
      );
      setActiveIndex((prev) => prev + 1);
    },
    [activeIndex, currentRow],
  );

  const deleteLetter = useCallback(() => {
    if (activeIndex === 0) return;
    setGrid((prev) =>
      prev.map((row, i) =>
        row.map((char, j) => {
          if (i === currentRow && j === activeIndex - 1) {
            return "";
          } else {
            return char;
          }
        }),
      ),
    );
    setActiveIndex((prev) => prev - 1);
  }, [activeIndex, currentRow]);

  const addGuess = useCallback(() => {
    if (activeIndex !== 5) return;

    const [guessedChars] = grid.filter((_, i) => i === currentRow);
    const guessedWord = guessedChars.join("");

    if (!isValidWord(guessedWord)) return;

    if (!wordle.includes(guessedWord)) {
      if (currentRow < 5) {
        setActiveIndex(0);
      } else {
        alert(`Failed! The wordle is ${wordle}`);
        setIsGameDone(true);
      }
    } else {
      alert("You correctly guessed the word!");
      setIsGameDone(true);
    }
    setCurrentRow((prev) => prev + 1);
    const newGuesses = { ...guessedLetters };
    guessedChars.forEach((char, i) => {
      newGuesses[char] = getCharStateFromWordle(
        false,
        char,
        i,
        wordle.split(""),
      );
    });
    setGuessedLetters(newGuesses);
  }, [activeIndex, currentRow, grid, wordle]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isValidKeyword(e.key) || isGameDone) return;

      if (e.key === "Enter") {
        addGuess();
        return;
      }

      if (e.key === "Backspace") {
        deleteLetter();
        return;
      }

      if (isValidKeyword(e.key)) {
        addLetter(e.key);
        return;
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [addLetter, deleteLetter, addGuess, isGameDone, guessedLetters]);

  return (
    <WordleContext.Provider
      value={{
        wordle,
        grid,
        currentRow,
        add: addLetter,
        del: deleteLetter,
        guess: addGuess,
        guessedLetters,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
}

export function useWordleContext() {
  return useContext(WordleContext);
}
