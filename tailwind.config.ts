import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'heading': ['Baloo 2', 'Quicksand', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'Ubuntu', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				surface: 'hsl(var(--surface))',
				'surface-elevated': 'hsl(var(--surface-elevated))',
				divider: 'hsl(var(--divider))',
				subtext: 'hsl(var(--subtext))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					start: 'hsl(var(--primary-start))',
					end: 'hsl(var(--primary-end))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-surface': 'var(--gradient-surface)',
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'strong': 'var(--shadow-strong)',
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				md: 'var(--radius)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// Accordion animations
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				// Hero shrink animation
				'hero-shrink': {
					'0%': { 
						transform: 'scale(1)', 
						borderRadius: '0px',
						clipPath: 'inset(0px)'
					},
					'100%': { 
						transform: 'scale(var(--hero-shrink-scale))', 
						borderRadius: '32px',
						clipPath: 'inset(40px)'
					}
				},
				// Section reveal animations
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-24px)' },
					'100%': { opacity: '1', transform: 'translateX(0px)' }
				},
				'slide-in-right': {
					'0%': { opacity: '0', transform: 'translateX(24px)' },
					'100%': { opacity: '1', transform: 'translateX(0px)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(16px)' },
					'100%': { opacity: '1', transform: 'translateY(0px)' }
				},
				// Grid cascade animation
				'tile-cascade': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(var(--tile-lift)) rotate(-1.5deg)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0px) rotate(0deg)' 
					}
				},
				// Clip reveal animation
				'clip-reveal': {
					'0%': { clipPath: 'inset(0 100% 0 0)' },
					'100%': { clipPath: 'inset(0 0 0 0)' }
				},
				// Carousel focus animation
				'carousel-focus': {
					'0%': { transform: 'scale(0.98)', filter: 'saturate(0.8)' },
					'100%': { transform: 'scale(1.05)', filter: 'saturate(1) brightness(1.1)' }
				},
				// Info rail spring
				'rail-spring': {
					'0%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(1.05)' },
					'100%': { transform: 'scaleY(1.02)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'hero-shrink': 'hero-shrink linear',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'tile-cascade': 'tile-cascade 0.7s ease-out',
				'clip-reveal': 'clip-reveal 0.8s ease-out',
				'carousel-focus': 'carousel-focus 0.3s ease-out',
				'rail-spring': 'rail-spring 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--ease-smooth)',
				'bounce': 'var(--ease-bounce)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;