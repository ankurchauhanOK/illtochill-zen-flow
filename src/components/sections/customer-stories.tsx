import { Star } from 'lucide-react';
import { Button } from '../ui/button';

interface ReviewCardProps {
  name: string;
  platform: string;
  rating: number;
  review: string;
  avatar?: string;
  productQuote?: string;
}

function ReviewCard({ name, platform, rating, review, productQuote }: ReviewCardProps) {
  return (
    <div className="flex-shrink-0 w-80 bg-surface border border-divider rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 snap-center">
      {/* User Info */}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-heading font-semibold text-lg mr-4">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-body font-medium text-foreground">{name}</h4>
          <p className="text-sm text-subtext">Verified on {platform}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating 
                ? 'text-yellow-400 fill-current' 
                : 'text-divider'
            }`}
          />
        ))}
        <span className="ml-2 text-sm text-subtext">({rating}/5)</span>
      </div>

      {/* Product Quote */}
      {productQuote && (
        <div className="bg-surface-elevated border border-divider rounded-md p-3 mb-4">
          <p className="font-body text-sm text-primary italic">
            "{productQuote}"
          </p>
        </div>
      )}

      {/* Review */}
      <p className="font-body text-foreground leading-relaxed mb-4">
        {review}
      </p>

      {/* Read More */}
      <Button variant="link" className="p-0 h-auto text-sm">
        Read Full Story
      </Button>
    </div>
  );
}

export function CustomerStories() {
  const reviews = [
    {
      name: "Sarah M.",
      platform: "Shopify",
      rating: 5,
      productQuote: "i have a superpower—i can mute anyone anytime i want.",
      review: "This shirt speaks to my soul. As someone with ADHD, I love having something that shows my strength rather than my struggles. The quality is amazing too!"
    },
    {
      name: "Mike R.",
      platform: "Amazon",
      rating: 5,
      review: "Finally found a brand that gets it. The designs are witty without being preachy. My chronic pain doesn't define me, but this shirt shows I'm more than my condition."
    },
    {
      name: "Alex Chen",
      platform: "Etsy",
      rating: 5,
      productQuote: "anxiety is just excitement without breath.",
      review: "Ordered multiple stickers for my laptop and water bottle. They're conversation starters that actually lead to meaningful connections. Love the message!"
    },
    {
      name: "Jordan K.",
      platform: "Shopify",
      rating: 5,
      review: "The hoodie is incredibly soft and the print quality is top-notch. More importantly, it makes me feel seen and understood. That's worth everything."
    },
    {
      name: "Taylor B.",
      platform: "Amazon",
      rating: 5,
      productQuote: "my energy is a limited edition—handle with care.",
      review: "Perfect for explaining spoon theory without having to explain spoon theory! The design is subtle but powerful. Exactly what I needed."
    }
  ];

  return (
    <section className="py-20 px-4 bg-surface-elevated/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
            Customer Stories
          </h2>
          <p className="font-body text-xl text-subtext max-w-2xl mx-auto">
            Real people sharing how our designs made them feel seen, heard, and empowered.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
          
          {/* Scroll Hint */}
          <div className="text-center mt-8">
            <p className="text-subtext text-sm mb-4">Scroll to see more stories</p>
            <Button variant="outline">
              All Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}