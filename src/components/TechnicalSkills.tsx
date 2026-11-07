import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import {
  Code,
  Server,
  Database,
  Sparkles,
  Wrench,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';

export const TechnicalSkills: React.FC = () => {
  const { skillsCategorized } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Code className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Category Pills Bar (iOS Segmented Control Style) */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 scrollbar-none mb-10">
        {skillsCategorized.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => setActiveTab(idx)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
              activeTab === idx
                ? 'bg-white text-zinc-950 shadow-lg scale-105'
                : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
            }`}
          >
            {getCategoryIcon(cat.icon)}
            <span>{cat.title}</span>
            <span
              className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeTab === idx ? 'bg-zinc-200 text-zinc-950' : 'bg-white/10 text-zinc-400'
              }`}
            >
              {cat.skills.length}
            </span>
          </button>
        ))}
      </div>

      {/* Selected Category Showcase */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {getCategoryIcon(skillsCategorized[activeTab].icon)}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {skillsCategorized[activeTab].title}
              </h3>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-2xl">
              {skillsCategorized[activeTab].description}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 self-start sm:self-auto bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Verified Technical Experience</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsCategorized[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-2xl bg-zinc-900/70 border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-between group hover:bg-zinc-850"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <TechIcon name={skill.name} size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    Verified Competency
                  </span>
                </div>
              </div>

              {skill.tag && (
                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  {skill.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

