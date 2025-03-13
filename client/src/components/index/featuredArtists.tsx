"use client";

import Heading from "@/ui/heading";
import { artist } from "@/config/mock/artistsFeatured";
import ArtistTile from "../artistTile";
import Button from "@/ui/button";
import { routes } from "@/config/routes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function FeaturedArtists() {
  return (
    <div className="container">
      <Heading level="heading-primary" className="text-center">
        Unsere vorgestellten Tätowierer
      </Heading>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        observer
        observeParents
        modules={[EffectCreative, Pagination]}
        spaceBetween={30}
        className="heading-primary-mb"
      >
        {artist.map((artist, index) => (
          <SwiperSlide className="h-auto!">
            <ArtistTile key={index} {...artist} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button level="primary-lg" customs="w-full" href={routes.showroom}>
        Alle Tätowierer entdecken
      </Button>
    </div>
  );
}
