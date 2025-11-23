import { Footer } from "../../Components/Footer";
import { HeroSection } from "../../Components/HeroSection";
import { Navbar } from "../../Components/NavBar";
import { ServicesSection } from "../../Components/ServicesSection";

export function HomePage () {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection  />

      {/* Footer */}
      <Footer />
    </div>
  );
};