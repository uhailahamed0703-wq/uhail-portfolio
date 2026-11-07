import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import {
  ExternalLink,
  Github,
  FolderGit2,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  GitPullRequest,
  Code2,
  Activity,
  Terminal,
  BookOpen,
  Wheat,
  HeartPulse,
} from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'openlearn':
        return <Sparkles className="w-5 h-5 text-teal-400" />;
      case 'ayipm':
        return <FolderGit2 className="w-5 h-5 text-indigo-400" />;
      case 'basic-programming-project':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'farmlink':
        return <Wheat className="w-5 h-5 text-emerald-400" />;
      case 'hospital-emergency-management':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
          <Layers className="w-3.5 h-3.5" />
          Selected Software Engineering
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Featured Engineering Projects
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          AI platforms, open-source collaborative systems, interactive learning sandboxes, and foundational algorithms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {/* Project 01: OpenLearn - Flagship Spotlight Card */}
        {projects[0] && (
          <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-zinc-900/90 via-[#0d131a] to-zinc-950 border border-teal-500/30 shadow-[0_20px_50px_-10px_rgba(20,184,166,0.15)] overflow-hidden group">
            {/* Ambient teal glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/15 transition-all" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-medium font-mono flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {projects[0].highlightBadge}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {projects[0].organization} · {projects[0].category}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                    {projects[0].name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-teal-400/90 mt-1">
                    Role: {projects[0].role}
                  </p>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {projects[0].description}
                </p>

                {/* My Contributions Highlights */}
                {projects[0].contributions && (
                  <div className="pt-2">
                    <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono mb-2">
                      Key Engineering Contributions:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                      {projects[0].contributions.slice(0, 4).map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {projects[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono"
                    >
                      <TechIcon name={tech} size={14} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  {projects[0].liveUrl && (
                    <a
                      href={projects[0].liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-teal-500 text-zinc-950 font-semibold text-xs hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20 active:scale-95 flex items-center gap-2"
                    >
                      <span>Live Platform Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {projects[0].githubUrl && (
                    <a
                      href={projects[0].githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full bg-zinc-900 border border-white/15 text-white font-medium text-xs hover:bg-zinc-800 transition-all flex items-center gap-2"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View GitHub Repo</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(projects[0])}
                    className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-medium border border-white/10 transition-colors"
                  >
                    View All Contributions
                  </button>
                </div>
              </div>

              {/* Right Visual: OpenLearn Official Logo Presentation */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm rounded-3xl p-6 bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 rounded-3xl bg-white p-4 shadow-xl mb-4 flex items-center justify-center border border-white/30">
                    <img
                      src="/assets/openlearn-logo.png"
                      alt="OpenLearn"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs uppercase font-mono tracking-widest text-teal-400">AYITRIX Initiative</span>
                  <h4 className="text-lg font-bold text-white mt-1">OpenLearn AI Platform</h4>
                  <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                    Real-time AI tutoring, programming exercises, and spoken language immersion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(1).map((proj) => (
            <div
              key={proj.id}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden group"
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                      {getProjectIcon(proj.id)}
                    </div>
                    <span className="text-xs font-mono text-zinc-400">
                      {proj.category}
                    </span>
                  </div>
                  {proj.highlightBadge && (
                    <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/25">
                      {proj.highlightBadge}
                    </span>
                  )}
                </div>

                {/* Title & Role */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {proj.name}
                </h3>
                {proj.role && (
                  <p className="text-xs text-zinc-400 mt-0.5 mb-3">
                    Role: <span className="text-zinc-300 font-medium">{proj.role}</span>
                  </p>
                )}

                {/* Description */}
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Key Features or Implementations */}
                {proj.implementations && (
                  <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/5">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                      Core DSA Implementations:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {proj.implementations.map((impl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                          <span>{impl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {proj.features && (
                  <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/5">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                      Feature Architecture:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {proj.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {proj.contributions && (
                  <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/5">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                      Engineering Contributions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {proj.contributions.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <GitPullRequest className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Card Footer: Tech Tags & Buttons */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300"
                    >
                      <TechIcon name={t} size={12} />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-1.5"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-full bg-zinc-900 border border-white/15 text-white font-medium text-xs hover:bg-zinc-800 transition-all flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="ml-auto text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-[#101117] border border-white/15 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-mono text-blue-400">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold mt-1 text-white">{selectedProject.name}</h3>
                {selectedProject.role && (
                  <p className="text-xs text-zinc-400">Role: {selectedProject.role}</p>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              {selectedProject.longDescription || selectedProject.description}
            </p>

            {selectedProject.contributions && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  All Contributions & Responsibilities:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {selectedProject.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedProject.features && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Key Features & Capabilities:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {selectedProject.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedProject.implementations && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Data Structures & Algorithmic Design:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {selectedProject.implementations.map((impl, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{impl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Verified Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    <TechIcon name={t} size={14} />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all flex items-center gap-1.5"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-zinc-900 border border-white/15 text-white font-medium text-xs hover:bg-zinc-800 transition-all flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

