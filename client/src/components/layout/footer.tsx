import DdStatic from "../ddStatic";
import Heading from "../elements/heading";
import LogoFooter from "../logoFooter";

export default function Footer() {
  return (
    <div className="container bg-foreground text-background grid gap-12">
      <div>
        <LogoFooter width={250} className="mb-4" />
        <Heading level={"heading-primary"} customs="mb-0!">
          Mehr als nur ein Tattoostudio.
        </Heading>
      </div>

      <nav aria-label="Footer Navigation" className="grid gap-5">
        {navigation.map((section, index) => (
          <DdStatic
            key={index}
            ddButton={section.heading}
            ddItems={section.links}
            className="grid gap-2"
          ></DdStatic>
        ))}
      </nav>
    </div>
  );
}

const navigation = [
  {
    heading: "Partnerschaften",
    links: [
      {
        text: "Für Tätowierer",
        href: "/artist",
      },
      {
        text: "Für Tattoostudios",
        href: "/under-construction",
      },
      {
        text: "Affiliate Marketing",
        href: "/under-construction",
      },
    ],
  },
  {
    heading: "Unternehmen",
    links: [
      {
        text: "Über uns",
        href: "/under-construction",
      },
      {
        text: "Unsere Philosophie",
        href: "/under-construction",
      },
      {
        text: "Karriere",
        href: "/under-construction",
      },
    ],
  },
  {
    heading: "Hilfreiche Links",
    links: [
      {
        text: "Neues zu Zen",
        href: "/under-construction",
      },
      {
        text: "Blog",
        href: "/under-construction",
      },
      {
        text: "Häufig gestellte Fragen",
        href: "/under-construction",
      },
      {
        text: "Kundenservice",
        href: "/under-construction",
      },
      {
        text: "Kontakt",
        href: "/under-construction",
      },
    ],
  },
];
