import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import Introduction from "@/components/Introduction";
import Expertise from "@/components/Expertise";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-brand-blue selection:bg-card-lime selection:text-brand-dark">
      {/* Floating Centered Pill Navbar */}
      <Navbar />

      {/* Hero Section with Figma Canvas Styling & Wave Transition */}
      <Hero />

      {/* Selected Projects Showcase (6-Card Grid on Light Background) */}
      <SelectedProjects />

      {/* Editorial Manifesto & 5 Playful Sticker Icons + Wave Transition */}
      <Introduction />

      {/* What I Do / Expertise Bento + Full-Width Lime Marquee Ribbon */}
      <Expertise />

      {/* About Section with Arched Portrait Card & Badges */}
      <About />

      {/* High-Impact CTA Banner with Concentric Orbital Rings */}
      <ContactCTA />

      {/* Massive Running Ticker & Editorial Footer */}
      <Footer />
    </main>
  );
}
