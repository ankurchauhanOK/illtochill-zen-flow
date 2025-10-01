import { Button } from '../ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Motion */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background">
        {/* Subtle animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-foreground leading-tight">
          Wear the voice that{' '}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            lifts
          </span>
        </h1>
        
        <p className="font-body text-xl md:text-2xl text-subtext mb-12 max-w-2xl mx-auto leading-relaxed">
          Empowering quotes for mental and chronic journeys. Find your statement piece that speaks your truth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="px-8">
            Shop Statements
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Explore Categories
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}