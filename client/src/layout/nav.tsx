import LogoMain from "./logoMain";
import NavArtistProfile from "@/layout/profile";
import SearchLocation from "@/components/searchLocation";
import NavItems from "./navItems";
import NavAsideToggle from "./navAsideToggle";

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
            <NavAsideToggle className="lg:hidden" />
            {/* Desktop */}
            <NavItems className="hidden lg:flex items-center" />
          </>
        );

      case NavType.Artist:
        return (
          <>
            <LogoMain />
            {/* Mobile */}
            <NavAsideToggle className="md:hidden" />
            {/* Tablet */}
            <NavItems className="hidden md:flex items-center" />
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
