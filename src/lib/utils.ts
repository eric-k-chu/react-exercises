import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { validWords } from "./words";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidKeyword(key: string): boolean {
  if (key === "Enter" || key === "Backspace") return true;
  return /^[a-zA-Z]$/.test(key);
}

export function isValidWord(word: string): boolean {
  return validWords.includes(word);
}

export type LetterState = "default" | "wrong" | "misplaced" | "correct";

export function getCharStateFromWordle(
  active: boolean,
  char: string,
  charIndex: number,
  wordle: string[],
): LetterState {
  if (active || char.length === 0) return "default";

  if (!wordle.includes(char)) return "wrong";

  // TODO: If the same letter is in multiple place, find index will only work for the first letter
  const index = wordle.findIndex((n) => n === char);

  if (index !== charIndex) return "misplaced";

  return "correct";
}
