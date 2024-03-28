import { links } from "@/lib/links";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 bg-neutral-900 py-8 text-white">
      <h1 className="text-4xl font-semibold tracking-wider">
        React Playground
      </h1>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-3 gap-8">
        {links.map((n) => (
          <Link
            to={"/" + n.path}
            className="group flex items-center gap-x-2 rounded-md bg-transparent px-4 py-16 ring-1 ring-neutral-600 transition-all duration-300 ease-in-out hover:ring-neutral-300"
            key={n.name}
          >
            <strong className="text-2xl text-neutral-600 transition-colors duration-300 ease-in-out group-hover:text-neutral-300">
              {n.name}
            </strong>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="h-auto w-8 translate-x-0 stroke-neutral-600 transition-all duration-300 ease-in-out group-hover:translate-x-2 group-hover:stroke-neutral-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        ))}
      </div>
    </main>
  );
}
