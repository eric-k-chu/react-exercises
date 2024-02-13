import { KeyboardEvent, useState } from "react";

const usernames = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function TagsInSearchBar() {
  const [selected, setSelected] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function AddToSelected(e: KeyboardEvent<HTMLDivElement>): void {
    if (e.key === "Enter") {
      if (input.length === 0) return;
      setSelected([...selected, input]);
      setInput("");
    } else if (e.key === "Backspace") {
      if (selected.length === 0) return;
      setSelected(selected.slice(0, -1));
    }
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center gap-8">
      <div
        className="flex w-full items-center gap-x-2 rounded-md bg-neutral-900 p-2"
        onKeyDown={(e) => AddToSelected(e)}
      >
        {selected.map((n) => (
          <Tag
            name={n}
            key={n}
            onClick={() => setSelected(selected.filter((name) => n !== name))}
          />
        ))}
        <input
          onChange={(e) => setInput(e.currentTarget.value)}
          value={input}
          className="w-full bg-transparent leading-9 focus:outline-none"
          placeholder="Add a tag"
        />
      </div>
      <h2 className="w-full text-left font-semibold">Presets</h2>
      <div className="flex flex-wrap items-center gap-4">
        {usernames.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setSelected([...selected, n])}
            className="flex min-w-fit items-center justify-center rounded-lg bg-blue-500 px-4 py-1 transition-colors ease-in-out hover:bg-blue-600"
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

function Tag({ name, onClick }: { name: string; onClick: () => void }) {
  return (
    <button
      type="button"
      className="flex min-w-fit items-center justify-center gap-x-2 rounded-l-lg rounded-r-2xl bg-blue-500 px-2 py-0.5 transition-colors ease-in-out hover:bg-red-600"
      onClick={onClick}
    >
      {name}
      <XCircle />
    </button>
  );
}

function XCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

export default TagsInSearchBar;
