import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Services from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

/**
 * Main Home Page (Landing Page Assembly)
 * Demonstrates a modular architectural approach where each
 * section is a standalone server/client component.
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Global Navigation Component */}
      <Navbar />

      {/* Hero Section: High conversion entry point */}
      <Hero />

      {/* Dynamic Content Sections with subtle Reveal Animations */}
      <div className="reveal-animation [animation-delay:200ms]">
        <SocialProof />
      </div>

      <div className="reveal-animation [animation-delay:400ms]">
        <Services />
      </div>

      <div className="reveal-animation [animation-delay:600ms]">
        <Methodology />
      </div>

      <div className="reveal-animation [animation-delay:800ms]">
        <Pricing />
      </div>

      <div className="reveal-animation [animation-delay:1000ms]">
        <FAQ />
      </div>

      {/* Fullstack Contact Form Section */}
      <div className="reveal-animation [animation-delay:1200ms]">
        <Contact />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
