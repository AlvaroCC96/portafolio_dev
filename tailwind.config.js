/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        base: {
          DEFAULT: '#08090A',
          panel: '#0F1113',
          elevated: '#15181B',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.16)',
        },
        ink: {
          DEFAULT: '#F4F5F6',
          muted: '#A1A8AE',
          faint: '#6C7480',
        },
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#5B9AFF',
          dim: 'rgba(59, 130, 246, 0.12)',
          border: 'rgba(59, 130, 246, 0.35)',
        },
        status: {
          live: '#3ECF8E',
          wip: '#F5A623',
          archived: '#6C7480',
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.25), transparent)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.35), 0 8px 32px -8px rgba(59,130,246,0.35)',
        card: '0 4px 24px -8px rgba(0,0,0,0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
