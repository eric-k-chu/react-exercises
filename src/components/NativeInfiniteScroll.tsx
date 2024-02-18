import { useState } from "react";
import { usePokemons } from "../hooks/usePokemons";

export function NativeInfiniteScroll() {
  const [offset, setOffset] = useState(0);
  const [pokemons, isLoading, error, lastItem] = usePokemons(offset, () =>
    setOffset((prev) => prev + 8),
  );

  if (isLoading && !pokemons) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        {error instanceof Error
          ? error.message
          : "An unknown error has occured."}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl space-y-10 p-4">
      {pokemons?.results.map((n, i) => {
        if (i === pokemons.results.length - 1) {
          return (
            <div
              className="rounded-md border border-neutral-400 px-4 py-10 text-center capitalize"
              key={n.name}
              ref={lastItem}
            >
              <h2>{n.name}</h2>
            </div>
          );
        }

        return (
          <div
            className="rounded-md border border-neutral-400 px-4 py-10 text-center capitalize"
            key={n.name}
          >
            <h2>{n.name}</h2>
          </div>
        );
      })}
      {isLoading && pokemons && <div>Loading...</div>}
    </div>
  );
}
