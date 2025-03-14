"use client";

import { useRef, useState } from "react";
import FilterButton from "./filterButton";
import Sort from "./sort";
import { useClickOutside } from "@/lib/useClickOutside";

export default function Filters() {
  const [showSort, setShowSort] = useState(false);
  const [showStyle, setShowStyle] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const toggleFilter = (filter: any) => {
    filter((prev: boolean) => !prev);
  };

  // refs for closing on click outside
  const sortRef = useRef(null);
  useClickOutside(sortRef, () => setShowSort(false));

  const closeAllFilters = () => {
    setShowSort(false);
    setShowStyle(false);
    setShowLocation(false);
    setShowPrice(false);
  };

  return (
    <div className="heading-primary-mb flex gap-4">
      <div ref={sortRef}>
        <Sort show={showSort} onClick={() => toggleFilter(setShowSort)} />
      </div>

      <div>
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
      </div>

      <div className="ml-auto">
        <FilterButton reset onClick={closeAllFilters}></FilterButton>
      </div>
    </div>
  );
}
