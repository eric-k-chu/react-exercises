import { useEffect, useState } from "react";

export function useDebouncer(
  fn: () => void,
  dependencyList?: any[],
  delay = 1000,
) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const delayId = setTimeout(() => {
      fn();
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(delayId);
  }, dependencyList);

  return [isLoading] as const;
}
