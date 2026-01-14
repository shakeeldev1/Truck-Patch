import Hero from "../components/services/Hero";
import { HowItWorks } from "../components/services/HowItWorks";
import { ServicesSection } from "../components/services/ServicesSection";
import { ServicesTiming } from "../components/services/SevicesTiming";

function Services() {
  return (
    <>
      <Hero />
      <ServicesTiming />
      <ServicesSection />
      <HowItWorks />
    </>
  );
}

export default Services;
