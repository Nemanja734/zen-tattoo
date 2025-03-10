import Heading from "@/ui/heading";
import FaqItem from "../faqItem";

export default function FaqSection() {
  return (
    <div className="container">
      <Heading level="heading-primary" customs="text-center">
        Häufig gestellte Fragen
      </Heading>
      <div className="grid gap-2 md:gap-3">
        {faqData.map((item, index) => (
          <FaqItem key={index} {...item}></FaqItem>
        ))}
      </div>
    </div>
  );
}

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
