import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'MEMORY', href: '#memory' },
    { name: 'WISH', href: '#wish' },
    { name: 'GIFT', href: '#gift' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 backdrop-blur-md border-b-4 border-accent">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-secondary text-white p-2 rounded-lg text-center w-24 shadow-sm">
            <p className="font-display text-sm leading-none">HAPPY</p>
            <p className="font-display text-sm leading-none">BIRTHDAY</p>
            <img
              alt="Birthday cake icon"
              className="w-8 h-8 mx-auto mt-1"
              src={IMAGES.cakeIcon}
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white shadow-[0_4px_0_rgb(77,10,35)] active:shadow-none active:translate-y-1 transition-all hover:brightness-110"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent p-2 hover:bg-black/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light border-b-4 border-accent p-4 shadow-xl flex flex-col gap-3 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center rounded-lg bg-primary px-5 py-3 text-lg font-bold text-white shadow-md active:scale-95 transition-transform"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;