"use client";

import Heading from "@/ui/heading";
import { artist } from "@/config/mock/artistsFeatured";
import ArtistTile from "../artistTile";
import Button from "@/ui/button";
import { useState } from "react";
import { routes } from "@/config/routes";

export default function FeaturedArtists() {
  const [load, setLoad] = useState(false);

  const clickLoad = () => {
    setLoad(!load);
  };

  return (
    <div className="container">
      <Heading level="heading-primary" className="text-center">
        Unsere vorgestellten Tätowierer
      </Heading>
      <ArtistTile {...artist[0]} />
      {!load ? (
        <Button level="primary-lg" customs="w-full" onClick={clickLoad}>
          Mehr Anzeigen
        </Button>
      ) : (
        <>
          <ArtistTile {...artist[1]} />
          <ArtistTile {...artist[2]} />
          <ArtistTile {...artist[3]} />
          <div className="grid gap-2 md:grid-cols-2">
            <Button level="stroke-lg" customs="w-full" onClick={clickLoad}>
              Weniger Anzeigen
            </Button>
            <Button level="primary-lg" customs="w-full" href={routes.showroom}>
              Alle Tätowierer
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
