import { Interface } from "./Interface";
import { WordleProvider } from "./WordleContext";

export function Driver() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-neutral-900 text-white">
      <WordleProvider>
        <Interface />
      </WordleProvider>
    </div>
  );
}
