import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HistorySection } from './components/HistorySection';
import { GallerySection } from './components/GallerySection';
import { SponsorshipSection } from './components/SponsorshipSection';
import { TeamSection } from './components/TeamSection';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-earth selection:bg-forest selection:text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <HistorySection />
        <GallerySection />
        <SponsorshipSection />
        <TeamSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>);

}