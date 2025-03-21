"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface Props {
  text: string;
  link: string;
}

export default function NavItems({ text, link }: Props) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div>
      <Link
        href={link}
        className={clsx(
          "hover:text-primary",
          isActive && "text-primary underline underline-offset-2"
        )}
      >
        {text}
      </Link>
    </div>
  );
}
