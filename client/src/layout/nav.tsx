import LogoMain from "./logoMain";
import SearchLocation from "@/components/searchLocation";
import NavItemsList from "./navItemsList";
import NavAside from "./navAside";

export enum NavType {
  Main = "landingPage",
  Artist = "artist",
}

export default function Nav({ navType }: { navType: NavType }) {
  function getNavContent() {
    switch (navType) {
      case NavType.Main:
        return (
          <>
            <LogoMain />
            <SearchLocation />
            {/* Mobile */}
            <NavAside className="lg:hidden" />
            {/* Desktop */}
            <NavItemsList className="hidden lg:flex items-center" />
          </>
        );

      case NavType.Artist:
        return (
          <>
            <LogoMain />
            {/* Mobile */}
            <NavAside className="lg:hidden" />
            {/* Tablet */}
            <NavItemsList className="hidden lg:flex items-center" />
          </>
        );
    }
  }

  return (
    <div className="sticky top-0 bg-background z-100">
      <div className="container flex gap-header justify-between items-center py-3! md:py-5!">
        {getNavContent()}
      </div>
    </div>
  );
}
