/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#163d36',
          orange: '#f85001',
          teal: '#1ab8c8',
          flame: '#ffd700',
          ember: '#ff6b00',
        },
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        righteous: ['Righteous', 'cursive'],
        oswald: ['Oswald', 'sans-serif'],
        marker: ['"Permanent Marker"', 'cursive'],
      },
      keyframes: {
        flicker: {
          '0%,100%': { transform: 'scaleY(1) scaleX(1)' },
          '25%': { transform: 'scaleY(1.05) scaleX(0.97)' },
          '50%': { transform: 'scaleY(0.97) scaleX(1.02)' },
          '75%': { transform: 'scaleY(1.03) scaleX(0.99)' },
        },
        floatUp: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        slideInLeft: {
          from: { opacity: 0, transform: 'translateX(-60px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: 0, transform: 'translateX(60px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulse2: {
          '0%,100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
        spin360: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        loadBar: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        sweepFlame: {
          '0%': { transform: 'translateX(-110%) skewX(-10deg)', opacity: 0 },
          '20%': { opacity: 1 },
          '80%': { opacity: 1 },
          '100%': { transform: 'translateX(110%) skewX(-10deg)', opacity: 0 },
        },
        ringPulse: {
          '0%,100%': { boxShadow: '0 0 0 0px rgba(248,80,1,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(248,80,1,0)' },
        },
      },
      animation: {
        flicker: 'flicker 1.5s ease-in-out infinite',
        floatUp: 'floatUp 3s ease-in-out infinite',
        slideInLeft: 'slideInLeft 0.7s ease forwards',
        slideInRight: 'slideInRight 0.7s ease forwards',
        fadeInUp: 'fadeInUp 0.6s ease forwards',
        pulse2: 'pulse2 2s ease-in-out infinite',
        sweepFlame: 'sweepFlame 1.4s ease-in-out forwards',
        ringPulse: 'ringPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
