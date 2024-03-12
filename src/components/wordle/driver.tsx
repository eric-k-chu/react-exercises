import { Interface } from "./Interface";
import { Keyboard } from "./Keyboard";
import { WordleProvider } from "./WordleContext";

export function Driver() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-neutral-900 text-white">
      <WordleProvider>
        <Interface />
        <Keyboard />
      </WordleProvider>
    </div>
  );
}
