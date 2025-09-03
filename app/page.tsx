import {Header} from "../components/Header";
import {Hero} from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import MusicPreview from "../components/MusicPreview";
import TourPreview from "../components/TourPreview";
import MerchPreview from "../components/MerchPreview";
import ContactSection from "../components/ContactSection";
import {Footer} from "../components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <AboutPreview />
      <MusicPreview />
      <TourPreview />
      <MerchPreview />
      <ContactSection />
      <Footer />
    </div>
  );
}