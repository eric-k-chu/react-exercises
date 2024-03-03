import { HangmanLetter } from "./chars";

export interface GetterSetter<T> {
  get: () => T;
  set: (n: T) => void;
}

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

export function isEveryGuessInWord(guesses: string[], word: string): boolean {
  return word.split("").every((n) => guesses.includes(n));
}

export function createGetSet<T>(
  get: T,
  set: (arg: T) => void,
): GetterSetter<T> {
  return {
    get: () => get,
    set,
  };
}
