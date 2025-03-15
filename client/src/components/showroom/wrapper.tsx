"use client";

import { artists, tattooStyles } from "@/config/mock/artists";
import ArtistCardSwiper from "../artistCardSwiper";
import Heading from "@/ui/heading";
import { Dispatch, SetStateAction, useState } from "react";
import { Artist } from "@/config/interfaces/artist";
import FilterButton from "./filters/filterButton";
import Sort from "./filters/sort";
import Style from "./filters/style";
import { sorts } from "@/config/data/filter";

export default function Wrapper() {
  // Array of currently displayed artists
  const [filteredArtists, setFilteredArtists] = useState(artists);
  // Array for the sort options with active sort
  const [sort, setSort] = useState(sorts);
  const [tattooStyle, setTattooStyle] = useState(tattooStyles);
  // Use states for displaying the filters
  const [showSort, setShowSort] = useState(false);
  const [showTattooStyle, setShowTattooStyle] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  // Array of refs for filters
  const [refs, setRefs] = useState([]);

  const handleFilterToggle = (
    showFilter: boolean,
    setShowFilter: Dispatch<SetStateAction<boolean>>
  ) => {
    const newState = !showFilter;
    closeAllFilter();
    setShowFilter(newState);
  };

  const closeAllFilter = () => {
    setShowSort(false);
    setShowTattooStyle(false);
    setShowLocation(false);
    setShowPrice(false);
  };

  // Close filters when clicking outside of one of the refs

  const resetAllFilter = () => {
    // Reset the filters
    setSort(sorts);
    setTattooStyle(tattooStyles);
    // Reset the list of artists to the default list
    handleFilterChange(artists);
  };

  const handleFilterChange = (newFilteredArtists: Artist[]) => {
    setFilteredArtists([...newFilteredArtists]);
  };

  return (
    <div className="container">
      <Heading level="heading-primary">Unsere Künstler</Heading>

      <div className="heading-primary-mb flex gap-4">
        <div>
          <Sort
            show={showSort}
            sort={sort}
            setSort={setSort}
            onClick={() => handleFilterToggle(showSort, setShowSort)}
            update={handleFilterChange}
          />
        </div>

        <div>
          <Style
            show={showTattooStyle}
            tattooStyle={tattooStyle}
            setStyle={setTattooStyle}
            onClick={() =>
              handleFilterToggle(showTattooStyle, setShowTattooStyle)
            }
            update={handleFilterChange}
          />
        </div>

        {/* <div>
          <FilterButton onClick={handleShowLocation}>
            Standort
          </FilterButton>
        </div>

        <div>
          <FilterButton onClick={handleShowPrice}>
            Preis
          </FilterButton>
        </div> */}

        <div className="ml-auto">
          <FilterButton reset onClick={resetAllFilter}></FilterButton>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredArtists.map((artist, index) => (
          <ArtistCardSwiper key={index} {...artist} />
        ))}
      </div>
    </div>
  );
}
