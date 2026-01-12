/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "linear-dark": "#0f0f0f",
        "linear-darker": "#0a0a0a",
        "linear-gray": "#1a1a1a",
        "linear-border": "#2a2a2a",
        "linear-text": "#f5f5f5",
        "linear-text-secondary": "#a3a3a3",
        "linear-accent": "#60a5fa",
        "linear-accent-hover": "#3b82f6",
      },
      borderRadius: {
        none: "0px",
        sm: "0px",
        DEFAULT: "0px",
        md: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
        "3xl": "0px",
        full: "0px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
  ],
};
