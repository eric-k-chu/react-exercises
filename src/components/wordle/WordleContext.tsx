import { isLetter } from "@/lib/utils";
import { createContext, useContext, useEffect, useState } from "react";

interface WordleContext {
  wordle: string;
  grid: string[][];
  buffer: string[];
  currentRow: number;
}

const WordleContext = createContext<WordleContext>({
  wordle: "",
  grid: [[]],
  buffer: [],
  currentRow: 0,
});

const starter = Array.from({ length: 6 }).map(() => {
  return Array.from({ length: 5 }).map(() => "");
});

const emptyBuf = Array.from({ length: 5 }).map(() => "");

export function WordleProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [wordle] = useState("apple");
  const [grid, setGrid] = useState(starter);
  const [buffer, setBuffer] = useState<string[]>(emptyBuf);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isLetter(e.key) && e.key !== "Enter" && e.key !== "Backspace")
        return;

      if (e.key === "Enter") {
        setGrid((prev) => prev.map((row, id) => (id === x ? buffer : row)));
        setBuffer(emptyBuf);
        setY(0);
        if (x < 6) setX(x + 1);
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
  }, [grid, x, y, buffer]);

  return (
    <WordleContext.Provider
      value={{
        wordle,
        grid,
        buffer,
        currentRow: x,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
}

export function useWordleContext() {
  return useContext(WordleContext);
}
