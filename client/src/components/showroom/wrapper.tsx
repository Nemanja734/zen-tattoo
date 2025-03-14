import { artists, tattooStyles } from "@/config/mock/artists";
import ArtistCardSwiper from "../artistCardSwiper";
import Heading from "@/ui/heading";
import Filters from "./filters/filters";

export default function Wrapper() {
  return (
    <div className="container">
      <Heading level="heading-primary">Unsere Künstler</Heading>

      <Filters />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {artists.map((artist, index) => (
          <ArtistCardSwiper key={index} {...artist} />
        ))}
      </div>
    </div>
  );
}
