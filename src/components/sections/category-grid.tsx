import { Button } from '../ui/button';

interface CategoryTileProps {
  title: string;
  description: string;
  image?: string;
  size?: 'small' | 'medium' | 'large';
  delay?: number;
}

function CategoryTile({ title, description, size = 'medium', delay = 0, className = '' }: CategoryTileProps & { className?: string }) {
  const sizeClasses = {
    small: 'md:row-span-1 md:col-span-1',
    medium: 'md:row-span-2 md:col-span-1',
    large: 'md:row-span-2 md:col-span-2'
  };

  return (
    <div 
      className={`
        relative bg-surface border border-divider rounded-lg overflow-hidden 
        group transition-all duration-300 shadow-soft hover:shadow-medium
        min-h-[200px] ${sizeClasses[size]} grid-tile ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-elevated">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
      </div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-background/80 via-transparent to-transparent">
        <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
          {title}
        </h3>
        <p className="font-body text-subtext text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <Button variant="outline" size="chip" className="self-start">
          Shop Now
        </Button>
      </div>
    </div>
  );
}

interface CategoryGridProps {
  title: string;
  subtitle: string;
  categories: Array<{
    title: string;
    description: string;
    size?: 'small' | 'medium' | 'large';
  }>;
}

export function CategoryGrid({ title, subtitle, categories, id, trackId, isHorizontal = false }: CategoryGridProps & { id?: string; trackId?: string; isHorizontal?: boolean }) {
  const sectionClass = isHorizontal ? "min-h-screen py-0" : "py-20 px-4";
  const containerClass = isHorizontal ? "h-screen flex items-center" : "container mx-auto max-w-6xl";
  
  return (
    <section id={id} className={`${sectionClass} section-reveal`}>
      <div className={containerClass}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4 clip-reveal-title">
            {title}
          </h2>
          <p className="font-body text-xl text-subtext max-w-2xl mx-auto reveal-content">
            {subtitle}
          </p>
        </div>

        {/* Grid or Horizontal Track */}
        {isHorizontal ? (
          <div id={trackId} className="flex gap-8 will-change-transform">
            {categories.map((category, index) => (
              <div key={category.title} className="flex-shrink-0 w-80">
                <CategoryTile
                  title={category.title}
                  description={category.description}
                  size={category.size}
                  delay={index * 100}
                  className={trackId === 'chronic-track' ? 'chronic-card' : 'mental-card'}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto grid-cascade">
            {categories.map((category, index) => (
              <CategoryTile
                key={category.title}
                title={category.title}
                description={category.description}
                size={category.size}
                delay={index * 100}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}