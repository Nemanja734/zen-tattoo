import Heading from "@/shared/ui/heading";
import Image from "next/image";
import Text from "@/shared/ui/text";
import Button from "@/shared/ui/button";
import { routes } from "@/utils/routes";

export default function Hero() {
  return (
    <div className="container relative pt-34! md:pt-22! sm:grid sm:grid-cols-2">
      <div className="grid gap-4 self-start">
        <Heading level="title-primary" className="max-w-[250px] sm:max-w-none">
          Das digitale Tattoostudio
        </Heading>
        <Text level="base" className="max-w-80 sm:max-w-none">Entdecke talentierte Tätowierer aus ganz Deutschland, vergleiche ihre Portfolios und buche dein Wunsch-Tattoo bequem über das Internet.</Text>
        <Button level="primary-lg" className="w-fit" href={routes.showroom}>Entdecke Tätowierer</Button>
      </div>

      <div className="absolute top-0 right-0 md:static md:-translate-y-13 lg:-translate-y-11">
        <div className="relative w-50 h-50 sm:h-65 sm:w-65 ml-auto md:mx-auto">
          <Image src="/enso.png" alt="Enso Kreis" fill sizes="60vw" />
          <Heading level="title-primary" className="absolute inset-0 m-auto grid place-items-center">
            Zen.
          </Heading>
        </div>
      </div>
    </div>
  );
}
