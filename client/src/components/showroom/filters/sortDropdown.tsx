"use client";

import Icon from "@/ui/icon";
import ApplyFilter from "./applyFilter";
import FilterButton from "./filterButton";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "@/lib/useOnClickOutside";
import { Sort } from "@/config/interfaces/filter";

interface Props {
  sort: Sort[];
  handleSortChange: (index: number) => void;
  applySort: () => void;
}

export default function SortDropdown({
  sort,
  handleSortChange,
  applySort,
}: Props) {
  const [show, setShow] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown
  const toggleSort = () => {
    setShow((prev) => !prev);
  };

  // Event listener for click outside
  useOnClickOutside(sortRef, () => {
    if (show) {
      setShow(false);
    }
  });

  // Run the sort everytime the dropdown toggles
  useEffect(() => {
    if (!show) handleApply();
  }, [show]);

  // Reset sort to default value
  const reset = () => {
    handleSortChange(0);
  };

  // Stop showing the sort and utilize the callback function
  const handleApply = () => {
    setShow(false);
    applySort();
  };

  return (
    <div ref={sortRef} className="relative">
      <FilterButton onClick={() => toggleSort()}>Sortieren</FilterButton>

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

          <ApplyFilter handleReset={reset} handleApply={handleApply} />
        </ul>
      )}
    </div>
  );
}
