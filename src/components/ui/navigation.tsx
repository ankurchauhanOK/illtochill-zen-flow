import { useState, useEffect } from 'react';
import { Search, User, ShoppingCart, ChevronDown, Menu, X, Zap, ZapOff } from 'lucide-react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('motion-enabled');
    if (stored !== null) {
      const enabled = stored === 'true';
      setMotionEnabled(enabled);
      document.documentElement.classList.toggle('motion-reduce', !enabled);
    }
  }, []);

  const toggleMotion = () => {
    const newValue = !motionEnabled;
    setMotionEnabled(newValue);
    localStorage.setItem('motion-enabled', newValue.toString());
    document.documentElement.classList.toggle('motion-reduce', !newValue);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav className="sticky top-0 z-50 w-full border-b border-divider/20 bg-surface/80 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Left Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">
                Home
              </a>
              <a href="/shop" className="text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">
                Shop
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">
                About
              </a>
            </div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center md:flex-initial">
              <a href="/" className="font-heading font-bold text-2xl text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">
                IllToChill
              </a>
            </div>

            {/* Right Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Motion Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMotion}
                aria-label={`Turn motion ${motionEnabled ? 'off' : 'on'}`}
                title={`Motion: ${motionEnabled ? 'On' : 'Off'}`}
              >
                {motionEnabled ? <Zap className="h-5 w-5" /> : <ZapOff className="h-5 w-5" />}
              </Button>

              {/* Choose by Condition Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground">
                    Choose by Condition
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-surface border-divider">
                  <DropdownMenuItem>
                    <a href="/chronic" className="w-full">Chronic Conditions</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/mental" className="w-full">Mental Health</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Search */}
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>

              {/* Account */}
              <Button variant="ghost" size="icon" aria-label="Account">
                <User className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="icon" aria-label="Shopping Cart">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-divider/20">
              <div className="space-y-4">
                <a href="/" className="block text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">Home</a>
                <a href="/shop" className="block text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">Shop</a>
                <a href="/about" className="block text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">About</a>
                <a href="/chronic" className="block text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">Chronic Conditions</a>
                <a href="/mental" className="block text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 rounded">Mental Health</a>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="icon" aria-label="Search">
                      <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Account">
                      <User className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Shopping Cart">
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMotion}
                    aria-label={`Turn motion ${motionEnabled ? 'off' : 'on'}`}
                    title={`Motion: ${motionEnabled ? 'On' : 'Off'}`}
                  >
                    {motionEnabled ? <Zap className="h-5 w-5" /> : <ZapOff className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}