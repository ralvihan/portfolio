/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#4C2F1F",
        darkBlue: "#050C38",
        coral: "#FF5A57",
        magenta: "#E02F75",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        wave: "wave 10s ease-in-out infinite",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};
