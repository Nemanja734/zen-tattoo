import Link from "next/link";
import Image from "next/image";
import { Routes } from "@/lib/routes";

export default function LogoFooter({width, className}: {width: number, className?: string}) {
  return (
    <Link href={Routes.home}>
      <Image className={className} src="/ZenLogoFooter.svg" width={width} height={0.416346 * width} alt="Zen Logo" />
    </Link>
  );
}
