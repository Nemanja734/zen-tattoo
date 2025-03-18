import Image from "next/image";
import { artists } from "@/config/mock/artists";
import Text from "@/ui/text";
import TattooStyleTags from "@/ui/tattooStyleTags";
import Button from "@/ui/button";

export default function Page() {
  const artist = artists[0];
  const rate = artist.hourlyRate.toFixed(2).replace(".", ",");

  return (
    <div className="container grid gap-8 md:gap-12">
      <div className="grid md:grid-cols-2 place-items-center">
        <div className="mx-auto relative h-[200px] aspect-square rounded-full overflow-hidden md:h-[300px]">
          <Image
            src="/profile.jpg"
            fill
            alt="Profilbild des Tätowierers"
            className="object-cover"
          />
        </div>

        <div className="grid gap-2 mt-5">
          <Text level="2xl">
            {artist.firstName} {artist.lastName}
          </Text>
          <Text level="base">
            {artist.postalCode} - {artist.city}
          </Text>
          <Text level="base" customs="italic">
            Todo: Rating
          </Text>
          <Text level="base" customs="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            fugiat repudiandae sit blanditiis veniam sunt laboriosam, cumque
            doloremque labore molestias tenetur! Tenetur asperiores delectus
            alias, veniam nulla, earum fuga veritatis adipisci maxime inventore
            velit amet consequatur sequi vitae, sed minus.
          </Text>
          <TattooStyleTags styles={artist.tattooStyle} />
          <Text level="xl" customs="font-normal!">
            {rate} €
          </Text>
          <Button level="primary-lg">Konfiguriere dein Tattoo</Button>
        </div>
      </div>

      <div className="h-[2px] w-full bg-tone"></div>

      <div className="grid gap-4 md:grid-cols-3">
        {artist.portfolio.map((image, index) => (
          <div key={index} className="relative aspect-5/6">
            <Image src={image} alt="Bild aus dem Portfolio des Künstlers" fill />
          </div>
        ))}
      </div>
    </div>
  );
}
