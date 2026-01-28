import ContactUs from "./ContactUs";

export const metadata = {
  title: "Contact Us | Affordable Chauffeur & Rental Cars",
  description:
    "Book reliable and affordable car hire services in Sunbury. Chauffeur-driven cars, airport transfers, corporate travel & luxury vehicles available.",
};

export default function PageContactUs() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    "name": "Car Hire Sunbury",
    "url": "https://yourdomain.com/car-hire-sunbury",
    "telephone": "+61 430 410 450",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sunbury",
      "addressCountry": "AU"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Sunbury"
    },
    "priceRange": "$$"
  };

  return (
    <>
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ContactUs />
    </>
  );
}
