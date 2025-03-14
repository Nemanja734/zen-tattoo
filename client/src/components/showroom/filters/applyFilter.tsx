import Button from "@/ui/button";

interface Props {
    reset: () => void
    update: () => void
}

export default function ApplyFilter({reset, update}: Props) {
    return(
        <div className="grid grid-cols-2 border-t-1">
            <Button level="stroke-lg" className="p-4! rounded-none! border-none!" onClick={reset}>Zurücksetzen</Button>
            <Button level="black-lg" className="p-4! rounded-none! border-none!" onClick={update}>Speichern</Button>
        </div>
    )
}