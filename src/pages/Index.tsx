import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Specifications from "@/components/Specifications";
import Pricing from "@/components/Pricing";
import RemoteControl from "@/components/RemoteControl";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Specifications />
        <Pricing />
        <RemoteControl />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
