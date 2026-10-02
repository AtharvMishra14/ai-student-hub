import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CategorySection from "@/components/home/CategorySection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CategorySection />
        <HowItWorks />
      </main>

      <Footer />
    </>
  );
}