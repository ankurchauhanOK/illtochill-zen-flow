import { useState } from 'react';
import { Heart, Users, Gift, Star, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface InfoBarProps {
  icon: React.ElementType;
  title: string;
  description: string;
  cta: string;
  isExpanded: boolean;
  onToggle: () => void;
}

function InfoBar({ icon: Icon, title, description, cta, isExpanded, onToggle }: InfoBarProps) {
  return (
    <div 
      className={`
        relative bg-surface border border-divider rounded-lg overflow-hidden 
        transition-all duration-300 cursor-pointer hover:border-primary/30
        ${isExpanded ? 'shadow-medium' : 'shadow-soft hover:shadow-medium'}
      `}
      onClick={onToggle}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground">
              {title}
            </h3>
          </div>
          <ChevronRight 
            className={`w-5 h-5 text-subtext transition-transform duration-300 ${
              isExpanded ? 'rotate-90' : ''
            }`} 
          />
        </div>
        
        <div className={`
          overflow-hidden transition-all duration-300
          ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
        `}>
          <p className="font-body text-subtext leading-relaxed mb-6">
            {description}
          </p>
          <Button variant="outline" onClick={(e) => e.stopPropagation()}>
            {cta}
          </Button>
        </div>
      </div>
    </div>
  );
}

export function InfoRail() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const infoItems = [
    {
      icon: Heart,
      title: "Brand Mission",
      description: "We create empowering designs that celebrate the strength, wit, and resilience of people navigating mental health and chronic conditions. Every piece is crafted to make you feel seen, understood, and proudly yourself.",
      cta: "Learn Our Story"
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with thousands of others who understand your journey. Share your stories, find support, and celebrate victories together in our inclusive community space.",
      cta: "Join Discord"
    },
    {
      icon: Gift,
      title: "First Order Discount",
      description: "New to IllToChill? Get 15% off your first order when you sign up for our newsletter. Plus, enjoy free shipping on orders over $50 and hassle-free returns.",
      cta: "Get Discount"
    },
    {
      icon: Star,
      title: "Just for You",
      description: "Take our quick quiz to discover designs that speak to your specific journey. Whether you're navigating ADHD, chronic pain, anxiety, or other conditions, we'll curate perfect matches.",
      cta: "Take Quiz"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-8">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 lg:transform lg:-rotate-6 lg:origin-left">
                All you need to know :)
              </h2>
              <p className="font-body text-subtext leading-relaxed">
                Everything about our mission, community, and how we support your journey.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-9">
            <div className="space-y-4">
              {infoItems.map((item, index) => (
                <InfoBar
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  cta={item.cta}
                  isExpanded={expandedIndex === index}
                  onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}