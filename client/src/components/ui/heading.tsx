import { clsx } from "clsx";

interface Prop {
  level: string;
  customs?: string;
  children: React.ReactNode;
}

export default function Heading({ level, customs, children }: Prop) {
  const styles: Record<string, string> = {
    "title-secondary": "text-[40px] font-bold leading-[1] tracking-1 md:text-[60px]",
    "heading-primary": "text-[32px] font-bold leading-[1.1] mb-6 tracking-1 md:text-[42px]",
    "subheading-primary": "text-[22px] font-[800] leading-[1.1] mb-4 md:text-[28px]",
  };

  return <div className={clsx(styles[level], customs)}>{children}</div>;
}
