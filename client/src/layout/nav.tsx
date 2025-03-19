"use client"

import LogoMain from "./logoMain";
import NavItemsList from "./navItemsList";
import NavAside from "./navAside";
import CrossLocationSearch from "@/components/crossLocationSearch";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 bg-background z-100">
      <div className="container flex gap-header justify-between items-center py-3! md:py-5!">
        <LogoMain />
        {!pathname.startsWith("/artist") && <CrossLocationSearch />}
        {/* Mobile */}
        <NavAside className="lg:hidden" />
        {/* Desktop */}
        <NavItemsList className="hidden lg:flex items-center" />
      </div>
    </div>
  );
}