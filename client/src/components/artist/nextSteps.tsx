import Heading from "@/shared/ui/heading";
import NextStep from "./nextStep";
import Overlay from "@/layout/overlay";

export default function NextStepsSection() {
  const steps = [
    {
      title: "Reiche deine Bewerbung ein.",
    },
    {
      title: "Werde angenommen.",
    },
    {
      title: "Gewinne neue Kundschaft mit Zen.",
    },
  ];

  return (
    <div className="container text-center">
      <Heading level="heading-primary">Die nächsten Schritte:</Heading>

      <div className="grid gap-4 md:gap-6 md:grid-cols-3 max-w-[380px] md:max-w-max m-auto heading-primary-mb">
        {steps.map((step, index) => (
          <NextStep key={index} index={index}>
            {step.title}
          </NextStep>
        ))}
      </div>
    </div>
  );
}
