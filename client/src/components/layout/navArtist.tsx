import LogoMain from "../logoMain";
import NavItems from "../artist/navItems";
import NavArtistProfile from "@/components/artist/profile";

export default function NavArtist() {
  return (
    <div className="sticky top-0 bg-background z-100" id="artist">
      <div className="container flex justify-between items-center py-3!">
        <LogoMain />
        <div className="hidden md:block">
          <NavItems />
        </div>
        <div className="block md:hidden">
          <NavArtistProfile />
        </div>
      </div>
    </div>
  );
}
