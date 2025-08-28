import { useState } from 'react';
import { Search, User, ShoppingCart, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-divider/20 bg-surface/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/shop" className="text-foreground hover:text-primary transition-colors">
              Shop
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center md:flex-initial">
            <a href="/" className="font-heading font-bold text-2xl text-primary">
              IllToChill
            </a>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-4">
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
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-divider/20">
            <div className="space-y-4">
              <a href="/" className="block text-foreground hover:text-primary">Home</a>
              <a href="/shop" className="block text-foreground hover:text-primary">Shop</a>
              <a href="/about" className="block text-foreground hover:text-primary">About</a>
              <a href="/chronic" className="block text-foreground hover:text-primary">Chronic Conditions</a>
              <a href="/mental" className="block text-foreground hover:text-primary">Mental Health</a>
              <div className="flex space-x-4 pt-4">
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}