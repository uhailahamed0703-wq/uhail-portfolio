import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStackMarquee } from './components/TechStackMarquee';
import { TechnicalSkills } from './components/TechnicalSkills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { VoiceIntroduction } from './components/VoiceIntroduction';
import { LoadingScreen } from './components/LoadingScreen';
import { DynamicIsland } from './components/DynamicIsland';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVoiceIntroOpen, setIsVoiceIntroOpen] = useState(false);
  const [voiceAutoStart, setVoiceAutoStart] = useState(false);

  const handleOpenVoiceIntro = (autoPlay = true) => {
    setVoiceAutoStart(autoPlay);
    setIsVoiceIntroOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030304] text-[#f4f4f5] selection:bg-blue-600/30 selection:text-white relative">
      {/* Custom Initial Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* iOS Dynamic Island Status Bar */}
      <DynamicIsland
        onOpenVoiceIntro={() => handleOpenVoiceIntro(true)}
        isVoiceActive={isVoiceIntroOpen}
      />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenVoiceIntro={() => handleOpenVoiceIntro(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero onOpenVoiceIntro={() => handleOpenVoiceIntro(true)} />

        {/* 2. About Me */}
        <About />

        {/* 3. Infinite Animated Technology Marquee */}
        <TechStackMarquee />

        {/* 4. Categorized Technical Skills */}
        <TechnicalSkills />

        {/* 5. Featured Projects Showcase */}
        <FeaturedProjects />

        {/* 6. Experience & Leadership Timeline */}
        <Experience />

        {/* 7. Education & Certifications */}
        <Education />

        {/* 8. Professional Interests */}
        <Interests />

        {/* 9. Contact & Collaboration */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Voice-Over Introduction Experience Drawer / Player */}
      <VoiceIntroduction
        isOpen={isVoiceIntroOpen}
        onClose={() => setIsVoiceIntroOpen(false)}
        autoStart={voiceAutoStart}
      />
    </div>
  );
};

export default App;

