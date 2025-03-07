import clsx from "clsx"

interface Props {
    level: string,
    customs?: string,
    children: React.ReactNode
}

export default function Text({ level, customs, children }: Props) {
    const styles: Record<string, string> = {
        lg: "text-base leading-[1.5]"
    }

    return(
        <div className={clsx(styles[level], customs)}>{children}</div>
    )
}