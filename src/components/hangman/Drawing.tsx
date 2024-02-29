export function Drawing() {
  return (
    <section className="flex w-full basis-1/2 items-center justify-center p-2">
      <Hanger />
    </section>
  );
}

function Hanger() {
  return (
    <div className="relative h-full">
      <div
        id="base"
        className="absolute bottom-0 right-[77px] h-2 w-20 rounded-md bg-neutral-50"
      />
      <div
        id="stem"
        className="absolute bottom-0 right-28 h-56 w-2 bg-neutral-50"
      />
      <div
        id="hook-arm"
        className="absolute right-10 top-28 h-2 w-20 rounded-md bg-neutral-50"
      />
      <div
        id="hook"
        className="absolute right-10 top-28 h-10 w-2 rounded-md bg-neutral-50"
      />
      <div />
      <div
        id="head"
        className="absolute right-[22px] top-[9.5rem] size-11 rounded-full ring-4 ring-neutral-50"
      />
      <div
        id="body"
        className="absolute bottom-24 right-[42px] h-12 w-1 bg-neutral-50"
      />
      <div
        id="left-arm"
        className="absolute bottom-[94px] right-[59px] h-12 w-1 rotate-45 rounded-b-md bg-neutral-50"
      />
      <div
        id="right-arm"
        className="absolute bottom-[94px] right-[24px] h-12 w-1 -rotate-45 rounded-b-md bg-neutral-50"
      />
      <div
        id="left-leg"
        className="absolute bottom-14 right-[59px] h-12 w-1 rotate-45 rounded-b-md bg-neutral-50"
      />
      <div
        id="right-left"
        className="absolute bottom-14 right-[24px] h-12 w-1 -rotate-45 rounded-b-md bg-neutral-50"
      />
    </div>
  );
}
