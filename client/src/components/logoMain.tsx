import { routes } from "@/config/routes";
import Image from "next/image";
import Link from "next/link";

export default function LogoMain() {
  return (
    <Link href={routes.home} className="block">
      <div className="relative w-[60px] h-[30px] sm:w-[83.2px] sm:h-[34.64px] md:w-[120px] md:h-[50px]">
        <Image 
          src="/ZenLogo.svg" 
          alt="Zen Logo" 
          fill 
          className="object-contain"
        />
      </div>
    </Link>
  );
}
