import Link from "next/link";
import Image from "next/image";
import { Routes } from "@/lib/routes";
import clsx from "clsx";

export default function LogoFooter({ width }: { width: string }) {
  return (
    <Link
      href={Routes.home}
      className="relative"
      style={{ height: `calc(0.416346 * ${width}px)`, width: `${width}px` }}
    >
      <Image src="/ZenLogoFooter.svg" fill={true} alt="Zen Logo" />
    </Link>
  );
}
{
  /* <Image className={className} src="/ZenLogoFooter.svg" width={width} height={0.416346 * width} alt="Zen Logo" /> */
}
