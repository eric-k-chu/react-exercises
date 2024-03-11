import { isValidKeyword, isValidWord } from "@/lib/utils";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface WordleContext {
  wordle: string;
  grid: string[][];
  currentRow: number;
}

const WordleContext = createContext<WordleContext>({
  wordle: "",
  grid: [[]],
  currentRow: 0,
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

    const guess = grid.filter((_, i) => i === currentRow)[0].join("");

    if (!isValidWord(guess)) return;

    if (!wordle.includes(guess)) {
      if (currentRow < 5) {
        setCurrentRow((prev) => prev + 1);
        setActiveIndex(0);
      } else {
        alert(`Failed! The wordle is ${wordle}`);
        setIsGameDone(true);
      }
      return;
    }

    alert("You correctly guessed the word!");
    setIsGameDone(true);
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
  }, [addLetter, deleteLetter, addGuess, isGameDone]);

  return (
    <WordleContext.Provider
      value={{
        wordle,
        grid,
        currentRow,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
}

export function useWordleContext() {
  return useContext(WordleContext);
}
