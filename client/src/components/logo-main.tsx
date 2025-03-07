import Image from "next/image";
import Link from "next/link";

export default function LogoMain() {
  return (
    <Link href="/">
      <Image src="/ZenLogo.svg" width={83.2} height={34.64} alt="Zen Logo" />
    </Link>
  );
}
