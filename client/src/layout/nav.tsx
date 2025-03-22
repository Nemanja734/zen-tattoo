import LogoMain from "./logoMain";
import NavItemsList from "./navItemsList";
import NavAside from "./navAside";

export default function Nav() {
  return (
    <div className="sticky top-0 bg-background z-50">
      <div className="container flex gap-header justify-between items-center py-3! md:py-5!">
        <LogoMain />
        {/* Mobile */}
        <NavAside className="lg:hidden" />
        {/* Desktop */}
        <NavItemsList className="hidden lg:flex items-center ml-auto" />
      </div>
    </div>
  );
}