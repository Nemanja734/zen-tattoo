import Hero from "../components/index/hero";
import WhyZen from "@/components/index/whyZen";
import FeaturedArtists from "@/components/index/featuredArtists";
import HowItWorks from "@/components/index/howItWorks";
import AllBenefits from "@/components/index/allBenefits";
import Faq from "@/components/index/faq";
import Bento from "@/components/index/bento";
import Contact from "@/components/artist/contact";

export default function Page() {
  return (
    <>
    <Hero />
    <WhyZen />
    <FeaturedArtists />
    <HowItWorks />
    <AllBenefits />
    <Faq />
    <Bento />
    <Contact />
    </>
  );
}
