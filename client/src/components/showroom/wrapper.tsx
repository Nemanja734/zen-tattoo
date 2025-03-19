"use client";

import { artists } from "@/config/mock/artists";
import ArtistCardSwiper from "../artistCardSwiper";
import Heading from "@/ui/heading";
import { useState } from "react";
import { Artist } from "@/config/models/artist";

export default function Wrapper() {
  // array of currently displayed artists
  const [filteredArtists, setFilteredArtists] = useState<Artist[] | undefined>(
    artists
  );

  return (
    <div className="container">
      <Heading level="heading-primary">Unsere Künstler</Heading>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredArtists &&
          filteredArtists.map((artist, index) => (
            <ArtistCardSwiper key={index} {...artist} />
          ))}
      </div>
    </div>
  );
}
