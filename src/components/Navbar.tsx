import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, Volume2, Sparkles, ExternalLink, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenVoiceIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVoiceIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Initials UA */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-3 select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/15 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-500/40">
              <span className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-blue-400 text-base font-mono">
                {personal.initials}
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-sm tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {personal.shortName}
              </div>
              <div className="text-[11px] text-zinc-400 font-mono tracking-tight">
                Full Stack & AI
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white rounded-full transition-all duration-200 hover:bg-white/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Voice Intro Pill & CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Voice Intro Pill Button */}
            <button
              onClick={onOpenVoiceIntro}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30 transition-all duration-200 hover:scale-105"
            >
              <Volume2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Voice Intro</span>
            </button>

            {/* Contact / Hire CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all duration-200 shadow-md hover:shadow-white/20 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenVoiceIntro}
              className="p-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30"
              aria-label="Listen to voice intro"
            >
              <Volume2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (iOS Sheet style) */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-6 py-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-200 hover:bg-white/10 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenVoiceIntro();
              }}
              className="w-full py-2.5 rounded-xl bg-blue-500/15 text-blue-300 font-medium text-sm border border-blue-500/30 flex items-center justify-center gap-2"
            >
              <Volume2 className="w-4 h-4" />
              <span>Listen to Voice Introduction</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm flex items-center justify-center gap-1.5 shadow-md text-center"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

