import { siteContent } from '../../data/siteContent';

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video 
        className="hero-video absolute inset-0 w-full h-full object-cover" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={hero.video} type="video/mp4" />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-8 md:px-16 max-w-2xl text-white">
          <h1 className="hero-title text-5xl md:text-6xl font-bold leading-tight font-heading">
            {hero.title}
          </h1>
          <p className="hero-subtitle mt-4 text-lg md:text-xl opacity-90 font-body">
            {hero.subtitle}
          </p>
          <a 
            href={hero.cta.href} 
            className="hero-cta inline-block mt-6 rounded-xl px-6 py-3 bg-gradient-primary hover:brightness-110 font-semibold transition-all duration-200"
          >
            {hero.cta.label}
          </a>
          <div className="hero-tags mt-4 flex flex-wrap gap-2">
            {hero.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full bg-white/15 text-sm backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}