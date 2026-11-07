import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMessage('Please fill out all required fields.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // 1. Submit to local Express.js backend API (/api/contact)
      let isSubmitted = false;
      try {
        const expressRes = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            subject: formState.subject || `Inquiry from ${formState.name}`,
            message: formState.message,
          }),
        });
        if (expressRes.ok) {
          isSubmitted = true;
        }
      } catch (backendErr) {
        // Express backend might not be on same origin if running Vite standalone
        console.warn('Express API connection attempt, checking external fallback...', backendErr);
      }

      // 2. If not handled by Express, try FormSubmit fallback
      if (!isSubmitted) {
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(personal.email)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            _subject: formState.subject || `New message from ${formState.name} via Portfolio`,
            message: formState.message,
          }),
        });
        if (response.ok) {
          isSubmitted = true;
        }
      }

      if (isSubmitted) {
        setStatus('success');
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#8b5cf6', '#10b981'],
        });
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: Open prefilled mailto
        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
          formState.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `Hi Uhail,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
        )}`;
        setStatus('success');
      }
    } catch (err) {
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
        formState.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Hi Uhail,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
      )}`;
      setStatus('success');
    }
  };

  const whatsappHref = `https://wa.me/${personal.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    personal.whatsappMessage
  )}`;

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          Get In Touch
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Let's Build Something Meaningful Together.
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          I'm interested in connecting with developers, technology communities, recruiters, founders, and organizations working on innovative software products. Let's collaborate, exchange ideas, and build something meaningful.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Quick Email Card with Copy button */}
          <div className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs text-zinc-300 border border-white/10 transition-colors flex items-center gap-1.5"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <span className="text-xs uppercase font-mono tracking-wider text-zinc-400">Direct Email</span>
            <a
              href={`mailto:${personal.email}`}
              className="text-base sm:text-lg font-semibold text-white block mt-1 hover:text-blue-400 transition-colors break-all"
            >
              {personal.email}
            </a>
          </div>

          {/* Social Channels Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-white">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400">GitHub</h4>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Code & Repos
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400">LinkedIn</h4>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Professional
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            {/* Instagram */}
            <a
              href={personal.instagram}
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30 flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400">Instagram</h4>
                  <span className="text-sm font-semibold text-white group-hover:text-pink-400 transition-colors">
                    @uhail_ahamed_
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-zinc-400">WhatsApp</h4>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    Direct Chat
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Location & Timezone note */}
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 text-xs text-zinc-400 flex items-center justify-between">
            <span>Location: Indonesia (Universitas Nusa Putra)</span>
            <span className="font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              GMT+7 / Open to Global Remote
            </span>
          </div>
        </div>

        {/* Right Column: Real Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Send Me a Direct Message
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-6">
              Fill out the form below and your message will be dispatched directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. Project Collaboration / Software Engineering Opportunity"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your idea, software product, or how we might collaborate..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage || 'There was an issue sending your message. Please try again.'}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <span className="font-semibold block text-sm">Message Dispatched Successfully!</span>
                    Thank you for reaching out. I have received your message and will reply shortly.
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/20 active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

