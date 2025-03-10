import ContactSection from "@/components/artist/contactSection";
import NavArtist from "@/layout/navArtist";
import Footer from "@/layout/footer";
import BenefitsSection from "@/components/artist/benefitsSection"
import HeroSection from "@/components/artist/heroSection";
import HowItWorksSection from "@/components/artist/howItWorksSection";
import NextStepsSection from "@/components/artist/nextStepsSection";
import CustomerSupportSection from "@/components/artist/customerSupportSection";
import FaqSection from "@/components/artist/faqSection";

export default function Artist() {
  return (
    <>
      <NavArtist />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <CustomerSupportSection />
      <NextStepsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}
