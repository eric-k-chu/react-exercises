import { Drawing } from "./Drawing";
import { Words } from "./Words";

export function Driver() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-neutral-900 text-white">
      <Drawing />
      <Words />
    </main>
  );
}
