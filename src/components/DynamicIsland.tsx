import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Sparkles,
  Volume2,
  Clock,
  MapPin,
  ChevronDown,
  Terminal,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Check,
} from 'lucide-react';

interface DynamicIslandProps {
  onOpenVoiceIntro: () => void;
  isVoiceActive?: boolean;
}

export const DynamicIsland: React.FC<DynamicIslandProps> = ({
  onOpenVoiceIntro,
  isVoiceActive = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const { personal } = PORTFOLIO_DATA;

  // Real-time Indonesian WIB (GMT+7) clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to GMT+7 (Asia/Jakarta)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <div
        className={`relative transition-all duration-300 ease-out select-none ${
          isExpanded
            ? 'w-[calc(100vw-2rem)] sm:w-[420px] rounded-3xl p-5 bg-[#0c0d12]/95 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-3xl'
            : 'h-10 px-4 rounded-full bg-black/90 border border-white/15 shadow-xl backdrop-blur-2xl flex items-center gap-3 cursor-pointer hover:border-white/30 hover:scale-102'
        }`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {/* COMPACT PILL STATE */}
        {!isExpanded ? (
          <div className="flex items-center justify-between w-full gap-3 text-xs text-white">
            {/* Left: Avatar + Live indicator */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] text-zinc-300">
                {currentTime} WIB
              </span>
            </div>

            {/* Center: Activity */}
            <div className="hidden sm:flex items-center gap-1.5 font-medium text-[11px] text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Full Stack & AI</span>
            </div>

            {/* Right: Audio or Expand action */}
            <div className="flex items-center gap-1.5 text-zinc-400">
              {isVoiceActive ? (
                <div className="flex items-center gap-0.5 h-3">
                  <span className="w-0.5 h-full bg-blue-400 animate-pulse" />
                  <span className="w-0.5 h-2 bg-purple-400 animate-pulse delay-75" />
                  <span className="w-0.5 h-3 bg-blue-400 animate-pulse delay-150" />
                </div>
              ) : (
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400">
                  Dynamic Island
                </span>
              )}
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        ) : (
          /* EXPANDED DYNAMIC ISLAND STATE */
          <div className="space-y-4 text-white">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/20">
                  <img
                    src="/assets/uhail-profile.jpg"
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-sm font-bold">
                    <span>{personal.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    <span>Indonesia · Universitas Nusa Putra</span>
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Real-time Status Card */}
            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="p-3 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col justify-between">
                <span className="text-[10px] text-zinc-400 uppercase">Local Time (WIB)</span>
                <span className="text-base font-bold text-white mt-1">{currentTime}</span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  GMT+7 Available
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col justify-between">
                <span className="text-[10px] text-zinc-400 uppercase">Academic Standing</span>
                <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mt-1">
                  {personal.gpa}
                </span>
                <span className="text-[10px] text-zinc-400 mt-1">Informatics Eng.</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                  onOpenVoiceIntro();
                }}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Play Voice Intro</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-white text-zinc-950 text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-zinc-200 transition-all active:scale-95 text-center"
              >
                <span>Contact Uhail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

