import ButtonEmailRegistration from "@/shared/ui/buttonEmailRegistration";
import Heading from "@/shared/ui/heading";
import Text from "@/shared/ui/text";

export default function HeroSection() {
  return (
    <div className="container grid gap-6 text-center relative">
      <Heading level="title-secondary" className="max-w-[1100px] m-auto">
        Mehr Kund*innen erreichen & dein Business mit Zen erweitern
      </Heading>

      <Text level="base">
        Werde Zen-Partner, um unabhängig von Studios zu arbeiten und mehr Gewinn
        aus deiner Kunst zu erzielen.
      </Text>

      <ButtonEmailRegistration buttonLevel="primary-lg" >Jetzt Registrieren</ButtonEmailRegistration>
    </div>
  );
}