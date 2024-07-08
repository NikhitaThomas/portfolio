import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/projectSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}
