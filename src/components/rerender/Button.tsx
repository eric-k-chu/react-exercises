import { useCounterContext } from "./CounterContext";

export function Button() {
  const { count, setCount } = useCounterContext();

  return (
    <div className="flex basis-1/2 flex-col items-center gap-y-4">
      <strong>{count}</strong>
      <button
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
        className="rounded-md bg-neutral-800 px-4 py-2 text-lg ring-1 ring-neutral-700"
      >
        Increment
      </button>
    </div>
  );
}
