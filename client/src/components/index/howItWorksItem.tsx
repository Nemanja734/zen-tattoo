import Heading from "@/ui/heading";
import Icon from "@/ui/icon";
import Text from "@/ui/text";

interface Props {
    icon: string,
    title: string,
    text: React.ReactNode,
    index: number,
}

export default function HowItWorksItem({icon, title, text, index}: Props) {
    return(
        <div className="grid gap-2 justify-items-center text-center border-1 p-4 pt-0 rounded-lg shadow-md">

                <div className="bg-primary px-12 py-2 rounded-b-lg">
                <Icon name={icon} size="3xl" color="var(--background)"></Icon>
                </div>
                <Text level="base" customs="font-bold">Schritt {index + 1}</Text>
                <Heading level="subheading-primary">{title}</Heading>

            <Text level="base">{text}</Text>
        </div>
    )
}