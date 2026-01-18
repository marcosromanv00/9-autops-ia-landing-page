import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Services from "@/components/sections/Services";
import Methodology from "@/components/sections/Methodology";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <Methodology />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
