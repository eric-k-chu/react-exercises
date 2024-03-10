import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

export function isLetter(char: string): boolean {
  return /^[a-zA-Z]$/.test(char);
}
