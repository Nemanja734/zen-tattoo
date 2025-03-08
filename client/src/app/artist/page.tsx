import LogoMain from "@/components/logo-main";
import NavItems from "@/components/artist/navItems";
import NavArtistProfile from "@/components/artist/profile";
import Button from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import Link from "next/link";
import BenefitsCard from "@/components/artist/benefitsCard";
import Image from "next/image";

export default function Artist() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <div className="container">
        <HowItWorksSection />
        <CustomerSupportSection />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <div
      className="container flex justify-between items-center py-3!"
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
  return (
    <div className="container mt-18! mb-24! grid gap-6 text-center p-0!">
      <Heading level="title-secondary" customs="max-w-[1100px] m-auto">
        Mehr Kund*innen erreichen & dein Business mit Zen erweitern
      </Heading>

      <Text level="base">
        Werde Zen-Partner, um unabhängig von Studios zu arbeiten und mehr Gewinn
        aus deiner Kunst zu erzielen.
      </Text>

      <Link href="sign-in" className="w-[fit-content] m-auto">
        <Button level="primary-lg" customs="w-[fit-content] m-auto">
          Jetzt Registrieren
        </Button>
      </Link>
    </div>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      title: "Wachse mit Zen",
      text: "Nehme am aktiven Kundenstamm von Zen teil und steigere dadurch die Anzahl deiner Kundenanfragen als selbstständiger Tätowierer. Je besser deine Kunst ist, desto mehr Kundenanfragen erhältst du. Indem du Aufträge abschließt, erhältst du persönliche Bewertungen und baust dir so eine Reputation auf.",
      image: "/benefits-growth.png",
      color: "bg-[#edf6ca]",
    },
    {
      title: "Genieße mehr Flexibilität",
      text: "Mit Zen entscheidest du selbst, an welchen Tagen du arbeitest und wann dein Arbeitstag beginnt. Auch deinen Urlaub kannst du frei planen, ohne unsere Bestätigung. Wenn dir das Motiv eines Kunden nicht gefällt, kannst du es einfach ablehnen.",
      image: "/benefits-flexibility.png",
      color: "bg-[#f6e1b6]",
    },
    {
      title: "Erhöhe deine Sichtbarkeit",
      text: "Präsentiere deine Arbeit einem breiten Publikum, ohne auf sozialen Medien oder persönlichen Netzwerken angewiesen zu sein. Zen übernimmt Buchungen, Terminverwaltung und Abrechnung für dich, sodass du dich voll und ganz auf deine Kunst konzentrieren kannst.",
      image: "/benefits-visibility.png",
      color: "bg-[#f9d4d2]",
    },
  ];

  return (
    <div className="text-center bg-primary-tint">
      <div className="container">
        <Heading level="heading-primary">
          Warum mit Zen zusammenarbeiten?
        </Heading>
        <div className="grid gap-3 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitsCard
              key={index}
              color={benefit.color}
              image={benefit.image}
            >
              <Heading level="subheading-primary">{benefit.title}</Heading>
              <Text level="text-base">{benefit.text}</Text>
            </BenefitsCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <div className="mb-[100px] md:mb-[160px] grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
      <div className="relative h-[400px] md:h-full rounded-md md:order-2">
        <Image
          src="/how-it-works.png"
          fill
          alt="Picture of tattoo artist at an appointment"
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="md:ml-10 md:py-10">
        <Heading level="heading-primary">
          So funktioniert Zen für Tätowierer
        </Heading>
        <Text level="text-base" customs="mb-1.5">
          Ein*e Kund*in durchsucht die Zen App und bucht einen Termin bei dir.
          Dabei gibt er den Stil, die Größe und das Motiv für sein Tattoo an.
          Die Buchung erscheint in deinem Zen Profil. Nachdem du den Termin
          bestätigt hast, ist dein Teil abgeschlossen und der Kunde bekommt den
          genauen Standort deiner angegebenen Adresse.
        </Text>
        <Text level="text-base" customs="mb-6">
          Am Tag des Termins besucht der Kunde dein Studio. Nachdem das Tattoo
          fertig ist, fehlt nur noch deine Bestätigung. Trage dazu die Start-
          und Endzeit in Zen ein, die der Termin in Anspruch genommen hat. Zum
          Schluss kannst du den Kunden noch freundlich darum bitten, dir eine
          Rezension auf Zen zu geben.
        </Text>
        <Link href="sign-in">
          <Button level="primary-lg">Jetzt Registrieren</Button>
        </Link>
      </div>
    </div>
  );
}

function CustomerSupportSection() {
  return (
    <div className="grid gap-8 md:gap-12 md:grid-cols-2 md:items-center">
      <div className="relative h-[400px] md:h-full rounded-md">
        <Image
          src="/customer-support.png"
          fill={true}
          alt="Picture of tattoo artist at an appointment"
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="md:ml-10 md:py-10">
        <Heading level="heading-primary" customs="max-w-[500px]">
          Erstklassiger Kundensupport für deinen Erfolg
        </Heading>
        <Text level="text-base" customs="mb-6">
          Unser 24/7-Kundensupport antwortet innerhalb weniger Minuten in deiner
          Landessprache. Wir sind für dich und deine Kund*innen da, bis auch
          wirklich der letzte Punkt des Tages gestochen wurde.
        </Text>
        <Link href="sign-in">
          <Button level="primary-lg">Jetzt Registrieren</Button>
        </Link>
      </div>
    </div>
  );
}
