import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import Icon from "./icon";

export default function HeaderArtist() {
  return (
    <header className="container py-5 flex items-center">
      <div className="h-12 md:h-16 mr-auto">
        <Link href="/">
          <Image
            className="w-full h-full"
            src="/logo.svg"
            alt="Zen Logo"
            width={454}
            height={189}
          ></Image>
        </Link>
      </div>
      
      <div className="hidden md:block">
      <Link href="/sign-in">
        Anmelden
      </Link>
      <button className="py-2 px-8 rounded-xs bg-amber-400">
        <Link href="/sign-up">Registrieren</Link>
      </button>
      </div>

      <div className="md:hidden">
        <Icon icon={<CgProfile/>} />
      </div>
    </header>
  );
}
