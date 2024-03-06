import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Theme = "Light" | "Dark" | "System";
const themes = ["Light", "Dark", "System"] as const;

export function Driver() {
  const [theme, setTheme] = useState<Theme>("Light");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-4">
      <h1>{theme}</h1>
      <Select onValueChange={(e) => setTheme(e as Theme)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {themes.map((n) => (
            <SelectItem value={n} key={n}>
              {n}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </main>
  );
}
