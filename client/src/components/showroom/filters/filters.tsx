"use client";

import { useRef, useState } from "react";
import FilterButton from "./filterButton";
import Sort from "./sort";
import { useClickOutside } from "@/lib/useClickOutside";
import { Artist } from "@/config/interfaces/artist";

interface Props {
  update: (filteredArtists: Artist[]) => void;
}

export default function Filters({ update }: Props) {
  const [showSort, setShowSort] = useState(false);
  // const [showStyle, setShowStyle] = useState(false);
  // const [showLocation, setShowLocation] = useState(false);
  // const [showPrice, setShowPrice] = useState(false);

  const toggleFilter = (
    filter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    filter((prev) => !prev);
  };

  // refs for closing on click outside
  const sortRef = useRef(null);
  useClickOutside(sortRef, () => setShowSort(false));

  const removeAllFilters = () => {
    // Todo
  };

  return (
    <div className="heading-primary-mb flex gap-4">
      <div ref={sortRef}>
        <Sort
          show={showSort}
          onClick={() => toggleFilter(setShowSort)}
          update={update}
        />
      </div>

      {/* <div>
        <FilterButton onClick={() => toggleFilter(setShowStyle)}>
          Tattoostil
        </FilterButton>
      </div>

      <div>
        <FilterButton onClick={() => toggleFilter(setShowLocation)}>
          Standort
        </FilterButton>
      </div>

      <div>
        <FilterButton onClick={() => toggleFilter(setShowPrice)}>
          Preis
        </FilterButton>
      </div> */}

      <div className="ml-auto">
        <FilterButton reset onClick={removeAllFilters}></FilterButton>
      </div>
    </div>
  );
}
