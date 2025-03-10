import LogoMain from "@/components/logoMain";
import NavItems from "@/components/artist/navItems";
import NavArtistProfile from "@/components/artist/profile";
import Button from "@/components/elements/button";
import Heading from "@/components/elements/heading";
import Text from "@/components/elements/text";
import Link from "next/link";
import BenefitsCard from "@/components/artist/benefitsCard";
import Image from "next/image";
import NextStep from "@/components/artist/nextStep";
import FAQItem from "@/components/faqItem";
import ContactSection from "@/components/artist/contactSection";
import NavArtist from "@/components/layout/navArtist";
import Footer from "@/components/layout/footer";
import { Routes } from "@/lib/routes";

export default function Artist() {
  return (
    <>
      <NavArtist />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <CustomerSupportSection />
      <NextStepsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <div className="container grid gap-6 text-center">
      <Heading level="title-secondary" customs="max-w-[1100px] m-auto">
        Mehr Kund*innen erreichen & dein Business mit Zen erweitern
      </Heading>

      <Text level="base">
        Werde Zen-Partner, um unabhängig von Studios zu arbeiten und mehr Gewinn
        aus deiner Kunst zu erzielen.
      </Text>

      <Button
        href={Routes.signup}
        level="primary-lg"
        customs="w-[fit-content] m-auto"
      >
        Jetzt Registrieren
      </Button>
    </div>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      title: "Wachse mit Zen",
      text: "Nehme am aktiven Kundenstamm von Zen teil und steigere dadurch die Anzahl deiner Kundenanfragen als selbstständiger Tätowierer. Je besser deine Kunst ist, desto mehr Kundenanfragen erhältst du. Indem du Anfragen abschließt, erhältst du persönliche Bewertungen und baust dir so eine Reputation auf.",
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
        <div className="grid gap-3 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitsCard
              key={index}
              color={benefit.color}
              image={benefit.image}
            >
              <Heading level="subheading-primary" customs="mb-3">
                {benefit.title}
              </Heading>
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
    <div className="container md:pb-0! grid md:grid-cols-2 md:content-center place-items-center md:gap-10">
      <div className="relative aspect-square md:aspect-auto md:h-[480px] w-full rounded-md mb-8 md:mb-0 md:order-2">
        <Image
          src="/how-it-works.png"
          fill
          alt="Picture of tattoo artist at an appointment"
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="lg:ml-10">
        <Heading level="heading-primary">
          So funktioniert Zen für Tätowierer
        </Heading>
        <div className="heading-primary-mb">
          <Text level="text-base" customs="mb-1.5">
            Ein*e Kund*in durchstöbert die Zen App und bucht einen Termin bei
            dir. Dabei gibt er den Stil, die Größe und das Motiv des gewünschten
            Tattoos an. Sobald du den Termin bestätigst, ist dein Part erledigt
            und der Kunde erhält die genaue Adresse deines Studios.
          </Text>
          <Text level="text-base">
            Am Tag des Termins besucht der Kunde dein Studio. Nach Abschluss des
            Tattoos fehlt nur noch die Bestätigung. Trage dazu die Start- und
            Endzeit in deinem Zen-Profil ein, um die genaue Dauer des Termins zu
            dokumentieren. Abschließend kannst du den Kunden freundlich um eine
            Rezension auf Zen bitten.
          </Text>
        </div>
        <Button
          href={Routes.signup}
          level="primary-lg"
          customs="w-[fit-content] m-auto"
        >
          Jetzt Registrieren
        </Button>
      </div>
    </div>
  );
}

function CustomerSupportSection() {
  return (
    <div className="container grid md:grid-cols-2 md:content-center place-items-center md:gap-10">
      <div className="relative aspect-square md:aspect-auto md:h-[480px] w-full rounded-md mb-8 md:mb-0">
        <Image
          src="/customer-support.png"
          fill={true}
          alt="Picture of tattoo artist at an appointment"
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="lg:mr-10 grid">
        <Heading
          level="heading-primary"
          customs="max-w-[280px] md:max-w-[500px]"
        >
          Erstklassiger Kundensupport für deinen Erfolg
        </Heading>
        <Text level="text-base" customs="heading-primary-mb">
          Unser 24/7-Kundensupport antwortet innerhalb weniger Minuten in deiner
          Landessprache. Falls du Fragen hast oder dich über unser Angebot
          erkundigen möchtest, kannst du uns einfach kontaktieren. Wir sind für
          dich und deine Kund*innen da, bis auch wirklich der letzte Punkt des
          Tages gestochen wurde.
        </Text>
        <Button
        href={Routes.signup}
        level="primary-lg"
        customs="w-[fit-content] m-auto"
      >
        Jetzt Registrieren
      </Button>
      </div>
    </div>
  );
}

function NextStepsSection() {
  const steps = [
    {
      title: "Reiche deine Bewerbung ein.",
    },
    {
      title: "Werde angenommen.",
    },
    {
      title: "Gewinne neue Kundschaft mit Zen.",
    },
  ];

  return (
    <div className="container text-center">
      <Heading level="heading-primary">Die nächsten Schritte:</Heading>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3 max-w-[380px] md:max-w-max m-auto heading-primary-mb">
        {steps.map((step, index) => (
          <NextStep key={index} index={index}>
            {step.title}
          </NextStep>
        ))}
      </div>

      <Button
        href={Routes.signup}
        level="primary-lg"
        customs="w-[fit-content] m-auto"
      >
        Jetzt Starten
      </Button>
    </div>
  );
}

function FAQSection() {
  const faqData = [
    {
      question: "Wie hoch ist die Provision?",
      answer:
        "Zen behält 6 % des Gesamtpreises für die Kundengewinnung und Terminverwaltung ein. Zusätzlich fallen ca. 4 % Transaktionsgebühren für Stripe an. Am Ende bleiben dir also 90 % des Gesamtpreises.",
      additionTitle: "Frühbucher-Angebot:",
      additionText:
        "Für die ersten 20 Registrierungen bei Zen halbieren wir unsere Gebühren! Statt 90 % erhältst du 95 % des Gesamtpreises. Das Angebot gilt nur solange der Vorrat reicht!",
    },
    {
      question: "Was passiert, wenn ein Kunde den Termin absagt?",
      answer:
        "Bei Stornierungen wird eine Gebühr von 20 % des Gesamtpreises einbehalten. Der Restbetrag wird dem Kunden zurückerstattet.",
    },
    {
      question: "Gibt es eine Anmeldegebühr?",
      answer:
        "Nein, es gibt keine Anmeldegebühr. Zudem kannst du die Partnerschaft mit Zen jederzeit beenden.",
    },
    {
      question: "Was benötige ich für eine Partnerschaft mit Zen?",
      answer:
        "Du brauchst lediglich einen Social-Media-Account mit einem Portfolio, das mindestens drei Jahre zurückreicht. Falls du keinen Account hast, aber trotzdem ein talentierter Künstler bist, kannst du dich trotzdem bewerben – wir finden gemeinsam eine Lösung.",
    },
    {
      question: "Wie verläuft die Registrierung bei Zen?",
      answer:
        "Zunächst legst du ein Konto mit einer gültigen E-Mail-Adresse an. Danach vervollständigst du dein Profil im Dashboard (Biografie, Stundensatz, Portfolio etc.). Zur Verifikation deines Portfolios senden wir einen Code an deinen Social-Media-Account. Mit diesem kannst du dein Konto freischalten.",
    },
    {
      question: "Welche Anforderungen muss mein Studio erfüllen?",
      answer:
        "Dein Studio muss die gesetzlichen Hygienevorschriften erfüllen. Genauere Informationen findest du in unserem Artikel. Abgesehen davon hast du freie Gestaltungsmöglichkeiten.",
    },
  ];

  return (
    <div className="container">
      <Heading level="heading-primary" customs="text-center">
        Häufig gestellte Fragen
      </Heading>
      <div className="grid gap-2 md:gap-3">
        {faqData.map((item, index) => (
          <FAQItem key={index} {...item}></FAQItem>
        ))}
      </div>
    </div>
  );
}
