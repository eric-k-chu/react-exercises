import { createContext, useContext, useState } from "react";

interface CounterContext {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<CounterContext>({
  count: 0,
  setCount: () => undefined,
});

type Props = {
  children: React.ReactNode;
};

export function CounterProvider({ children }: Readonly<Props>) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext() {
  return useContext(CounterContext);
}
