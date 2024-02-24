import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function ShadCnUi() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <h1 className="basis-1/3 text-center text-white">1</h1>
          </CarouselItem>
          <CarouselItem>
            <h1 className="basis-1/3 text-center text-white">2</h1>
          </CarouselItem>
          <CarouselItem>
            <h1 className="basis-1/3 text-center text-white">3</h1>
          </CarouselItem>
          <CarouselItem>
            <h1 className="basis-1/3 text-center text-white">4</h1>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
