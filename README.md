# M.I. Uhail Ahamed — Premium Personal Portfolio Website

An Apple-inspired, Linear & Vercel-influenced premium personal brand website for **M.I. Uhail Ahamed** — Full Stack Developer & AI Engineer.

Built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**, incorporating custom vector technology badges, an interactive dual-row infinite animated marquee, speech-synthesized voice introduction with synchronized subtitles, and authentic visual assets.

---

## 🌟 Highlights & Features

1. **Apple & iOS Aesthetic**:
   - Deep obsidian and dark charcoal tones (`#030304`, `#12131a`, `#333333`).
   - Frosted glassmorphism (`backdrop-blur-2xl`), subtle hairline borders (`border-white/10`), and soft ambient lighting.
   - Clean SF Pro / Geist / Inter typography with responsive hierarchy.

2. **Real Visual Assets**:
   - High-fidelity portrait of M.I. Uhail Ahamed in a bespoke Apple-style portrait card with ambient glow and verification badge.
   - Official Universitas Nusa Putra university crest (`/assets/nusa-putra-logo.png`).
   - Official AYITRIX & OpenLearn platform logo (`/assets/openlearn-logo.png`).
   - Official AWS Student Builder Club logo (`/assets/aws-club-logo.jpg`).
   - Official Apple Park LK brand logo (`/assets/apple-park-logo.png`).

3. **Infinite Animated Technology Marquee (Spec Compliant)**:
   - **Row 1 (Frontend & Web)**: HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Node.js, Express.js (moving continuously right-to-left).
   - **Row 2 (Backend & Tools)**: Python, Flask, Java, Spring Boot, PostgreSQL, MySQL, Supabase, Git, GitHub, Docker, Figma (moving continuously left-to-right).
   - Dark charcoal pill-shaped badges (`#333333`) with official vector brand icons in full color.
   - Seamless loop without stutter or resets, edge fade masks, and pause-on-hover.
   - Interactive mode switch between **Apple Light Studio** (`#F5F5F7` contrast stage) and **Obsidian Dark**.

4. **Synchronized Voice-Over Introduction (Special Feature)**:
   - Web Speech API synthesis with natural English male voice tuning.
   - Dynamic waveform bars, playback progress scrub bar, Play/Pause/Replay/Mute controls.
   - Apple Music lyrics-style synchronized subtitles that light up in real time as the introduction is spoken.
   - Zero forced audio autoplay (respects browser media policy), skippable and non-intrusive.

5. **Projects Showcase**:
   - **OpenLearn**: Flagship AI Education Platform by AYITRIX with live demo link, GitHub repo, role (Full Stack Developer & QA), and comprehensive contribution breakdown.
   - **AyiPM**: Open-source team workspace by AYITRIX with Git workflow & Prettier contributions.
   - **Basic Programming Project**: Interactive Python learning platform with live Netlify deployment (`https://uhail.netlify.app/`).
   - **FarmLink**: Agricultural direct-to-consumer marketplace platform.
   - **Hospital Emergency Management System**: Academic Java system with BST, Queue, Stack, and Linked List algorithmic implementations.
   - Interactive detail modal for exploring deep technical implementations.

6. **Experience & Leadership Timeline**:
   - AYITRIX (Founding Member | Software Development)
   - AWS Student Builder Club (Vice President)
   - Apple Park LK (Social Media Manager)
   - Mathematics Teaching Volunteer (Sri Lankan Government School, 2+ years)

7. **Education & Certifications**:
   - Universitas Nusa Putra: Bachelor's in Informatics Engineering (Cumulative GPA: 3.92 / 4.00, Summa Cum Laude Track).
   - Red Hat: Getting Started with Linux Fundamentals 9.1.
   - University of Moratuwa: Python for Beginners.

8. **Direct Contact & Real Submission**:
   - Functional contact form with live AJAX submission and fallback to prefilled email client.
   - Interactive celebration confetti on submission.
   - Verified channels: Email, GitHub, LinkedIn, Instagram, and configurable WhatsApp.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom SVG Brand Icons + Lucide React
- **Animations**: CSS Keyframes + Framer Motion
- **Interactions**: Canvas Confetti, Web Speech API

---

## 🚀 Getting Started

### Prerequisites
Node.js 18+ and npm installed.

### Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Production Build
```bash
npm run build
```
Generates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Configuration

All personal information, URLs, status flags, and the WhatsApp number are centralized in:
`src/data/portfolioData.ts`

```ts
export const PORTFOLIO_DATA = {
  personal: {
    name: "M.I. Uhail Ahamed",
    email: "uhailahamed0703@gmail.com",
    whatsappNumber: "+6282211993344", // Edit your international WhatsApp number here
    isAvailableForHire: true, // Toggle availability badge
    ...
  }
}
```

---

© 2026 M.I. Uhail Ahamed. All Rights Reserved.

