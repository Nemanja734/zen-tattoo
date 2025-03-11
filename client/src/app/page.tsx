import Nav, { NavType } from "@/layout/nav";
import Hero from "../components/index/hero";
import WhyZen from "@/components/index/whyZen";

export default function Home() {
  return (
    <>
    <Nav navType={NavType.Main}></Nav>
    <Hero />
    <WhyZen />
    </>
  );
}
