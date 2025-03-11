import TattooStyleTag from "./tattooStyleTag"

interface Props {
    styles: string[]
}

export default function TattooStyleWrapper({ styles }: Props) {
    return(
        <div className="flex flex-wrap gap-2">
            {styles.map((style, index) => (
                <TattooStyleTag key={index} >{style}</TattooStyleTag>
            ))}
        </div>
    )
}