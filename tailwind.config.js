/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030304',
          900: '#070709',
          850: '#0c0d12',
          800: '#12131a',
          750: '#181922',
          700: '#20222e',
          600: '#2d3040',
        },
        charcoal: {
          DEFAULT: '#333333',
          dark: '#222222',
          card: '#1a1a1f',
        },
        accent: {
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#a855f7',
          cyan: '#06b6d4',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Inter"',
          '"Geist"',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          '"JetBrains Mono"',
          '"Fira Code"',
          'monospace',
        ],
      },
      animation: {
        'marquee-left': 'marqueeLeft 35s linear infinite',
        'marquee-right': 'marqueeRight 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.8 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'apple-glow': '0 0 50px -10px rgba(59, 130, 246, 0.25)',
        'apple-purple': '0 0 50px -10px rgba(168, 85, 247, 0.25)',
        'ios-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'ios-card-hover': '0 20px 40px -15px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.18)',
      },
    },
  },
  plugins: [],
}

