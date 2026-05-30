export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans", "sans-serif"],
        serif: ["Cactus Classical Serif", "serif"],
        mono: ["DM Mono", "monospace"],
      },
      animation: {
        drop: "drop 0.6s ease-out",
      },
      keyframes: {
        drop: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}