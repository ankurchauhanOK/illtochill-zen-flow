import { Navigation } from '../components/ui/navigation';
import { HeroSection } from '../components/sections/HeroSection';
import { ChronicSection } from '../components/sections/ChronicSection';
import { MentalSection } from '../components/sections/MentalSection';
import { CustomerStoriesSection } from '../components/sections/CustomerStoriesSection';
import { Footer } from '../components/sections/footer';
import { useGSAPAnimations } from '../hooks/useGSAPAnimations';

const Index = () => {
  // Initialize GSAP animations
  useGSAPAnimations();

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main id="main">
        <HeroSection />
        <ChronicSection />
        <MentalSection />
        <CustomerStoriesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
