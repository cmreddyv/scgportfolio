import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Gallery from "@/components/Gallery";
import FarewellMessage from "@/components/FarewellMessage";
import Guestbook from "@/components/Guestbook";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CloudAnimation from "@/components/CloudAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 relative overflow-hidden">
      <CloudAnimation />
      <Header />
      <main>
        <Hero />
        <Bio />
        <Timeline />
        <TechStack />
        <Gallery />
        <FarewellMessage />
        <Guestbook />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
