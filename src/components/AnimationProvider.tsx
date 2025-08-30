import { useEffect, ReactNode } from 'react';

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    // Set up scroll-driven animation support detection
    const supportsScrollTimeline = 'scrollTimeline' in document.documentElement.style ||
                                   'animationTimeline' in document.documentElement.style;
    
    document.documentElement.classList.toggle('scroll-timeline-supported', supportsScrollTimeline);

    // Initialize intersection observers for fallback animations
    if (!supportsScrollTimeline) {
      const setupFallbackAnimations = () => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                
                // Handle section reveals
                if (target.classList.contains('section-reveal')) {
                  const headlines = target.querySelectorAll('.reveal-headline');
                  const visuals = target.querySelectorAll('.reveal-visual');
                  const content = target.querySelectorAll('.reveal-content');
                  
                  headlines.forEach((el, i) => {
                    setTimeout(() => el.classList.add('animate-slide-in-left'), i * 80);
                  });
                  
                  visuals.forEach((el, i) => {
                    setTimeout(() => el.classList.add('animate-slide-in-right'), i * 80);
                  });
                  
                  content.forEach((el, i) => {
                    setTimeout(() => el.classList.add('animate-fade-in-up'), (i + 1) * 80);
                  });
                }
                
                // Handle grid cascades
                if (target.classList.contains('grid-cascade')) {
                  const tiles = target.querySelectorAll('.grid-tile');
                  tiles.forEach((tile, i) => {
                    setTimeout(() => tile.classList.add('animate-tile-cascade'), i * 60);
                  });
                }
                
                // Handle clip reveals
                if (target.classList.contains('clip-reveal-title')) {
                  target.classList.add('animate-clip-reveal');
                }
                
                observer.unobserve(target);
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
          }
        );

        // Observe all animated elements
        document.querySelectorAll('.section-reveal, .grid-cascade, .clip-reveal-title').forEach((el) => {
          observer.observe(el);
        });
      };

      // Setup after DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupFallbackAnimations);
      } else {
        setupFallbackAnimations();
      }
    }

    // Setup carousel center focus
    const setupCarouselFocus = () => {
      const carousel = document.getElementById('stories-carousel');
      if (!carousel) return;

      const handleScroll = () => {
        if (document.body.dataset.animations === 'off') return;
        
        const cards = carousel.querySelectorAll('.carousel-card');
        const containerRect = carousel.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distance = Math.abs(containerCenter - cardCenter);
          
          // Card is centered if within 80px of container center
          if (distance < 80) {
            card.classList.add('center-focused');
          } else {
            card.classList.remove('center-focused');
          }
        });
      };

      carousel.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial check

      return () => {
        carousel.removeEventListener('scroll', handleScroll);
      };
    };

    // Setup info rail interactions
    const setupInfoRail = () => {
      const railItems = document.querySelectorAll('.info-rail-item');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            } else {
              entry.target.classList.remove('in-view');
            }
          });
        },
        { 
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      railItems.forEach((item) => observer.observe(item));
    };

    // Initialize all interactions
    setTimeout(() => {
      setupCarouselFocus();
      setupInfoRail();
    }, 100);

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleReducedMotion = (e: MediaQueryListEvent) => {
      document.body.dataset.animations = e.matches ? 'off' : 'on';
    };
    
    mediaQuery.addEventListener('change', handleReducedMotion);
    
    // Initial check
    if (mediaQuery.matches) {
      document.body.dataset.animations = 'off';
    }

    return () => {
      mediaQuery.removeEventListener('change', handleReducedMotion);
    };
  }, []);

  return <>{children}</>;
}