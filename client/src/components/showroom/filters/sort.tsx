"use client";

import Icon from "@/ui/icon";
import ApplyFilter from "./applyFilter";
import FilterButton from "./filterButton";
import clsx from "clsx";
import { useState } from "react";

interface Props {
  show: boolean;
  onClick: () => void;
}

export default function Sort({ show, onClick }: Props) {
  const [sort, setSort] = useState([
    {
      text: "Am Beliebtesten",
      isActive: true,
    },
    {
      text: "Neuerscheinungen",
      isActive: false,
    },
    {
      text: "Niedrigster Preis",
      isActive: false,
    },
    {
      text: "Höchster Preis",
      isActive: false,
    },
  ]);

  const handleSortChange = (index: number) => {
    setSort((prevOptions) =>
      prevOptions.map((option, i) => ({
        ...option,
        isActive: i === index,
      }))
    );
  };

  const reset = () => {
    setSort((prevOptions) =>
      prevOptions.map((option, i) => ({
        ...option,
        isActive: i === 0,
      }))
    );
  };

  return (
    <div className="relative">
      <FilterButton onClick={() => onClick()}>Sortieren</FilterButton>

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

          <ApplyFilter reset={reset} />
        </ul>
      )}
    </div>
  );
}
