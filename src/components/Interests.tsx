import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Code2,
  Brain,
  Sparkles,
  Cloud,
  Cpu,
  GitBranch,
  Boxes,
  HeartHandshake,
} from 'lucide-react';

export const Interests: React.FC = () => {
  const { interests } = PORTFOLIO_DATA;

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-amber-400" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-4">
          <HeartHandshake className="w-3.5 h-3.5" />
          Intellectual Curiosity
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Professional Interests & Horizons
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          The technology domains, systems philosophies, and engineering challenges that drive my exploration.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((item, idx) => (
          <div
            key={item.title}
            className={`glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 relative overflow-hidden group ${
              idx === 0 ? 'lg:col-span-2' : ''
            }`}
          >
            {/* Ambient hover glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />

            <div className="relative">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getInterestIcon(item.icon)}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

