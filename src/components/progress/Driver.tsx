import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

export function Driver() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;

    const timer = setTimeout(() => setProgress((prev) => prev + 20), 1000);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <Progress value={progress} className="w-[60%]" />
    </main>
  );
}
