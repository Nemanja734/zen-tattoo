import { clsx } from "clsx";

interface Prop {
  level: string;
  customs?: string;
  children: React.ReactNode;
}

export default function Heading({ level, customs, children }: Prop) {
  const styles: Record<string, string> = {
    "title-secondary": "text-[40px] font-bold leading-[1]",
    "heading-primary": "text-[32px] font-bold leading-[1.1]"
  };

  return <div className={clsx(styles[level], customs)}>{children}</div>;
}
