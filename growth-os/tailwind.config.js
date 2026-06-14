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
          50:  '#e6fff5',
          100: '#b3ffe0',
          200: '#80ffcc',
          300: '#4dfab8',
          400: '#1af0a0',
          500: '#00B875',
          600: '#00A86B',
          700: '#008f5a',
          800: '#006f46',
          900: '#004f32',
        },
        navy: {
          DEFAULT: '#071827',
          light: '#0d2540',
          medium: '#0a1f33',
        },
        surface: '#F6F8FA',
        card: '#FFFFFF',
        amber: '#F59E0B',
        danger: '#EF4444',
        success: '#10B981',
        accent: '#0EA5E9',
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card-md': '0 4px 12px 0 rgba(0,0,0,0.08)',
        'card-lg': '0 8px 24px 0 rgba(0,0,0,0.10)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
}
