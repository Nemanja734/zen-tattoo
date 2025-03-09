import { useClickOutside } from "@/helpers/useClickOutside";
import { Routes } from "@/lib/routes";
import Link from "next/link";
import { useRef } from "react";

interface Props {
  onClickOutside: () => void;
}

export default function DdAbsolute({ onClickOutside }: Props) {
  const ref = useRef(null);
  useClickOutside(ref, onClickOutside);

  return (
    <div ref={ref} className="dd">
      <Link href={Routes.signup} className="py-2 px-4 block">Anmelden</Link>
      <Link href={Routes.signup} className="py-2 px-4 block">Registrieren</Link>
    </div>
  );
}
