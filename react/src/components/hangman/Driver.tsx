import { Drawing } from "./Drawing";
import { HangmanProvider } from "./HangmanContext";
import { Letters } from "./Letters";

export function Driver() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-neutral-900 text-white">
      <HangmanProvider>
        <Drawing />
        <Letters />
      </HangmanProvider>
    </main>
  );
}
