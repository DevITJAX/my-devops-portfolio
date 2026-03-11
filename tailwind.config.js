/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdfff0',
          100: '#f8ffe0',
          200: '#f0ffa6',
          300: '#e2ff66',
          400: '#c8ff00',
          500: '#a8d600',
          600: '#85aa00',
          700: '#637f00',
          800: '#4a5f00',
          900: '#333f00',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fdcaca',
          300: '#fba0a0',
          400: '#f56565',
          500: '#e63946',
          600: '#c41e30',
          700: '#a11826',
          800: '#841a22',
          900: '#6e1a22',
        },
        dark: {
          50: '#f5f3ef',
          100: '#e8e4dd',
          200: '#d1cbc0',
          300: '#b8b2a6',
          400: '#9a9285',
          500: '#7d7568',
          600: '#5e574e',
          700: '#3d3832',
          800: '#1e1c19',
          900: '#0d0d0d',
        }
      },
      fontFamily: {
        'serif': ['Instrument Serif', 'Georgia', 'serif'],
        'sans': ['Sora', 'system-ui', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.7s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'role-rotate': 'roleRotate 12s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'blink': 'blink 1s step-end infinite',
        'border-reveal': 'borderReveal 0.4s ease-out forwards',
        'dot-pulse': 'dotPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        roleRotate: {
          '0%, 12%': { transform: 'translateY(0%)', opacity: '1' },
          '16%, 28%': { transform: 'translateY(-100%)', opacity: '1' },
          '32%, 44%': { transform: 'translateY(-200%)', opacity: '1' },
          '48%, 60%': { transform: 'translateY(-300%)', opacity: '1' },
          '64%, 76%': { transform: 'translateY(-400%)', opacity: '1' },
          '80%, 92%': { transform: 'translateY(-500%)', opacity: '1' },
          '96%, 100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        borderReveal: {
          '0%': { clipPath: 'inset(100% 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
