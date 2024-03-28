const letters = "abcdefghijklmnopqrstuvwxyz".split("");

export interface HangmanLetter {
  letter: string;
  ok: boolean | undefined;
}

export const chars = letters.map((n) => {
  return {
    letter: n,
    ok: undefined,
  } as HangmanLetter;
});
