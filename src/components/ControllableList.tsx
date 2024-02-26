import { useDebouncer } from "@/hooks/useDebouncer";
import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";

const list = ["JavaScript", "C++", "C#", "Rust", "Go", "Python"];

export function ControllableList() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [lang, setLang] = useState("");
  const [isLoading] = useDebouncer(() => setLang(query), [query]);

  const filteredList = list.filter((n) =>
    n.toLowerCase().includes(query.toLowerCase()),
  );

  function onArrowKeyPress(e: KeyboardEvent<HTMLInputElement>): void {
    if (filteredList.length === 0) return;

    if (e.key === "ArrowDown") {
      setSelected((selected + 1) % filteredList.length);
    } else if (e.key === "ArrowUp") {
      setSelected((selected - 1 + filteredList.length) % filteredList.length);
    }
  }

  function resetSelected(e: ChangeEvent<HTMLInputElement>): void {
    setQuery(e.currentTarget.value);
    setSelected(0);
  }

  function handleSearch(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (filteredList.length === 0) {
      setLang(query);
    } else {
      setLang(filteredList[selected]);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-neutral-900 text-white">
      <h1 className="p-20 text-6xl">
        {isLoading ? "Loading..." : lang || "Choose a Language"}
      </h1>
      <form
        className="relative mx-auto w-full max-w-xl"
        onSubmit={handleSearch}
      >
        <div className="flex items-center justify-between gap-x-[2px]">
          <input
            value={query}
            onChange={resetSelected}
            placeholder="Search for an item..."
            className="w-full rounded-l-lg bg-transparent p-2 ring-1 ring-neutral-800 focus:outline-none focus:ring-blue-500"
            autoFocus
            onKeyDown={onArrowKeyPress}
          />
          <button
            className="rounded-r-lg bg-neutral-800 p-2 ring-1 ring-neutral-800 focus:outline-none focus:ring-blue-500"
            type="submit"
          >
            <SearchIcon />
          </button>
        </div>
        {query.length > 0 && filteredList.length > 0 && (
          <ul className="absolute left-0 top-14 w-full divide-y divide-neutral-800 rounded-lg ring-1 ring-neutral-800">
            {filteredList.map((n, i) => (
              <li
                key={n}
                className={`p-2 ${selected === i ? "bg-neutral-800" : "bg-transparent"}`}
              >
                {n}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}
