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
  buffer: string[];
  updateGrid: (y: number, x: number, char: string) => void;
}

const WordleContext = createContext<WordleContext>({
  wordle: "",
  grid: [[]],
  buffer: [],
  updateGrid: () => undefined,
});

const starter = Array.from({ length: 6 }).map(() => {
  return Array.from({ length: 5 }).map(() => "");
});

const emptyBuf = Array.from({ length: 5 }).map(() => "");

// Instead of updating the whole grid, I can have just have a new row that I update, and then when I hit enter, I will replace the row in the grid with the updated one

export function WordleProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [wordle] = useState("apple");
  const [grid, setGrid] = useState(starter);
  const [buffer, setBuffer] = useState<string[]>(emptyBuf);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const updateGrid = useCallback(
    (y: number, x: number, char: string) =>
      setGrid((prev) =>
        prev.map((row, rX) =>
          row.map((val, rY) => (rX === x && rY === y ? char : val)),
        ),
      ),
    [],
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isLetter(e.key) && e.key !== "Enter" && e.key !== "Backspace")
        return;

      if (e.key === "Enter") {
        console.log("Enter was pressed");
      } else if (e.key === "Backspace") {
        if (buffer.every((n) => n === "")) return;
        setBuffer((prev) => prev.map((n, i) => (i === y ? "" : n)));
        if (y > 0) setY(y - 1);
      } else {
        if (buffer.every((n) => n !== "")) return;
        setBuffer((prev) => prev.map((n, i) => (i === y ? e.key : n)));
        if (y < 4) setY(y + 1);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [grid, x, y]);

  return (
    <WordleContext.Provider
      value={{
        wordle,
        grid,
        buffer,
        updateGrid,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
}

export function useWordleContext() {
  return useContext(WordleContext);
}
