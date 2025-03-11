import Text from "./text"

interface Props {
    children: React.ReactNode
}

export default function TattooStyleTag({children}: Props) {
    return(
        <>
        <div className="px-4 py-1 bg-tint w-fit rounded-2xl shadow-[3px_3px_0_0_var(--foreground)] border-1 border-foreground">
            <Text level="sm">{children}</Text>
        </div>
        </>
    )
}