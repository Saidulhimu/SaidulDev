/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070A12',
          900: '#0B0F17',
          850: '#0F172A',
          800: '#131B2E',
          700: '#1E293B',
          600: '#273449',
          500: '#334155',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF8F5',
          200: '#F3EFE8',
          300: '#E8E2D8',
          400: '#D6CFC2',
        },
        accent: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        cyan: {
          glow: '#06B6D4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(16,185,129,0.18), 0 8px 40px -12px rgba(16,185,129,0.35)',
        'glow-cyan': '0 0 0 1px rgba(6,182,212,0.18), 0 8px 40px -12px rgba(6,182,212,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 40px -16px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        'gradient-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'drift-1': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) scale(1.1)' },
        },
        'drift-2': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-50px, 40px) scale(1.15)' },
        },
        'drift-3': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, 50px) scale(0.9)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
        marquee: 'marquee 32s linear infinite',
        'drift-1': 'drift-1 18s ease-in-out infinite',
        'drift-2': 'drift-2 22s ease-in-out infinite',
        'drift-3': 'drift-3 26s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
