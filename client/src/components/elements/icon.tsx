import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";


const icons: { [key: string]: IconType } = {
    profile: CgProfile,
    chevDown: FaChevronDown,
    mail: GrMail,
}

interface Props {
    name: keyof typeof icons,
    size?: number,
    color?: string,
    className?: string
}

export default function Icon({ name, size, color, className}: Props) {
    const SelectedIcon = icons[name];

    if (!SelectedIcon) console.log("Icon not found: " + {name});

    return <SelectedIcon size={size} color={color} className={className} />
}

