import clsx from "clsx"

interface Props {
    level: string,
    customs?: string,
    children: React.ReactNode
}

export default function Button({ level, customs, children }: Props) {

    const standard = "cursor-pointer";

    const styles: Record<string, string> = {
        "primary-lg": "bg-primary px-10 py-3 rounded-sm text-background font-semibold",
        "primary-sm": "bg-primary px-5 py-2 rounded-sm text-background font-semibold",
    }

    return(
        <button className={clsx(styles[level], customs, standard)}>{children}</button>
    )
}
