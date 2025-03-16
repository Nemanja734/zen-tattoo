"use client";

import { artists, tattooStyles } from "@/config/mock/artists";
import ArtistCardSwiper from "../artistCardSwiper";
import Heading from "@/ui/heading";
import { useState } from "react";
import FilterButton from "./filters/filterButton";
import SortDropdown from "./filters/sortDropdown";
import TattooStyle from "./filters/tattooStyle";
import { sorts } from "@/config/data/filter";
import { Artist } from "@/config/interfaces/artist";

export default function Wrapper() {
  // array of currently displayed artists
  const [filteredArtists, setFilteredArtists] = useState<Artist[] | undefined>(
    artists
  );

  const [sort, setSort] = useState(sorts);
  const [tattooStyle, setTattooStyle] = useState(tattooStyles);

  // Handle sort change on click
  const handleSortChange = (index: number) => {
    setSort((prevOptions) =>
      prevOptions.map((option, i) => ({
        ...option,
        isActive: i === index,
      }))
    );
  };

  // Toggle tattoo style on click
  const handleTattooStyleChange = (style: string) => {
    setTattooStyle((currentStyles) => {
      // Check if style is already selected
      const isSelected = currentStyles.includes(style);

      // Select or unselect the style based on its current value
      let newStyles = isSelected
        ? currentStyles.filter((s) => s !== style)
        : [...currentStyles, style];

      // Return all styles if every style is checked
      if (
        newStyles.length === 0 ||
        currentStyles.length === tattooStyles.length
      ) {
        return currentStyles.length === tattooStyles.length
          ? [style]
          : tattooStyles;
      }

      return newStyles;
    });
  };

  const resetTattooStyle = () => {
    setTattooStyle(tattooStyles);
  };

  // Filter artists based on selected tattoo styles
  const filterByTattooStyle = (artists: Artist[]) => {
    if (tattooStyle.length === tattooStyles.length) {
      return artists; // No filtering needed, return all
    }

    return artists.filter((artist) =>
      artist.tattooStyle.some((style) => tattooStyle.includes(style))
    );
  };

  // Apply sort
  const applySort = (artists: Artist[]) => {
    const activeSort = sort.find((option) => option.isActive === true);

    switch (activeSort!.text) {
      case "Am Beliebtesten":
        // Todo
        return artists;

      case "Neuerscheinungen":
        // Todo
        return artists;

      case "Niedrigster Preis":
        return artists.sort((a, b) => a.hourlyRate - b.hourlyRate);

      case "Höchster Preis":
        return artists.sort((a, b) => b.hourlyRate - a.hourlyRate);

      default:
        return artists;
    }
  };

  // Run every filter criterion to create an updated list of artists
  const applyAllFilter = () => {
    // Create a new fresh array of artists
    let updatedArtists = [...artists];

    // Apply all filters and the sort at last
    updatedArtists = filterByTattooStyle(updatedArtists);
    updatedArtists = applySort(updatedArtists);

    // Update the displayed list of artists
    setFilteredArtists(updatedArtists);
  };

  // Reset the list of artists to the default list and reset the filters
  const resetAllFilter = () => {
    setFilteredArtists(artists);
    setTattooStyle(tattooStyles);
    setSort(sorts);
  };

  return (
    <div className="container">
      <Heading level="heading-primary">Unsere Künstler</Heading>

      <div className="heading-primary-mb flex gap-4">
        <SortDropdown
          sort={sort}
          handleSortChange={handleSortChange}
          applySort={applyAllFilter}
        />
        <TattooStyle
          tattooStyle={tattooStyle}
          handleTattooStyleChange={handleTattooStyleChange}
          reset={resetTattooStyle}
          applyTattooStyle={applyAllFilter}
        />

        <div className="ml-auto">
          <FilterButton reset onClick={resetAllFilter}></FilterButton>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredArtists &&
          filteredArtists.map((artist, index) => (
            <ArtistCardSwiper key={index} {...artist} />
          ))}
      </div>
    </div>
  );
}
