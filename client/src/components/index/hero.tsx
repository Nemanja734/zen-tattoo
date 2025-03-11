import Heading from "@/ui/heading";
import Image from "next/image";
import Text from "@/ui/text";
import Button from "@/ui/button";

export default function Hero() {
  return (
    <div className="container relative pt-34!">
      <div className="grid gap-4">
        <Heading level="title-primary" className="max-w-[250px]">
          Das digitale Tattoostudio
        </Heading>
        <Text level="base" customs="max-w-80">Entdecke talentierte Tätowierer aus ganz Deutschland, vergleiche ihre Portfolios und buche dein Wunsch-Tattoo bequem über das Internet.</Text>
        <Button level="primary-lg" customs="w-fit">Tätowierer Entdecken</Button>
      </div>

      <div className="absolute top-0 right-0">
        <div className="relative w-50 h-50">
          <Image src="/enso.png" alt="Enso Kreis" fill />
          <Heading level="title-primary" className="absolute inset-0 m-auto grid place-items-center">
            Zen.
          </Heading>
        </div>
      </div>
    </div>
  );
}
