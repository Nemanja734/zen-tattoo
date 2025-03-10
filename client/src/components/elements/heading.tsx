import { clsx } from "clsx";

interface Prop {
  level: string;
  customs?: string;
  children: React.ReactNode;
}

export default function Heading({ level, customs, children }: Prop) {
  const styles: Record<string, string> = {
    "title-secondary": "text-[2.5rem] md:text-[3rem] lg:text-[3.4rem] font-bold leading-[1] tracking-1",
    "heading-primary": "text-[2rem] md:text-[2.3rem] lg:text-[2.6rem] font-bold leading-[1.1] tracking-1 heading-primary-mb",
    "subheading-primary": "text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] font-bold leading-[1.1]",
  };

  return <div className={clsx(styles[level], customs)}>{children}</div>;
}
