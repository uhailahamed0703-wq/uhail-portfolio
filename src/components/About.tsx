import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Compass,
  GraduationCap,
  Sparkles,
  Target,
  Users,
  Terminal,
  Shield,
  Layers,
  Award,
} from 'lucide-react';

export const About: React.FC = () => {
  const { aboutMe, personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-4">
          <Compass className="w-3.5 h-3.5" />
          About My Journey
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          {aboutMe.heading}
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          Engineering scalable web systems, exploring intelligence, and delivering human-centered digital experiences.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Narrative & Mission */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden">
            <div className="space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              {aboutMe.paragraphs.map((p, idx) => (
                <p key={idx} className="relative">
                  {p}
                </p>
              ))}
            </div>

            {/* Quote badge */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono">Mission</div>
                  <div className="text-sm font-semibold text-white">Impact-Driven Software Engineering</div>
                </div>
              </div>
              <div className="text-xs font-mono text-zinc-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                {personal.bioQuotes}
              </div>
            </div>
          </div>

          {/* Core Engineering Tenets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-card rounded-2xl p-5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                <Terminal className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Full-Stack Rigor</h4>
              <p className="text-xs text-zinc-400 leading-normal">
                Type-safe, maintainable architectures spanning frontend to backends.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">AI-Native</h4>
              <p className="text-xs text-zinc-400 leading-normal">
                Augmenting digital tools with LLMs, smart assistance, and automation.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">Leadership</h4>
              <p className="text-xs text-zinc-400 leading-normal">
                VP AWS Builder Club and open-source collaboration.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Key Stats & University Crest */}
        <div className="lg:col-span-5 space-y-4">
          {/* University Feature Card with Crest */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white p-1.5 shrink-0 shadow-lg border border-white/20">
                <img
                  src="/assets/nusa-putra-logo.png"
                  alt="Universitas Nusa Putra"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-purple-400 font-mono">Academic Excellence</span>
                <h3 className="text-lg font-bold text-white mt-0.5">Universitas Nusa Putra</h3>
                <p className="text-xs text-zinc-400">Bachelor's Degree in Informatics Engineering</p>
              </div>
            </div>

            {/* GPA highlight */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-zinc-400 font-mono">Cumulative GPA</div>
                <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-300">
                  {personal.gpa}
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Distinction</span>
              </div>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {aboutMe.highlights.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-white/10">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono block mb-1">
                  {item.label}
                </span>
                <div className="text-base sm:text-lg font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-zinc-400">
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

