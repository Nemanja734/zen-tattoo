"use client";

import Icon from "@/ui/icon";
import ApplyFilter from "./applyFilter";
import FilterButton from "./filterButton";
import clsx from "clsx";
import { Dispatch, SetStateAction, useState } from "react";
import { sorts } from "@/config/data/filter";
import { artists } from "@/config/mock/artists";
import { Artist } from "@/config/interfaces/artist";

interface Props {
  show: boolean;
  sort: { text: string; isActive: boolean }[];
  setSort: Dispatch<SetStateAction<{ text: string; isActive: boolean }[]>>;
  onClick: () => void;
  update: (artists: Artist[]) => void;
}

export default function Sort({ show, sort, setSort, onClick, update }: Props) {
  // Handle sort change on click
  const handleSortChange = (index: number) => {
    setSort((prevOptions) =>
      prevOptions.map((option, i) => ({
        ...option,
        isActive: i === index,
      }))
    );
  };

  // Reset sort to default value
  const reset = () => {
    setSort((prevOptions) =>
      prevOptions.map((option, i) => ({
        ...option,
        isActive: i === 0,
      }))
    );
  };

  // Apply sort with callback function
  const applyFilter = () => {
    const activeSort = sort.filter((option) => option.isActive === true);

    // Sort "Am Beliebtesten"
    if (activeSort[0].text === sorts[0].text) {
      update([...artists]);
    }

    // Sort "Neuersteinungen"
    if (activeSort[0].text === sorts[1].text) {
      // Todo
    }

    // Sort "Niedrigster Preis"
    if (activeSort[0].text === sorts[2].text) {
      update([...artists].sort((a, b) => a.hourlyRate - b.hourlyRate));
    }

    // Sort "Höchster Preis"
    if (activeSort[0].text === sorts[3].text) {
      update([...artists].sort((a, b) => b.hourlyRate - a.hourlyRate));
    }
  };

  return (
    <div className="relative">
      <FilterButton onClick={onClick}>Sortieren</FilterButton>

      {show && (
        <ul className="absolute rounded-sm -bottom-2 translate-y-full w-max z-10 bg-background border-2">
          {sort.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSortChange(index)}
              className={clsx(
                "p-4 hover:bg-tint cursor-pointer [&:not(:nth-last-child(-n+2))]:border-b border-tone flex justify-between items-center",
                option.isActive && "font-bold"
              )}
            >
              {option.text}
              {option.isActive && <Icon name="checkCircle" size="base" />}
            </li>
          ))}

          <ApplyFilter reset={reset} update={applyFilter} />
        </ul>
      )}
    </div>
  );
}
