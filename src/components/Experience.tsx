import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Award,
  Sparkles,
} from 'lucide-react';

export const Experience: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider uppercase mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          Track Record & Impact
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Experience & Leadership
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          Product engineering, student technology leadership, digital communication, and community volunteering.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central timeline line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-6 sm:gap-12`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#12131a] border-2 border-white/20 flex items-center justify-center shadow-lg z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                </div>

                {/* Content Card */}
                <div className="ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)]">
                  <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 relative overflow-hidden group">
                    {/* Top Row: Organization Logo & Period */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        {exp.logo ? (
                          <div className="w-12 h-12 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md shrink-0 border border-white/20">
                            <img
                              src={exp.logo}
                              alt={exp.organization}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                            <BookOpen className="w-6 h-6" />
                          </div>
                        )}
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                            {exp.organization}
                          </h3>
                          <div className="text-xs sm:text-sm font-medium text-blue-300">
                            {exp.role}
                          </div>
                        </div>
                      </div>

                      {exp.badge && (
                        <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 shrink-0">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    {/* Metadata pills */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mb-4 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights bullet points */}
                    <ul className="space-y-1.5 text-xs text-zinc-400 border-t border-white/5 pt-3">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

