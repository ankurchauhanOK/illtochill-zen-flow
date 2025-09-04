import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimations() {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    
    // Check for reduced motion preference
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    isInitialized.current = true;

    // Hero section animations
    const initHeroAnimations = () => {
      const heroTL = gsap.timeline({ defaults: { ease: "power2.out" } });
      
      heroTL
        .from(".hero-video", { opacity: 0, duration: 1.2 })
        .from(".hero-title", { y: 40, opacity: 0, duration: 0.9 }, "-=0.6")
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-cta", { scale: 0.9, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(".hero-tags > *", { y: 12, opacity: 0, stagger: 0.12, duration: 0.4 }, "-=0.3");

      // CTA hover micro-interactions with native CSS transitions (more reliable)
      document.querySelectorAll(".hero-cta").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
          gsap.to(btn, { scale: 1.04, duration: 0.18, ease: "power2.out" });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { scale: 1.0, duration: 0.18, ease: "power2.out" });
        });
      });
    };

    // Chronic section horizontal scroll (R→L)
    const initChronicAnimations = () => {
      const chronicTrack = document.querySelector(".chronic-track");
      if (!chronicTrack) return;

      const chronicTween = gsap.to(chronicTrack, {
        x: () => -(chronicTrack.scrollWidth - chronicTrack.parentElement.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".chronic-section",
          start: "top top",
          end: () => "+=" + (chronicTrack.scrollWidth - chronicTrack.parentElement.clientWidth),
          scrub: 1,
          pin: true
        }
      });

      // Staggered grid reveal
      gsap.from(".chronic-card", {
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        stagger: { each: 0.08, from: "random" },
        scrollTrigger: {
          trigger: ".chronic-track",
          containerAnimation: chronicTween,
          start: "left 85%"
        }
      });
    };

    // Mental section horizontal scroll (L→R, opposite direction)
    const initMentalAnimations = () => {
      const mentalInner = document.querySelector(".mental-inner");
      const mentalTrack = document.querySelector(".mental-track");
      if (!mentalInner || !mentalTrack) return;

      const mentalTween = gsap.to(mentalInner, {
        x: () => (mentalTrack.scrollWidth - mentalTrack.parentElement.clientWidth),
        ease: "none",
        scrollTrigger: {
          trigger: ".mental-section",
          start: "top top",
          end: () => "+=" + (mentalTrack.scrollWidth - mentalTrack.parentElement.clientWidth),
          scrub: 1,
          pin: true
        }
      });

      gsap.from(".mental-card", {
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        stagger: { each: 0.08, from: "random" },
        scrollTrigger: {
          trigger: ".mental-track",
          containerAnimation: mentalTween,
          start: "left 85%"
        }
      });
    };

    // Customer Stories stretch grid animations
    const initStoriesAnimations = () => {
      // Entrance animation
      gsap.from(".story-card", {
        opacity: 0,
        rotateY: 45,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".customer-stories",
          start: "top 80%"
        }
      });

      // Continuous subtle loop (optional - can be disabled for accessibility)
      gsap.to(".story-card", {
        rotateY: 8,
        rotateX: -6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: { each: 1.5, repeat: -1 }
      });
    };

    // Initialize all animations with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      initHeroAnimations();
      initChronicAnimations();
      initMentalAnimations();
      initStoriesAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Refresh ScrollTrigger on window resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}