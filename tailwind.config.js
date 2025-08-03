/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      colors: {
        primary: "#4C2F1F",   // Ungu tua
        darkBlue: "#050C38",  // Biru tua
        coral: "#FF5A57",     // Coral / merah soft
        magenta: "#E02F75",   // Magenta / pink keunguan
    },
    keyframes: {
          wave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50%)' },
    animation: {
        wave: 'wave 10s ease-in-out infinite',
      },
          },
  },
  },
},
  },
  plugins: [require("daisyui")],
}
