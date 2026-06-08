export const getTheme = (darkMode) => ({
  text: {
    main: darkMode ? "text-white/90" : "text-black/80",
    muted: darkMode ? "text-white/90" : "text-black/70",
    strong: darkMode ? "text-white" : "text-black",
    gradientText: darkMode
  ? "bg-gradient-to-r from-orange-300 to-red-500/60 bg-clip-text text-transparent"
  : "bg-gradient-to-r from-blue-400 to-purple-600/40 bg-clip-text text-transparent",
  },
  hero: {
    cardBg: darkMode ? "bg-white" : "bg-white",
    shadow: darkMode ? "shadow-xl" : "shadow-md",
    textMain: darkMode ? "text-white" : "text-black/70",
    textMuted: darkMode ? "text-white/80" : "text-black/70",
    gradientText: darkMode
  ? "bg-gradient-to-r from-amber-300 to-orange-400/90 bg-clip-text text-transparent"
  : "bg-gradient-to-r from-blue-400 to-indigo-600/70 bg-clip-text text-transparent",
  },
  card: {
    bg: darkMode ? "bg-white/5" : "bg-black/5",
    hoverBg: darkMode ? "hover:bg-white/10" : "hover:bg-black/10",
    border: darkMode ? "border-white/10" : "border-black/10",
    shadow: darkMode ? "shadow-xl" : "shadow-md",
  },
  glow: darkMode
    ? {
        border: "border-orange-300/40 ",
        shadow: "shadow-orange-300/20",
        bar: "bg-orange-300/50",
        dot: "bg-orange-300",
        text: "text-orange-300",
      }
    : {
        border: "border-blue-400/40",
        shadow: "shadow-blue-400/20",
        bar: "bg-blue-400/50",
        dot: "bg-blue-400",
        text: "text-blue-500",
        },
  ui: {
    bg: darkMode ? "bg-white/5" : "bg-black/5",
    border: darkMode ? "border-white/10" : "border-black/10",
    dot: darkMode ? "bg-white" : "bg-black",
  },

  link: {
    hover: darkMode ? "hover:text-white" : "hover:text-black",
  },
});
