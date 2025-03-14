"use client"

import { artists } from "@/config/mock/artists";
import ArtistCardSwiper from "../artistCardSwiper";
import Heading from "@/ui/heading";
import Filters from "./filters/filters";
import { useState } from "react";
import { Artist } from "@/config/interfaces/artist";

export default function Wrapper() {
  const [filteredArtists, setFilteredArtists] = useState(artists);

  const handleFilterChange = (newFilteredArtists: Artist[]) => {
    setFilteredArtists([...newFilteredArtists]);
  };

  return (
    <div className="container">
      <Heading level="heading-primary">Unsere Künstler</Heading>

      <Filters update={handleFilterChange} />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredArtists.map((artist, index) => (
          <ArtistCardSwiper key={index} {...artist} />
        ))}
      </div>
    </div>
  );
}
