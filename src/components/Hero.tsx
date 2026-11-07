import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MessageSquare,
  Sparkles,
  Volume2,
  Code2,
  Brain,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onOpenVoiceIntro: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVoiceIntro }) => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient Apple glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle subtle grid matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Story & Typography */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          {/* Availability / Status Indicator (Configurable) */}
          {personal.isAvailableForHire ? (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personal.availabilityStatus}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-800/80 border border-white/10 text-zinc-300 text-xs font-medium mb-6">
              <span className="h-2 w-2 rounded-full bg-zinc-500" />
              <span>Full-Stack Engineering & AI</span>
            </div>
          )}

          {/* Main Hero Headings */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            <span className="block text-zinc-300 font-medium text-2xl sm:text-3xl lg:text-4xl mb-2">
              {personal.heroGreeting}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
              Full Stack Developer
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              & AI Engineer.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-zinc-400 text-base sm:text-xl leading-relaxed max-w-2xl mb-8 font-normal">
            {personal.tagline}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-6 sm:px-7 py-3.5 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-[0_10px_25px_-5px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_30px_-5px_rgba(255,255,255,0.3)] active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 sm:px-7 py-3.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white font-medium text-sm border border-white/15 transition-all duration-200 backdrop-blur-md hover:border-white/30 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </button>

            {/* Voice-Over Intro Quick Launcher */}
            <button
              onClick={onOpenVoiceIntro}
              className="px-4 py-3.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 font-medium text-xs border border-blue-500/30 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md hover:scale-105 active:scale-95"
            >
              <Volume2 className="w-4 h-4 text-blue-400" />
              <span>Listen to Introduction</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-200 font-mono">30s</span>
            </button>
          </div>

          {/* Social Links & Verified Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/10 w-full">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">Connect</span>
            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-200 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-pink-400 hover:border-pink-500/40 transition-all duration-200 hover:scale-110"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 hover:scale-110"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${personal.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  personal.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 hover:scale-110"
                aria-label="WhatsApp Message"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 ml-auto font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Indonesia · Nusa Putra</span>
            </div>
          </div>
        </div>

        {/* Right Column: Uhail's Real Photograph & Apple Card Treatment */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-purple-600/30 rounded-3xl blur-2xl transform scale-95" />

            {/* Apple-style Portrait Frame */}
            <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-950">
                <img
                  src="/assets/uhail-profile.jpg"
                  alt="M.I. Uhail Ahamed - Full Stack Developer & AI Engineer"
                  className="w-full h-full object-cover object-top filter contrast-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating iOS Overlay Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5">
                        <span>{personal.name}</span>
                        <ShieldCheck className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-xs text-zinc-300">
                        Informatics Engineering · 3.92 GPA
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/15">
                      <Brain className="w-4 h-4 text-purple-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small decorative floating stat pill */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#12131a]/90 backdrop-blur-xl border border-white/20 shadow-xl text-white text-xs">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-medium">Full Stack & AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <button
          onClick={() => scrollToSection('#about')}
          className="p-2 rounded-full hover:bg-white/5 transition-colors text-zinc-400"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

