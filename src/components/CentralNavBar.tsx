import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function CentralNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="size-8 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={`fixed flex h-screen w-full items-center transition-all duration-300 ease-in-out ${isOpen ? "bg-zinc-900/25 backdrop-blur-sm" : "pointer-events-none bg-transparent backdrop-blur-0"}`}
      >
        <menu
          className={`flex h-full w-[300px] flex-col gap-y-4 border-r border-r-neutral-800 bg-neutral-900 p-4 text-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-[300px]"}`}
        >
          <strong className="text-2xl">Menu</strong>
          <Link to="/hangman">Hangman</Link>
          <Link to="/hangman">Hangman</Link>
          <Link to="/hangman">Hangman</Link>
        </menu>
        <div className="h-full w-full" onClick={() => setIsOpen(false)} />
      </div>
      <Outlet />
    </>
  );
}
