import Image from "next/image";
import DdStatic from "../ddStatic";
import Heading from "../elements/heading";
import LogoFooter from "../logoFooter";
import Text from "../elements/text";
import { Routes } from "@/lib/routes";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-foreground text-background">
      <div className="container pb-4! lg:pb-[var(--spacing-vert)]! grid grid-cols-1 gap-12 md:gap-20 lg:grid-cols-3">
        <div className="grid gap-4">
          <LogoFooter width="180" />

          <Heading level={"heading-primary"} customs="mb-0!">
            Mehr als nur ein Tattoostudio.
          </Heading>

          <div className="grid grid-flow-col justify-start gap-3">
            {paymentIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                height={40}
                width={60}
              />
            ))}
          </div>
        </div>

        <nav
          aria-label="Footer Navigation"
          className="grid gap-5 items-start md:flex md:justify-between lg:col-start-2 lg:col-end-4 lg:justify-end lg:gap-30"
        >
          {navigation.map((section, index) => (
            <div key={index}>
              {/* Mobile */}
              <div className="md:hidden">
                <DdStatic
                  gap="gap-2"
                  ddButtonWidth="w-40"
                  ddButtonText={section.heading}
                  ddItems={section.links}
                ></DdStatic>
              </div>
              {/* Table */}
              <div className="hidden md:block">
                <ul className="grid gap-2">
                  <li aria-label="Navigation Section">
                    <Text level="base" customs="font-bold">
                      {section.heading}
                    </Text>
                  </li>

                  <li className="grid gap-2">
                    {section.links.map((item, index) => (
                      <Link key={index} href={item.href} className="w-fit">
                        {item.text}
                      </Link>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </nav>

        <div className="lg:col-start-1 lg:col-end-4 grid gap-2 lg:flex lg:gap-8">
          {legal.map((item, index) => (
            <Link
            key={index}
            href={item.href}
            className="w-fit hover:underline underline-offset-4"
          >
            <Text level="base" customs="text-tone font-bold">
              {item.text}
            </Text>
          </Link>
          ))}
          <Text level="base" customs="text-tone ml-auto">
            &#169; Zen Tattoo 2025
          </Text>
        </div>
      </div>
    </div>
  );
}

const paymentIcons = [
  {
    src: "/payment-options/MasterCard.svg",
    alt: "Master Card",
  },
  {
    src: "/payment-options/Visa.svg",
    alt: "Visa",
  },
  {
    src: "/payment-options/Klarna.svg",
    alt: "Klarna",
  },
  {
    src: "/payment-options/Stripe.svg",
    alt: "Stripe",
  },
];

const navigation = [
  {
    heading: "Partnerschaften",
    links: [
      {
        text: "Für Tätowierer",
        href: Routes.artist,
      },
      {
        text: "Für Tattoostudios",
        href: Routes.comingSoon,
      },
      {
        text: "Affiliate Marketing",
        href: Routes.comingSoon,
      },
    ],
  },
  {
    heading: "Unternehmen",
    links: [
      {
        text: "Über uns",
        href: Routes.comingSoon,
      },
      {
        text: "Unsere Philosophie",
        href: Routes.comingSoon,
      },
      {
        text: "Karriere",
        href: Routes.comingSoon,
      },
    ],
  },
  {
    heading: "Hilfreiche Links",
    links: [
      {
        text: "Neues zu Zen",
        href: Routes.comingSoon,
      },
      {
        text: "Blog",
        href: Routes.comingSoon,
      },
      {
        text: "Häufig gestellte Fragen",
        href: Routes.comingSoon,
      },
      {
        text: "Kundenservice",
        href: Routes.comingSoon,
      },
      {
        text: "Kontakt",
        href: Routes.comingSoon,
      },
    ],
  },
];

const legal = [
  {
    text: "Allgemeine Geschäftsbedingungen",
    href: Routes.terms,
  },
  {
    text: "Datenschutz",
    href: Routes.privacy,
  },
  {
    text: "Impressum",
    href: Routes.imprint,
  },
];
