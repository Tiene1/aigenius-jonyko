import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesAndRobot3D from "@/components/FeaturesAndRobot3D";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturesAndRobot3D />
        <Pricing />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
