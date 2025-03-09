import clsx from "clsx";

interface Props {
  level: string;
  customs?: string;
  type?: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}

export default function Button({
  level,
  customs,
  type = "button",
  children,
}: Props) {
  const standard = "cursor-pointer";

  const styles: Record<string, string> = {
    "primary-lg":
      "bg-primary px-10 py-3 rounded-sm text-background font-semibold shadow-lg shadow-primary/50",
    "primary-sm":
      "bg-primary px-5 py-2 rounded-sm text-background font-semibold shadow-sm shadow-primary/50",
  };

  return (
    <button type={type} className={clsx(styles[level], customs, standard)}>
      {children}
    </button>
  );
}
