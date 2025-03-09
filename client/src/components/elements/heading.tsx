import { clsx } from "clsx";

interface Prop {
  level: string;
  customs?: string;
  children: React.ReactNode;
}

export default function Heading({ level, customs, children }: Prop) {
  const styles: Record<string, string> = {
    "title-secondary": "text-[2.5rem] font-bold leading-[1] tracking-1 md:text-[3.4rem]",
    "heading-primary": "text-[2rem] font-bold leading-[1.1] tracking-1 md:text-[2.6rem] heading-primary-mb",
    "subheading-primary": "text-[1.3rem] font-bold leading-[1.1] md:text-[1.7rem]",
  };

  return <div className={clsx(styles[level], customs)}>{children}</div>;
}
