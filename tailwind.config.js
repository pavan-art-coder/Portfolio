export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // <--- THIS LINE IS CRITICAL
  ],
  theme: {
    extend: {
      colors: {
        dark: "#030712",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}