import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { validWords } from "./words";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isCharInWordle(
  wordle: string,
  char: string,
): boolean | undefined {
  if (char.length === 0) return undefined;
  return wordle.toLowerCase().includes(char.toLowerCase());
}

export function isValidKeyword(key: string): boolean {
  if (key === "Enter" || key === "Backspace") return true;
  return /^[a-zA-Z]$/.test(key);
}

export function isValidWord(word: string): boolean {
  return validWords.includes(word);
}
