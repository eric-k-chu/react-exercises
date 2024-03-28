import { useCallback, useEffect, useRef, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

interface Pokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

async function fetchPokemons(offset: number): Promise<Pokemons> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=8&offset=${offset}`,
  );
  if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
  return await res.json();
}

export function usePokemons(offset: number, increment: () => void) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [pokemons, setPokemons] = useState<Pokemons>();
  const [hasMore, setHasMore] = useState(false);

  // Unsure about using useRef here
  const observer = useRef<IntersectionObserver>();
  const lastItem = useCallback(
    (node: Element | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          increment();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  useEffect(() => {
    async function getPokemons() {
      try {
        setIsLoading(true);
        setError(undefined);
        const data = await fetchPokemons(offset);
        setPokemons(data);

        if (pokemons) {
          setPokemons({
            ...data,
            results: [...pokemons.results, ...data.results],
          });
        } else {
          setPokemons(data);
        }
        setHasMore(pokemons?.next !== null);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    if (!isLoading) getPokemons();
  }, [offset]);

  return [pokemons, isLoading, error, lastItem] as const;
}
