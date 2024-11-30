/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      // animation: {
      //   "orbit-slow": "orbit 20s linear infinite",
      // },
      // keyframes: {
      //   orbit: {
      //     "0%": { transform: "rotate(0deg)" },
      //     "100%": { transform: "rotate(360deg)" },
      //   },
      // },
    },
  },
  plugins: [],
};
