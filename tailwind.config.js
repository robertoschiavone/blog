module.exports = {
  content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        "background": "#1e2326",
        "foreground": "#d3c6aa",
        "red": "#e67e80",
        "orange": "#e69875",
        "yellow": "#dbbc7f",
        "green": "#a7c080",
        "blue": "#7fbbb3",
        "aqua": "#83c092",
        "purple": "#d699b6"
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "2xl": "1.375rem",
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.0rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
}
