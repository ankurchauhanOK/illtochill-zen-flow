import { Navigation } from '../components/ui/navigation';
import { HeroSection } from '../components/sections/hero-section';
import { CategoryGrid } from '../components/sections/category-grid';
import { CustomerStories } from '../components/sections/customer-stories';
import { InfoRail } from '../components/sections/info-rail';
import { Footer } from '../components/sections/footer';

const Index = () => {
  const chronicCategories = [
    {
      title: "Chronic Pain",
      description: "Designs that honor your strength through every difficult day.",
      size: "medium" as const
    },
    {
      title: "Autoimmune Warriors",
      description: "Celebrate your body's complexity with pride and humor.",
      size: "large" as const
    },
    {
      title: "Fibromyalgia",
      description: "For those who fight invisible battles every day.",
      size: "small" as const
    },
    {
      title: "Chronic Fatigue",
      description: "Energy-conscious designs for spoon theory champions.",
      size: "medium" as const
    },
    {
      title: "Migraine Survival",
      description: "Witty statements for weathering the storm.",
      size: "small" as const
    }
  ];

  const mentalCategories = [
    {
      title: "Anxiety & Panic",
      description: "Breathe, ground, and wear your coping strategies.",
      size: "medium" as const
    },
    {
      title: "ADHD Life",
      description: "Celebrate your beautiful, chaotic, brilliant mind.",
      size: "large" as const
    },
    {
      title: "Depression Support",
      description: "Gentle reminders for the harder days.",
      size: "small" as const
    },
    {
      title: "OCD Awareness",
      description: "Understanding and humor for intrusive thoughts.",
      size: "medium" as const
    },
    {
      title: "Bipolar Journey",
      description: "Honoring all parts of your mental health story.",
      size: "small" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <main id="main">
        <HeroSection />
        
        <CategoryGrid 
          title="Chronic Conditions"
          subtitle="Shop statements for lived experiences that celebrate your resilience."
          categories={chronicCategories}
        />
        
        {/* Secondary Links */}
        <section className="py-8 bg-surface/30">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-subtext">
              <a href="/stories" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">
                Explore lineup stories
              </a>
              <a href="/sizing" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">
                See sizing & comfort
              </a>
              <a href="/impact" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">
                How purchases help
              </a>
            </div>
          </div>
        </section>
        
        <CategoryGrid 
          title="Mental Health"
          subtitle="Designs that speak to your journey with understanding and empowerment."
          categories={mentalCategories}
        />
        
        <CustomerStories />
        
        <InfoRail />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
