import { Button } from '../ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden hero-shrink">
      {/* Background Video/Motion */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background">
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-background/40"></div>
        {/* Subtle animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: 'var(--duration-slow)' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-pulse delay-1000" style={{ animationDuration: 'var(--duration-slow)' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-foreground leading-tight reveal-headline">
          Wear strength.{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Share hope.
          </span>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-subtext mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed reveal-content">
          Motivational clothing and stickers crafted to uplift people living with mental health and chronic conditions—and everyone who stands with them.
        </p>

        <div className="mb-6 reveal-content">
          <Button variant="hero" size="lg" className="px-8">
            Shop statements
          </Button>
        </div>

        {/* Benefit chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-2xl mx-auto reveal-content">
          <span className="benefit-chip">Comfort-first fits</span>
          <span className="benefit-chip">Uplifting designs</span>
          <span className="benefit-chip">A share goes to support resources</span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}