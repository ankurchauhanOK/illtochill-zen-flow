import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  const animationsRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (reducedMotion.matches) {
      // Skip animations if reduced motion is preferred
      return;
    }

    // Initialize all animations
    const initAnimations = () => {
      // Clear existing animations
      animationsRef.current.forEach(st => st.kill());
      animationsRef.current = [];

      // 1. Hero pin and Chronic slide-up
      const heroPin = ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        end: "+=100vh",
        pin: true,
        anticipatePin: 1,
        scrub: 0.5,
        animation: gsap.to("#chronic-section", {
          yPercent: -100,
          ease: "none"
        })
      });
      animationsRef.current.push(heroPin);

      // 2. Chronic cards floating animation
      const chronicCards = document.querySelectorAll('.chronic-card');
      if (chronicCards.length > 0) {
        const chronicFloat = ScrollTrigger.create({
          trigger: "#chronic-section",
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          animation: gsap.from(chronicCards, {
            y: 20,
            rotateZ: (i) => gsap.utils.random(-1.5, 1.5),
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "power1.out"
          })
        });
        animationsRef.current.push(chronicFloat);
      }

      // 3. Horizontal scroll for Chronic section
      const chronicTrack = document.querySelector('#chronic-track');
      if (chronicTrack) {
        const chronicHorizontal = ScrollTrigger.create({
          trigger: "#chronic-horizontal",
          start: "top top",
          end: () => "+=" + (chronicTrack.scrollWidth - window.innerWidth),
          pin: true,
          scrub: true,
          snap: {
            snapTo: (value) => Math.round(value * 8) / 8,
            duration: 0.2
          },
          animation: gsap.to(chronicTrack, {
            x: () => -(chronicTrack.scrollWidth - window.innerWidth),
            ease: "none"
          })
        });
        animationsRef.current.push(chronicHorizontal);
      }

      // 4. Mental cards floating animation
      const mentalCards = document.querySelectorAll('.mental-card');
      if (mentalCards.length > 0) {
        const mentalFloat = ScrollTrigger.create({
          trigger: "#mental-section",
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
          animation: gsap.from(mentalCards, {
            y: 20,
            rotateZ: (i) => gsap.utils.random(-1.5, 1.5),
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "power1.out"
          })
        });
        animationsRef.current.push(mentalFloat);
      }

      // 5. Horizontal scroll for Mental section (opposite direction)
      const mentalTrack = document.querySelector('#mental-track');
      if (mentalTrack) {
        const mentalHorizontal = ScrollTrigger.create({
          trigger: "#mental-horizontal",
          start: "top top",
          end: () => "+=" + (mentalTrack.scrollWidth - window.innerWidth),
          pin: true,
          scrub: true,
          snap: {
            snapTo: (value) => Math.round(value * 8) / 8,
            duration: 0.2
          },
          animation: gsap.to(mentalTrack, {
            x: () => (window.innerWidth - mentalTrack.scrollWidth),
            ease: "none"
          })
        });
        animationsRef.current.push(mentalHorizontal);
      }

      // 6. Stories carousel center focus
      const storiesCarousel = document.querySelector('#stories-carousel');
      if (storiesCarousel) {
        const centerFocus = ScrollTrigger.create({
          trigger: ".stories-section",
          start: "top center",
          end: "bottom center",
          onUpdate: (self) => {
            const cards = storiesCarousel.querySelectorAll('.carousel-card');
            const containerRect = storiesCarousel.getBoundingClientRect();
            const containerCenter = containerRect.left + containerRect.width / 2;

            cards.forEach((card) => {
              const cardRect = card.getBoundingClientRect();
              const cardCenter = cardRect.left + cardRect.width / 2;
              const distance = Math.abs(containerCenter - cardCenter);
              
              if (distance < 80) {
                gsap.to(card, { scale: 1.05, brightness: 1.1, duration: 0.3 });
              } else {
                gsap.to(card, { scale: 0.98, brightness: 0.9, duration: 0.3 });
              }
            });
          }
        });
        animationsRef.current.push(centerFocus);
      }

      // 7. Section reveals with stagger
      const sections = document.querySelectorAll('.section-reveal');
      sections.forEach((section, index) => {
        const headlines = section.querySelectorAll('.reveal-headline');
        const visuals = section.querySelectorAll('.reveal-visual');
        const content = section.querySelectorAll('.reveal-content');
        
        if (headlines.length > 0) {
          const headlineReveal = ScrollTrigger.create({
            trigger: section,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse",
            animation: gsap.from(headlines, {
              x: -24,
              opacity: 0,
              stagger: 0.08,
              duration: 0.6,
              ease: "power2.out"
            })
          });
          animationsRef.current.push(headlineReveal);
        }

        if (visuals.length > 0) {
          const visualReveal = ScrollTrigger.create({
            trigger: section,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse",
            animation: gsap.from(visuals, {
              x: 24,
              opacity: 0,
              stagger: 0.08,
              duration: 0.6,
              ease: "power2.out"
            })
          });
          animationsRef.current.push(visualReveal);
        }

        if (content.length > 0) {
          const contentReveal = ScrollTrigger.create({
            trigger: section,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse",
            animation: gsap.from(content, {
              y: 16,
              opacity: 0,
              stagger: 0.08,
              duration: 0.6,
              ease: "power2.out"
            })
          });
          animationsRef.current.push(contentReveal);
        }
      });
    };

    // Initialize animations after DOM is ready
    const timer = setTimeout(initAnimations, 100);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Handle reduced motion changes
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        // Disable animations
        animationsRef.current.forEach(st => st.kill());
        gsap.set(['.reveal-headline', '.reveal-visual', '.reveal-content', '.chronic-card', '.mental-card'], {
          clearProps: "all",
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1
        });
      } else {
        // Re-enable animations
        initAnimations();
      }
    };

    reducedMotion.addEventListener('change', handleReducedMotionChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      reducedMotion.removeEventListener('change', handleReducedMotionChange);
      animationsRef.current.forEach(st => st.kill());
    };
  }, []);

  return null;
}