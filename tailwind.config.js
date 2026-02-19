/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#141414',
        'surface-elevated': '#1a1a1a',
        border: '#262626',
        'border-hover': '#333333',
        accent: '#3b82f6',
        'accent-hover': '#2563eb',
        'accent-glow': '#3b82f640',
        'text-primary': '#fafafa',
        'text-secondary': '#a1a1aa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
