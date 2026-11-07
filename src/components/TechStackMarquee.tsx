import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { Sparkles, Layers, Sliders } from 'lucide-react';

interface TechItem {
  name: string;
  iconKey: string;
  brandColor: string;
}

const TechnologyBadge: React.FC<{ tech: TechItem; isDarkStage?: boolean }> = ({ tech, isDarkStage }) => {
  return (
    <div
      className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 select-none shrink-0 ${
        isDarkStage
          ? 'bg-[#18181b] border border-white/10 text-white shadow-lg hover:border-white/30 hover:bg-[#222227]'
          : 'bg-[#333333] text-white border border-[#444444] shadow-md hover:bg-[#262626] hover:shadow-xl'
      }`}
      style={{
        boxShadow: isDarkStage 
          ? '0 4px 20px -2px rgba(0, 0, 0, 0.5)' 
          : '0 4px 14px 0 rgba(0, 0, 0, 0.25)',
      }}
    >
      <div className="flex items-center justify-center w-5 h-5 shrink-0">
        <TechIcon name={tech.name} size={19} />
      </div>
      <span className="text-[14px] font-medium tracking-tight text-white whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
};

export const TechStackMarquee: React.FC = () => {
  const { row1, row2 } = PORTFOLIO_DATA.techStackMarquee;
  // Allows user to view the marquee either in the Apple Light Studio (as specified) or Obsidian iOS Dark mode
  const [stageMode, setStageMode] = useState<'light' | 'dark'>('light');

  // Quadruple rows to guarantee continuous, infinite seamless looping on ultra-wide screens
  const row1Extended = [...row1, ...row1, ...row1, ...row1];
  const row2Extended = [...row2, ...row2, ...row2, ...row2];

  const isDark = stageMode === 'dark';

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">
          <Layers className="w-3.5 h-3.5" />
          Technical Stack & Tools
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Core Technologies & Ecosystem
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          Mastering modern engineering tools across frontend, backend, databases, cloud, and artificial intelligence.
        </p>

        {/* Apple iOS Theme Mode Switcher */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="inline-flex p-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium backdrop-blur-md">
            <button
              onClick={() => setStageMode('light')}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                !isDark
                  ? 'bg-white text-zinc-950 font-semibold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Apple Light Studio</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-200 text-zinc-800 font-mono">Ref Spec</span>
            </button>
            <button
              onClick={() => setStageMode('dark')}
              className={`px-4 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                isDark
                  ? 'bg-zinc-800 text-white font-semibold shadow-md border border-white/15'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Obsidian Dark</span>
            </button>
          </div>
        </div>
      </div>

      {/* Showcase Container */}
      <div
        className={`relative rounded-3xl p-6 sm:p-10 transition-colors duration-500 overflow-hidden shadow-2xl border ${
          isDark
            ? 'bg-[#090a0f] border-white/10 shadow-[0_0_80px_-20px_rgba(59,130,246,0.15)]'
            : 'bg-[#F5F5F7] border-black/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]'
        }`}
      >
        {/* Subtle decorative grid/glow inside container */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div
            className={`w-full h-full ${
              isDark
                ? 'bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]'
                : 'bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px]'
            }`}
          />
        </div>

        {/* Row 1 Header Tag */}
        <div className="relative flex items-center justify-between mb-3 px-2">
          <span
            className={`text-xs font-semibold tracking-wider uppercase ${
              isDark ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            Row 1 · Frontend & Web Development
          </span>
          <span
            className={`text-xs font-mono hidden sm:inline-block ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            }`}
          >
            Continuous Right-to-Left
          </span>
        </div>

        {/* Row 1 Marquee (Right to Left) */}
        <div className="relative w-full overflow-hidden marquee-container group py-2">
          {/* Edge gradient mask fades */}
          <div
            className={`absolute top-0 bottom-0 left-0 w-16 sm:w-28 z-10 pointer-events-none transition-colors duration-500 ${
              isDark
                ? 'bg-gradient-to-r from-[#090a0f] to-transparent'
                : 'bg-gradient-to-r from-[#F5F5F7] to-transparent'
            }`}
          />
          <div
            className={`absolute top-0 bottom-0 right-0 w-16 sm:w-28 z-10 pointer-events-none transition-colors duration-500 ${
              isDark
                ? 'bg-gradient-to-l from-[#090a0f] to-transparent'
                : 'bg-gradient-to-l from-[#F5F5F7] to-transparent'
            }`}
          />

          <div className="flex gap-4 sm:gap-5 w-max marquee-track animate-marquee-left">
            {row1Extended.map((tech, idx) => (
              <TechnologyBadge key={`row1-${tech.name}-${idx}`} tech={tech} isDarkStage={isDark} />
            ))}
          </div>
        </div>

        {/* Spacer & Row 2 Header Tag */}
        <div className="relative flex items-center justify-between mt-8 mb-3 px-2">
          <span
            className={`text-xs font-semibold tracking-wider uppercase ${
              isDark ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            Row 2 · Backend, Programming & Tools
          </span>
          <span
            className={`text-xs font-mono hidden sm:inline-block ${
              isDark ? 'text-zinc-500' : 'text-zinc-400'
            }`}
          >
            Continuous Left-to-Right
          </span>
        </div>

        {/* Row 2 Marquee (Left to Right) */}
        <div className="relative w-full overflow-hidden marquee-container group py-2">
          {/* Edge gradient mask fades */}
          <div
            className={`absolute top-0 bottom-0 left-0 w-16 sm:w-28 z-10 pointer-events-none transition-colors duration-500 ${
              isDark
                ? 'bg-gradient-to-r from-[#090a0f] to-transparent'
                : 'bg-gradient-to-r from-[#F5F5F7] to-transparent'
            }`}
          />
          <div
            className={`absolute top-0 bottom-0 right-0 w-16 sm:w-28 z-10 pointer-events-none transition-colors duration-500 ${
              isDark
                ? 'bg-gradient-to-l from-[#090a0f] to-transparent'
                : 'bg-gradient-to-l from-[#F5F5F7] to-transparent'
            }`}
          />

          <div className="flex gap-4 sm:gap-5 w-max marquee-track animate-marquee-right">
            {row2Extended.map((tech, idx) => (
              <TechnologyBadge key={`row2-${tech.name}-${idx}`} tech={tech} isDarkStage={isDark} />
            ))}
          </div>
        </div>

        {/* Interaction Hint Footer */}
        <div className="mt-8 pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-zinc-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Hover over any badge to pause and inspect</span>
          </div>
          <div className="text-zinc-500 font-mono text-[11px]">
            <span>20 Verified Technologies · Infinite Seamless Loop</span>
          </div>
        </div>
      </div>
    </section>
  );
};

