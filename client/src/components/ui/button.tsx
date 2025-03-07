import clsx from "clsx"

interface Props {
    level: string,
    customs?: string,
    children: React.ReactNode
}

export default function Button({ level, customs, children }: Props) {

    const styles: Record<string, string> = {
        "primary-lg": "bg-primary px-10 py-2.5 rounded-sm text-background font-semibold",
        "primary-md": "bg-primary px-4 py-1.5 rounded-sm text-background font-semibold",
    }


    return(
        <button className={clsx(styles[level], customs)}>{children}</button>
    )
}