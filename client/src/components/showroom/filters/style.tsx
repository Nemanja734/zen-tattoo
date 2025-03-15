import { Artist } from "@/config/interfaces/artist";
import ApplyFilter from "./applyFilter";
import { Dispatch, SetStateAction } from "react";
import { artists, tattooStyles } from "@/config/mock/artists";
import FilterButton from "./filterButton";
import clsx from "clsx";
import Icon from "@/ui/icon";

interface Props {
  show: boolean;
  tattooStyle: string[];
  setStyle: Dispatch<SetStateAction<string[]>>;
  onClick: () => void;
  update: (artists: Artist[]) => void;
}

export default function Style({
  show,
  tattooStyle,
  setStyle,
  onClick,
  update,
}: Props) {
  // Toggle style on click
  const handleStyleChange = (style: string) => {
    setStyle((currentStyles) => {
      // Check if style is already selected
      const isSelected = currentStyles.includes(style);

      // Select or unselect the style based on its current value
      let newStyles = isSelected
        ? currentStyles.filter((s) => s !== style)
        : [...currentStyles, style];

        // Check if newStyles needs special treatment
      if (newStyles.length === 0 || currentStyles.length === tattooStyles.length) {
        return currentStyles.length === tattooStyles.length ? [style] : tattooStyles;
      }

      return newStyles;
    });
  };

  // Check if any style is selected in the first place
  const styleSelected = () => {
    return !(tattooStyle.length === tattooStyles.length);
  };

  // Reset sort to default value
  const reset = () => {
    setStyle([...tattooStyles]);
  };

  // Apply sort with callback function
  const applyFilter = () => {
    update([...artists].filter((artist) => artist.tattooStyle.some((artistTattooStyle) => tattooStyle.includes(artistTattooStyle))))
  };

  return (
    <div className="relative">
      <FilterButton onClick={onClick}>Tattoostil</FilterButton>

      {show && (
        <ul className="absolute rounded-sm -bottom-2 translate-y-full w-max z-10 bg-background border-2">
          {tattooStyles.map((option, index) => (
            <li
              key={index}
              onClick={() => handleStyleChange(option)}
              className={clsx(
                "p-4 hover:bg-tint cursor-pointer [&:not(:nth-last-child(-n+2))]:border-b border-tone flex justify-between items-center",
                tattooStyle.includes(option) && styleSelected() && "font-bold"
              )}
            >
              {option}
              {tattooStyle.includes(option) && styleSelected() && (
                <Icon name="checkCircle" size="base" />
              )}
            </li>
          ))}

          <ApplyFilter reset={reset} update={applyFilter} />
        </ul>
      )}
    </div>
  );
}
