import { FormEvent, useState } from "react";

const nums = Array.from({ length: 50 }).map((_, i) => i);

function chunkify<T>(arr: T[], chunks = 5): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += chunks) {
    res.push(arr.slice(i, i + chunks));
  }
  return res;
}

export function PaginationAdvanced() {
  const [data] = useState(chunkify(nums));
  const [page, setPage] = useState(0);
  const [input, setInput] = useState("");

  function decrement(): void {
    if (page === 0) return;
    setPage(page - 5);
  }

  function increment(): void {
    if (page === data.length - 1) return;
    setPage(page + 5);
  }

  function goToPage(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const num = Number(input);
    if (Number.isNaN(num) || num < 0 || num > data.length - 1) return;
    setPage(num);
    setInput("");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-y-8 bg-neutral-900 text-white">
      <div className="flex items-center justify-center gap-x-8">
        {data[page].map((n) => (
          <p
            className="rounded-lg bg-neutral-800 px-2 py-1 text-2xl hover:cursor-pointer hover:bg-neutral-700"
            key={n}
          >
            {n}
          </p>
        ))}
      </div>
      <form
        className="jutsify-center flex items-center gap-x-4"
        onSubmit={goToPage}
      >
        <button
          className={`rounded-lg bg-neutral-800 px-2 py-1 text-base ${page === 0 ? "cursor-default select-none text-neutral-500" : "text-white hover:bg-neutral-700"}`}
          onClick={decrement}
          type="button"
        >
          PREV
        </button>
        <button
          type="button"
          className="rounded-lg bg-neutral-800 px-2 py-1 hover:bg-neutral-700"
          onClick={() => setPage(page)}
        >
          {page + 1}
        </button>
        <button
          type="button"
          className="rounded-lg bg-neutral-800 px-2 py-1 hover:bg-neutral-700"
          onClick={() => setPage(page + 1)}
        >
          {page + 2}
        </button>
        <button
          type="button"
          className="rounded-lg bg-neutral-800 px-2 py-1 hover:bg-neutral-700"
          onClick={() => setPage(page + 2)}
        >
          {page + 3}
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          className="w-12 appearance-none rounded-sm bg-transparent px-2 py-1 ring-1 ring-neutral-700"
          placeholder="..."
        />
        <button className="sr-only" type="submit" />
        <button
          className={`rounded-lg bg-neutral-800 px-2 py-1 text-base ${page === data.length - 1 ? "cursor-default select-none text-neutral-500" : "text-white hover:bg-neutral-700"}`}
          onClick={increment}
          type="button"
        >
          NEXT
        </button>
      </form>
    </div>
  );
}
