import Heading from "@/ui/heading";
import Text from "@/ui/text";
import Button from "@/ui/button";
import { Routes } from "@/config/routes";

export default function HeroSection() {
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