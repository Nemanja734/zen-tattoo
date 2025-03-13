import Heading from "@/ui/heading";
import Text from "@/ui/text";
import Icon from "@/ui/icon";

export default function AllBenefits() {
    return(
        <div className="container">
            <Heading level="heading-primary">Alle Vorteile auf einem Blick</Heading>
            <div>
                {benefits.map((text, index) => (
                    <div key={index} className="grid grid-cols-[auto_1fr] gap-4 items-center h-[60px]">
                    <Icon name="checkCircle" size="lg" color="var(--primary)" />
                    <Text level="base">{text}</Text>
                    </div>
                ))}
            </div>
        </div>
    )
}

const benefits = [
    "Unzählige Portfolios professioneller Tätowierer",
    "Filter nach Ort, Preis und Tattoostil",
    "Freie Auswahl des Termintages im Rahmen der angegebenen Arbeitszeiten",
    "Einfacher Buchungsprozess",
    "Ausführlicher Verifizierungsprozess für neue Tätowierer und Portfolios",
    "Sicherer Zahlungsprozess mit Stripe",
    "Kostenlose Stornierung bis zu zwei Wochen vor dem Termin",
    "Zahlung erst nach Ende des Termins",
    "Preisberechnung anhand der tatsächlichen Zeit des Termins",
]