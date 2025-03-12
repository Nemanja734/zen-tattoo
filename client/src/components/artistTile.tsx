import Button from "@/ui/button";
import TattooStyleTags from "@/ui/tattooStyleTags";
import Text from "@/ui/text";
import Image from "next/image";

interface ArtistTileProp {
  portfolio: string[];
  firstName: string;
  lastName: string;
  postalCode: string;
  city: string;
  tattooStyle: string[];
  hourlyRate: string;
}

export default function ArtistTile(prop: ArtistTileProp) {
  return (
    <div className="bg-background flex flex-col border-1 rounded-lg overflow-hidden h-full">
      <div className="grid grid-cols-2 gap-2 h-130">
        <div className="relative h-full w-full">
          <Image
            src={prop.portfolio[0]}
            fill
            alt="Tattoo image"
            className="object-cover"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src={prop.portfolio[1]}
            fill
            alt="Tattoo image"
            className="object-cover"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src={prop.portfolio[2]}
            fill
            alt="Tattoo image"
            className="object-cover"
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src={prop.portfolio[3]}
            fill
            alt="Tattoo image"
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid gap-2 p-4 place-items-start grow-1">
        <Text level="xl" customs="font-normal!">
          {prop.firstName} {prop.lastName}
        </Text>
        <Text level="base">
          {prop.postalCode}, {prop.city}
        </Text>
        <TattooStyleTags styles={prop.tattooStyle} />
        <Text level="xl" customs="font-normal! mt-auto">
          {prop.hourlyRate} €
        </Text>
        <Button level="stroke-sm" customs="w-fit">
          Portfolio anzeigen
        </Button>
      </div>
    </div>
  );
}
