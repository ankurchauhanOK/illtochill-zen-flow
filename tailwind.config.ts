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
				// Scroll-driven hero shrink animation
				'hero-shrink': {
					'0%': { 
						transform: 'scale(1)', 
						borderRadius: '0px',
						clipPath: 'inset(0px)'
					},
					'100%': { 
						transform: 'scale(0.9)', 
						borderRadius: '32px',
						clipPath: 'inset(48px)'
					}
				},
				// Fade and slide animations
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0px)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				// Masonry tile entry
				'tile-entry': {
					'0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translateY(0px) scale(1)' }
				},
				// Carousel card focus
				'card-focus': {
					'0%': { transform: 'scale(0.98)', filter: 'saturate(0.8)' },
					'100%': { transform: 'scale(1.05)', filter: 'saturate(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'hero-shrink': 'hero-shrink linear',
				'fade-in-up': 'fade-in-up 0.6s var(--ease-smooth)',
				'fade-in': 'fade-in 0.4s var(--ease-smooth)',
				'tile-entry': 'tile-entry 0.5s var(--ease-smooth)',
				'card-focus': 'card-focus 0.3s var(--ease-smooth)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--ease-smooth)',
				'bounce': 'var(--ease-bounce)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
