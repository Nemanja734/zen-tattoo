"use client";

import clsx from "clsx";
import Link from "next/link";

interface Props {
  level: string;
  customs?: string;
  href?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined; // Used for forms
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({
  level,
  customs,
  href,
  onClick,
  type = "button",
  children,
  disabled = false,
}: Props) {
  const standard = "cursor-pointer flex justify-center align-center";

  const styles: Record<string, string> = {
    "primary-lg":
      "bg-primary px-10 h-[48px] items-center rounded-sm text-background font-semibold shadow-lg shadow-primary/50",
    "primary-sm":
      "bg-primary px-5 py-2 rounded-sm text-background font-semibold shadow-sm shadow-primary/50",

    "stroke-lg":
      "bg-background px-10 h-[48px] items-center rounded-sm text-foreground font-semibold border-2",
  };

  if (href) {
    return (
      <Link href={href} className={clsx(standard, styles[level], customs)}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        type={type}
        className={clsx(standard, styles[level], customs)}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}
