import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";

const icons: { [key: string]: IconType } = {
    profile: CgProfile,
}

interface Props {
    name: keyof typeof icons,
    size?: number,
    color?: string
}

const Icon: React.FC<Props> = ({ name, size = 40, color = "var(--foreground)" }) => {
    const SelectedIcon = icons[name];

    if (!SelectedIcon) console.log("Icon not found: " + {name});

    return <SelectedIcon size={size} color={color} />
}

export default Icon;