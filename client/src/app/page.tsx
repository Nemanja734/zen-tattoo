import Nav, { NavType } from "@/layout/nav";
import Hero from "../components/index/hero";
import WhyZen from "@/components/index/whyZen";
import FeaturedArtists from "@/components/index/featuredArtists";

export default function Home() {
  return (
    <>
    <Nav navType={NavType.Main}></Nav>
    <Hero />
    <WhyZen />
    <FeaturedArtists />
    </>
  );
}
