import LogoMain from "@/components/logo-main";
import NavItems from "@/components/Navigation/Artist/navItems";
import NavArtistProfile from "@/components/Navigation/Artist/profile";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import Link from "next/link";

export default function Artist() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

function Navbar() {
  return (
    <div
      className="container flex justify-between items-center py-3"
      id="artist"
    >
      <LogoMain />
      <div className="hidden md:block">
        <NavItems />
      </div>
      <div className="block md:hidden">
        <NavArtistProfile />
      </div>
    </div>
  );
}

function HeroSection() {
  return(
    <div className="container my-18! grid gap-6 text-center">
    <Heading level="title-secondary">
      Mehr Kund*innen erreichen & dein Business mit Zen erweitern
    </Heading>

    <Text level="lg">
      Werde Zen Partner, um nicht mehr von Studios abhängig zu sein und mehr
      Gewinn für deine Arbeit zu erzielen.
    </Text>

    <Link href="sign-in">
      <Button level="primary-lg" customs="w-[fit-content] m-auto">
        Jetzt Anmelden
      </Button>
    </Link>
  </div>
  )
}

function BenefitsSection() {
    return(
        <Heading level="heading-secondary">Warum mit Zen zusammenarbeiten?</Heading>
        <
    )
}