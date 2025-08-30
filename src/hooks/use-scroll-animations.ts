import { useEffect, useRef } from 'react';

interface UseScrollAnimationsOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimations(options: UseScrollAnimationsOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const { threshold = 0.1, rootMargin = '0px 0px -10% 0px' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if user prefers reduced motion or has animations disabled
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animationsDisabled = document.body.dataset.animations === 'off';
    
    if (prefersReducedMotion || animationsDisabled) {
      // Show final state immediately
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }

    // Check for scroll-driven animation support
    const supportsScrollTimeline = 'AnimationTimeline' in window;
    
    if (!supportsScrollTimeline) {
      // Fallback to Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold, rootMargin }
      );

      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    }
  }, [threshold, rootMargin]);

  return ref;
}

// Hook for carousel center focus effect
export function useCarouselCenterFocus() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = container.querySelectorAll('.carousel-card');
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        
        // Card is centered if within 50px of container center
        if (distance < 50) {
          card.classList.add('center-focused');
        } else {
          card.classList.remove('center-focused');
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return containerRef;
}

// Hook for info rail item expansion
export function useInfoRailExpansion() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

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
        rootMargin: '-20% 0px -20% 0px' // Only trigger when item is well in view
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}

// Parallax hook for background elements
export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animationsDisabled = document.body.dataset.animations === 'off';
    
    if (prefersReducedMotion || animationsDisabled) {
      return;
    }

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      // Only apply parallax when element is in viewport
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        element.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return ref;
}