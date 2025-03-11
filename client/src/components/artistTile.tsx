import TattooStyleWrapper from "@/ui/tattooStyleWrapper";
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
    <div className="grid gap-2 heading-primary-mb">
      <div className="relative h-100 w-full">
        <Image
          src={prop.portfolio[0]}
          fill
          alt="Tattoo image"
          className="object-cover"
        />
      </div>
      <Text level="xl" customs="font-normal!">
        {prop.firstName} {prop.lastName}
      </Text>
      <Text level="base">
        {prop.postalCode}, {prop.city}
      </Text>
      <TattooStyleWrapper styles={prop.tattooStyle} />
      <Text level="xl" customs="font-normal!">
        {prop.hourlyRate} €
      </Text>
    </div>
  );
}
