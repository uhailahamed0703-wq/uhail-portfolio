import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

export const Education: React.FC = () => {
  const { education, certifications } = PORTFOLIO_DATA;

  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-4">
          <GraduationCap className="w-3.5 h-3.5" />
          Academic & Credentials
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Education & Certifications
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          Formal engineering foundations, high academic standing, and industry-standard credentialing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Education (Universitas Nusa Putra) */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span>Higher Education</span>
          </h3>

          {education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white p-2 shrink-0 shadow-lg border border-white/20 flex items-center justify-center">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400">
                    Universitas Nusa Putra
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                    {edu.degree}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-2 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* GPA Highlight Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/15 via-blue-500/10 to-transparent border border-purple-500/20 flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-400 font-mono">Cumulative Grade Point Average</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-purple-300">
                    {edu.gpa}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Top Tier</span>
                  </span>
                  <p className="text-[11px] text-zinc-400 mt-1 font-mono">{edu.honors}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Professional Certifications</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 relative overflow-hidden group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md border"
                    style={{
                      backgroundColor: `${cert.badgeColor}18`,
                      borderColor: `${cert.badgeColor}40`,
                    }}
                  >
                    {cert.iconType === 'redhat' ? (
                      <div className="w-7 h-7 flex items-center justify-center font-bold text-red-500 text-sm font-mono">
                        RH
                      </div>
                    ) : (
                      <div className="w-7 h-7 flex items-center justify-center font-bold text-blue-400 text-sm font-mono">
                        UoM
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="text-[11px] font-mono uppercase tracking-wider font-semibold"
                        style={{ color: cert.badgeColor }}
                      >
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/10">
                        Verified
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-zinc-300 text-xs sm:text-sm mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

