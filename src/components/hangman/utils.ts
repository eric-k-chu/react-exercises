import { HangmanLetter } from "./chars";

export function hasKeyBeenPressed(
  key: string,
  letters: HangmanLetter[],
): boolean {
  return letters.some((n) => n.letter === key && n.ok !== undefined);
}

export function isLetterInWord(letter: string, word: string): boolean {
  return word.toLowerCase().includes(letter.toLowerCase());
}

export function isLetter(char: string): boolean {
  return /^[a-zA-Z]$/.test(char);
}
