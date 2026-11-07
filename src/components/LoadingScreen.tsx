import React, { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(onComplete, 600);
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030304] transition-opacity duration-600 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Ambient glow behind initials */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

        {/* Monogram Box */}
        <div className="relative w-20 h-20 rounded-3xl bg-zinc-900 border border-white/20 flex items-center justify-center shadow-2xl mb-6">
          <span className="font-extrabold text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-white via-blue-200 to-purple-400 font-mono">
            {personal.initials}
          </span>
        </div>

        {/* Name and subtitle */}
        <h2 className="text-white font-semibold text-lg tracking-tight">
          {personal.name}
        </h2>
        <p className="text-xs font-mono text-zinc-500 mt-1">
          Full Stack & AI Engineer
        </p>

        {/* Minimal loading progress line */}
        <div className="w-36 h-0.5 bg-white/10 rounded-full overflow-hidden mt-6">
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-[marqueeLeft_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

