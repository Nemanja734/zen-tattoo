import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { HiSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import useWindowDimensions from "@/lib/useWindowDimensions";

const icons: { [key: string]: IconType } = {
  profile: CgProfile,
  chevDown: FaChevronDown,
  mail: GrMail,
  search: HiSearch,
  close: AiOutlineClose,
  menu: RxHamburgerMenu,
};

interface Props {
  name: keyof typeof icons;
  size: number;
  sizeMobile?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export default function Icon({ name, size, color, className, onClick }: Props) {
  const SelectedIcon = icons[name];
  if (!SelectedIcon) console.warn("Icon not found: " + { name });

    const {width, height} = useWindowDimensions();

    if (width < 768) {
        size = size * 0.8
    }


  return (
    <SelectedIcon
      size={size}
      color={color}
      className={className}
      onClick={onClick}
    />
  );
}
