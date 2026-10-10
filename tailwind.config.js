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
        canvas: {
          bone: '#FBFBF9',
          surface: '#F4F4F0',
          elevated: '#ECECE7',
          border: 'rgba(0, 0, 0, 0.08)',
          'border-strong': 'rgba(0, 0, 0, 0.16)',
        },
        ink: {
          primary: '#0B0D12',
          secondary: '#363B47',
          muted: '#687082',
          faint: '#9BA3B4',
        },
        obsidian: {
          DEFAULT: '#090A0D',
          card: '#101217',
          elevated: '#171A21',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-strong': 'rgba(255, 255, 255, 0.16)',
        },
        cobalt: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        amber: {
          editorial: '#D97706',
          warm: '#F59E0B',
        },
        emerald: {
          live: '#10B981',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'tighter': '-0.025em',
        'widest-editorial': '0.18em',
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(0, 0, 0, 0.07), 0 0 0 1px rgba(0, 0, 0, 0.06)',
        'editorial-hover': '0 30px 60px -20px rgba(0, 0, 0, 0.14), 0 0 0 1px rgba(0, 0, 0, 0.12)',
        'dark-card': '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'dark-glow': '0 0 50px -10px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
