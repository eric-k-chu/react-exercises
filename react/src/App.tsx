import { useState } from "react";
// import { Driver } from "./components/chess/Driver";

function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  function start(): void {
    const timeId = setInterval(() => setTime((prev) => prev + 1), 1000);
    setTimer(timeId);
  }

  function stop(): void {
    clearInterval(timer);
    setTime(0);
    setTimer(undefined);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1>{time}</h1>
      {timer ? (
        <button
          type="button"
          className="rounded-md border px-2 py-1"
          onClick={stop}
        >
          Stop
        </button>
      ) : (
        <button
          type="button"
          className="rounded-md border px-2 py-1"
          onClick={start}
        >
          Start
        </button>
      )}
    </div>
  );
}

export default App;
