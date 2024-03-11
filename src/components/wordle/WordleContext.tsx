import { isLetter } from "@/lib/utils";
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

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isLetter(e.key) && e.key !== "Enter" && e.key !== "Backspace")
        return;

      if (e.key === "Enter") {
        console.log("Enter");
        return;
      }

      if (e.key === "Backspace") {
        deleteLetter();
        return;
      }

      if (isLetter(e.key)) {
        addLetter(e.key);
        return;
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [addLetter, deleteLetter]);

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
