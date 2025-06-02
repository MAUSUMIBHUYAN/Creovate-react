import { useNavigate } from "react-router-dom";
import { CreovateBackground } from "../components/CreovateBackground";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { AboutSection } from "../components/AboutSection";
import { AnimationSection } from "../components/AnimationSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";



export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CreovateBackground />
      <Navbar onLogoClick={() => navigate("/showcase")} />
      <main>
        <HeroSection />
        <AboutSection />
        <AnimationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
