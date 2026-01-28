import FleetSection from "./components/FleetSection";
import OurServices from "./components/OurServices";
import SliderBanner from "./components/SliderBanner";
import AboutUs from "./components/AboutUs";
import TestimonialSection from "./components/TestimonialSection";
import WhyChooseUs from "./components/WhyChooseUs";
import WhyWeAreTheBest from "./components/WhyWeAreTheBest";
import RentalAndChauffer from "./components/RentalAndChauffer";
import CoreServices from "./components/CoreServices";
import TrustSection from "./components/TrustSection";
import ServicePrice from "./components/ServicePrice";

export default function HomePage() {
  return (
    <main className="pageOffset">
      {/* HERO */}
      <SliderBanner />

      {/* CORE OFFER – Immediate action */}
      <CoreServices />

      {/* TRUST SIGNALS – Logos / numbers / ratings */}
      <TrustSection />

      {/* SERVICE EXPLANATION */}
      {/* <OurServices /> */}

      {/* PRICE TRANSPARENCY – Conversion boost */}
      <ServicePrice />


      {/* FLEET SHOWCASE */}
      <FleetSection />

      {/* WHY US */}
      <WhyChooseUs />
      <WhyWeAreTheBest />

      {/* SOCIAL PROOF */}
      <TestimonialSection />
    </main>
  );
}
