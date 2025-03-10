import ContactSection from "@/components/artist/contactSection";
import Nav, { NavType } from "@/layout/nav";
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
      <Nav navType={NavType.Artist} />
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
