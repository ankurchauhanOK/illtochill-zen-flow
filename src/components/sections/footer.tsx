import { Instagram, Twitter, Mail, Video } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-divider py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">
              IllToChill
            </h3>
            <p className="font-body text-subtext leading-relaxed mb-6">
              Empowering quotes for mental and chronic journeys. Wear the voice that lifts.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="TikTok">
                <Video className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/chronic" className="font-body text-subtext hover:text-primary transition-colors">
                  Chronic Conditions
                </a>
              </li>
              <li>
                <a href="/mental" className="font-body text-subtext hover:text-primary transition-colors">
                  Mental Health
                </a>
              </li>
              <li>
                <a href="/apparel" className="font-body text-subtext hover:text-primary transition-colors">
                  Apparel
                </a>
              </li>
              <li>
                <a href="/accessories" className="font-body text-subtext hover:text-primary transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="/stickers" className="font-body text-subtext hover:text-primary transition-colors">
                  Stickers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="font-body text-subtext hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/shipping" className="font-body text-subtext hover:text-primary transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className="font-body text-subtext hover:text-primary transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/sizing" className="font-body text-subtext hover:text-primary transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="/accessibility" className="font-body text-subtext hover:text-primary transition-colors">
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-foreground mb-4">
              Stay Connected
            </h4>
            <p className="font-body text-subtext mb-4">
              Get new designs, community stories, and exclusive discounts.
            </p>
            <div className="flex gap-2 mb-4">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-surface-elevated border-divider"
              />
              <Button variant="default" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-subtext">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-divider pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-subtext">
            © 2024 IllToChill. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="font-body text-sm text-subtext hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="font-body text-sm text-subtext hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}