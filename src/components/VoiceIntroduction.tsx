import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Play, Pause, RotateCcw, Volume2, VolumeX, X, Mic, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';

interface VoiceIntroProps {
  isOpen: boolean;
  onClose: () => void;
  autoStart?: boolean;
}

export const VoiceIntroduction: React.FC<VoiceIntroProps> = ({ isOpen, onClose, autoStart = false }) => {
  const { voiceIntroduction, personal } = PORTFOLIO_DATA;
  const sentences = voiceIntroduction.sentences;

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [hasStartedOnce, setHasStartedOnce] = useState<boolean>(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);
  const totalDuration = 28; // Estimated seconds for the full introduction

  // Check speech synthesis availability
  const hasSpeechSynthesis = typeof window !== 'undefined' && 'speechSynthesis' in window;

  const pickBestMaleVoice = (): SpeechSynthesisVoice | null => {
    if (!hasSpeechSynthesis) return null;
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    // Prefer high-quality English male voices
    const maleVoiceMatch = voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        (v.name.toLowerCase().includes('daniel') ||
          v.name.toLowerCase().includes('ryan') ||
          v.name.toLowerCase().includes('guy') ||
          v.name.toLowerCase().includes('oliver') ||
          v.name.toLowerCase().includes('george') ||
          v.name.toLowerCase().includes('male'))
    );

    if (maleVoiceMatch) return maleVoiceMatch;

    // Fallback: any en-US or en-GB voice
    const naturalEn = voices.find(
      (v) => (v.lang === 'en-US' || v.lang === 'en-GB') && !v.name.toLowerCase().includes('female')
    );
    if (naturalEn) return naturalEn;

    // Any en voice
    return voices.find((v) => v.lang.startsWith('en')) || voices[0];
  };

  const startPlayback = () => {
    if (isPlaying) return;
    setHasStartedOnce(true);

    if (hasSpeechSynthesis) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(voiceIntroduction.fullText);
      const voice = pickBestMaleVoice();
      if (voice) {
        utterance.voice = voice;
      }
      utterance.rate = 0.98;
      utterance.pitch = 0.95;
      utterance.volume = isMuted ? 0 : 1;

      utterance.onboundary = (event) => {
        if (event.name === 'sentence' || event.charIndex !== undefined) {
          const charIdx = event.charIndex;
          let cumulativeLength = 0;
          for (let i = 0; i < sentences.length; i++) {
            cumulativeLength += sentences[i].text.length + 1;
            if (charIdx < cumulativeLength) {
              setCurrentSentenceIndex(i);
              break;
            }
          }
        }
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(100);
        if (timerRef.current) clearInterval(timerRef.current);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }

    setIsPlaying(true);
    startTimeRef.current = Date.now() - (pausedTimeRef.current || 0);

    // Progress timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const pct = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(pct);

      // Estimate current sentence based on time if onboundary is not firing
      for (let i = sentences.length - 1; i >= 0; i--) {
        if (elapsed >= sentences[i].time) {
          setCurrentSentenceIndex(i);
          break;
        }
      }

      if (elapsed >= totalDuration) {
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 100);
  };

  const pausePlayback = () => {
    if (!isPlaying) return;
    if (hasSpeechSynthesis) {
      window.speechSynthesis.pause();
    }
    pausedTimeRef.current = Date.now() - startTimeRef.current;
    setIsPlaying(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resumePlayback = () => {
    if (isPlaying) return;
    if (progress >= 100) {
      replayPlayback();
      return;
    }
    if (hasSpeechSynthesis) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        startPlayback();
        return;
      }
    }
    setIsPlaying(true);
    startTimeRef.current = Date.now() - pausedTimeRef.current;

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const pct = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(pct);

      for (let i = sentences.length - 1; i >= 0; i--) {
        if (elapsed >= sentences[i].time) {
          setCurrentSentenceIndex(i);
          break;
        }
      }

      if (elapsed >= totalDuration) {
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    }, 100);
  };

  const replayPlayback = () => {
    if (hasSpeechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (timerRef.current) clearInterval(timerRef.current);
    pausedTimeRef.current = 0;
    setProgress(0);
    setCurrentSentenceIndex(0);
    startPlayback();
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    // If playing with speech synthesis, re-speaking with volume 0
    if (hasSpeechSynthesis && utteranceRef.current) {
      utteranceRef.current.volume = newMuted ? 0 : 1;
    }
  };

  const handleClose = () => {
    if (hasSpeechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (timerRef.current) clearInterval(timerRef.current);
    setIsPlaying(false);
    onClose();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hasSpeechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // When opened with autoStart (user triggered)
  useEffect(() => {
    if (isOpen && autoStart && !hasStartedOnce) {
      startPlayback();
    }
  }, [isOpen, autoStart]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 max-w-lg w-[calc(100vw-2rem)] sm:w-full transition-all duration-300">
      <div className="relative rounded-3xl p-5 bg-[#12131abf] backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.2)] text-white overflow-hidden">
        {/* Subtle accent glow behind */}
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500/40 shrink-0">
              <img
                src="/assets/uhail-profile.jpg"
                alt="Uhail Ahamed"
                className="w-full h-full object-cover object-top"
              />
              {isPlaying && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#12131a] rounded-full animate-ping" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm tracking-tight text-white">{personal.shortName}</span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-medium font-mono">
                  <Sparkles className="w-2.5 h-2.5" />
                  Voice Intro
                </span>
              </div>
              <p className="text-[11px] text-zinc-400">Personal audio introduction</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title={isExpanded ? "Collapse subtitles" : "Expand subtitles"}
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Close intro"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Subtitles (Apple lyrics style) */}
        {isExpanded && (
          <div className="relative my-4 px-1 max-h-36 overflow-y-auto space-y-2 select-none scrollbar-thin">
            {sentences.map((sentence, idx) => {
              const isCurrent = idx === currentSentenceIndex;
              const isPast = idx < currentSentenceIndex;
              return (
                <p
                  key={idx}
                  className={`text-xs sm:text-sm leading-relaxed transition-all duration-300 ${
                    isCurrent
                      ? 'text-white font-medium pl-2 border-l-2 border-blue-400 text-glow'
                      : isPast
                      ? 'text-zinc-500'
                      : 'text-zinc-600'
                  }`}
                >
                  {sentence.text}
                </p>
              );
            })}
          </div>
        )}

        {/* Waveform / Visualizer */}
        <div className="flex items-center justify-between gap-1 h-6 my-2 px-2">
          {[40, 75, 55, 90, 60, 30, 85, 45, 95, 65, 35, 80, 50, 70, 40, 85, 60, 30].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full transition-all duration-150 ${
                isPlaying ? 'bg-gradient-to-t from-blue-500 to-purple-400' : 'bg-zinc-700'
              }`}
              style={{
                height: isPlaying ? `${Math.max(15, (h * (progress % 10 + 5)) / 15)}%` : '20%',
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="relative w-full h-1.5 bg-white/10 rounded-full overflow-hidden my-3">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="relative flex items-center justify-between pt-1">
          <div className="flex items-center gap-2">
            {!isPlaying ? (
              <button
                onClick={progress > 0 && progress < 100 ? resumePlayback : startPlayback}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{progress > 0 && progress < 100 ? 'Resume' : 'Play Intro'}</span>
              </button>
            ) : (
              <button
                onClick={pausePlayback}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 text-white font-semibold text-xs hover:bg-white/25 transition-all border border-white/20 active:scale-95"
              >
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause</span>
              </button>
            )}

            <button
              onClick={replayPlayback}
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Replay from start"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-zinc-400">
            <span className="font-mono text-[11px]">
              {Math.round((progress / 100) * totalDuration)}s / {totalDuration}s
            </span>
            <button
              onClick={toggleMute}
              className={`p-2 rounded-full transition-colors ${
                isMuted ? 'text-red-400 bg-red-500/10' : 'text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

