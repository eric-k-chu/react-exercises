const letters = "abcdefghijklmnopqrstuvwxyz".split("");

export function Words() {
  return (
    <section className="mx-auto flex w-full max-w-7xl basis-1/2 flex-wrap items-start justify-center gap-x-2 p-4">
      {letters.map((n) => (
        <button className="p-4 capitalize ring-2 ring-neutral-50" key={n}>
          {n}
        </button>
      ))}
    </section>
  );
}
