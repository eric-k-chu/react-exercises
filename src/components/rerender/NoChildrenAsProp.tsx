import { useState } from "react";
import { CounterContext } from "./CounterContext";
import { RenderCount } from "./RenderCount";
import { Button } from "./Button";
import { ImgCarousel } from "./ImageCarousel";

export function NoChildrenAsProp() {
  const [count, setCount] = useState(0);
  return (
    <section className="flex h-full basis-1/2 flex-col items-center justify-center gap-y-4">
      <CounterContext.Provider
        value={{
          count,
          setCount,
        }}
      >
        <p>
          Rerendering of &#60;
          <code className="text-green-500">RenderCount </code>&#47;&#62;
        </p>
        <ImgCarousel imgs={["/images/no-children-prop.png"]} />
        <RenderCount />
        <Button />
      </CounterContext.Provider>
    </section>
  );
}
