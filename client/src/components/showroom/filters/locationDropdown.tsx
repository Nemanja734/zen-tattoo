import { useRef, useState } from "react";
import FilterButton from "./filterButton";
import { Coordinates } from "@/config/models/geolocation";
import ApplyFilter from "./applyFilter";
import FormInput from "@/ui/formInput";

type Props = {
  coordinates: Coordinates | null;
  handleCoordinatesChange: (coordinates: Coordinates) => void;
  radius: number;
  handleRadiusChange: (radius: number) => void;
  applyLocationFilter: () => void;
};

export default function LocationDropdown({
  coordinates,
  handleCoordinatesChange,
  radius,
  handleRadiusChange,
  applyLocationFilter,
}: Props) {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  const toggleLocation = () => {
    setShow((prev) => !prev);
  };

  const resetLocation = () => {
    // Todo: reset on click
  };

  const handleApply = () => {
    setShow(false);
    applyLocationFilter();
  };

  return (
    <div ref={ref} className="relative">
      <FilterButton isActive={isActive} onClick={() => toggleLocation()}>
        Sortieren
      </FilterButton>

      {show && (
        <div className="absolute rounded-sm -bottom-2 translate-y-full w-max z-10 bg-background border-2">
          {/* {sort.map((option, index) => (
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
          ))} */}
          <div className="p-4">
            
          </div>

          <ApplyFilter handleReset={resetLocation} handleApply={handleApply} />
        </div>
      )}
    </div>
  );
}
