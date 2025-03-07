import Image from "next/image";
import Link from "next/link";

export default function HeaderArtist() {
  return (
    <header>
      <div className="mb-16">
        <Image src="/logo.svg" alt="Zen Logo" width={454} height={189}></Image>
      </div>
      <Link href="/sign-in">Anmelden</Link>
      <Link href="/sign-up"></Link>
    </header>
  );
}
