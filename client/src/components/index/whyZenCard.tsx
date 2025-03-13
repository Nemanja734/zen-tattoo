import Heading from "@/ui/heading";
import Text from "@/ui/text";
import Icon from "@/ui/icon";
import clsx from "clsx";

interface Props {
    icon: string,
    title: string,
    text: string,
}

export default function WhyZenCard({icon, title, text}: Props) {
    return(
        <div className={clsx("grid justify-center items-start justify-items-center gap-5 p-8 text-center bg-background rounded-xl shadow-md")}>
            <Icon name={icon} size="3xl" color="var(--primary)" />
            <Heading level="subheading-primary">{title}</Heading>
            <Text level="base">{text}</Text>
        </div>
    )
}