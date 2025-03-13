import Button from "@/ui/button";
import TattooStyleTags from "@/ui/tattooStyleTags";
import Text from "@/ui/text";
import Image from "next/image";
import { EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ArtistTileProp {
  portfolio: string[];
  firstName: string;
  lastName: string;
  postalCode: string;
  city: string;
  tattooStyle: string[];
  hourlyRate: string;
}

export default function ArtistTileDesktop(prop: ArtistTileProp) {
  return (
    <div className="bg-background flex flex-col border-1 rounded-sm overflow-hidden h-full">
      <div className="aspect-8/9">
        <Swiper
          pagination={{ dynamicBullets: true, clickable: true }}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          loop={true}
          modules={[Pagination, EffectCreative]}
          className="h-full w-full"
        >
          {prop.portfolio.map((tattoo, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <Image
                src={tattoo}
                alt="Portfolio image of tattoo artist"
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-2 p-4 pb-8">
        <Text level="xl" customs="font-normal!">
          {prop.firstName} {prop.lastName}
        </Text>
        <Text level="base">
          {prop.postalCode}, {prop.city}
        </Text>
        <TattooStyleTags styles={prop.tattooStyle} />
        <Text level="xl" customs="font-normal!">
          {prop.hourlyRate} €
        </Text>
        <Button level="stroke-sm" className="w-fit">
          Portfolio anzeigen
        </Button>
      </div>
    </div>
  );
}
