import { Button } from "./Button";
import { CounterProvider } from "./CounterContext";
import { ImgCarousel } from "./ImageCarousel";
import { RenderCount } from "./RenderCount";

export function ChildrenAsProp() {
  return (
    <section className="flex h-full basis-1/2 flex-col items-center justify-center gap-y-4">
      <CounterProvider>
        <p>
          No rerendering of &#60;
          <code className="text-green-500">RenderCount </code>&#47;&#62;
        </p>
        <ImgCarousel
          imgs={[
            "/images/children-prop-context.png",
            "/images/children-prop.png",
          ]}
        />
        <RenderCount />
        <Button />
      </CounterProvider>
    </section>
  );
}
