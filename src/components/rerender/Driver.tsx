import { ChildrenAsProp } from "./ChildrenAsProp";
import { NoChildrenAsProp } from "./NoChildrenAsProp";

export function Driver() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <a
        className="fixed top-5 text-blue-500 underline"
        href="https://kentcdodds.com/blog/optimize-react-re-renders"
        target="_blank"
      >
        Blog post explaining interaction
      </a>
      <ChildrenAsProp />
      <NoChildrenAsProp />
    </main>
  );
}
