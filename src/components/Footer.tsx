import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Heart,
  Terminal,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050508] py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand details */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/15 flex items-center justify-center font-bold text-xs font-mono text-blue-400">
              {personal.initials}
            </div>
            <h3 className="font-bold text-lg tracking-tight text-white">
              {personal.name}
            </h3>
          </div>
          <p className="text-xs font-mono text-blue-400">
            {personal.title}
          </p>
          <p className="text-xs text-zinc-400 max-w-sm">
            Building intelligent digital experiences through software engineering and modern web technologies.
          </p>
        </div>

        {/* Social Navigation */}
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-blue-400 hover:border-blue-500/40 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personal.instagram}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-pink-400 hover:border-pink-500/40 transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 text-xs font-mono transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <div className="text-xs text-zinc-500 font-mono">
            © 2026 {personal.name}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

