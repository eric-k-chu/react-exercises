import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

type Props = {
  imgs: string[];
};

export function ImgCarousel({ imgs }: Props) {
  return (
    <Carousel>
      <CarouselContent>
        {imgs.map((n) => (
          <CarouselItem key={n} className="flex justify-center">
            <img src={n} className="aspect-auto h-72 object-cover" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
