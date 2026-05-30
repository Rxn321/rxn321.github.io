export const getTheme = (darkMode) => ({
  text: {
    main: darkMode ? "text-white/90" : "text-black/80",
    muted: darkMode ? "text-white/90" : "text-black/70",
    strong: darkMode ? "text-white" : "text-black",
  },
  hero: {
    cardBg: darkMode ? "bg-white" : "bg-white",
    shadow: darkMode ? "shadow-xl" : "shadow-md",
    textMain: darkMode ? "text-white" : "text-black/70",
    textMuted: darkMode ? "text-white/80" : "text-black/70",
  },
  card: {
    bg: darkMode ? "bg-white/5" : "bg-black/5",
    hoverBg: darkMode ? "hover:bg-white/10" : "hover:bg-black/10",
    border: darkMode ? "border-white/10" : "border-black/10",
    borderStrong: darkMode ? "border-white/20" : "border-black/10",
    shadow: darkMode ? "shadow-xl" : "shadow-md",
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