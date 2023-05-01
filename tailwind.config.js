/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        "background": "#0c1014",
        "foreground": "#d3ebe9",
        "red": "#c23127",
        "orange": "#d26937",
        "yellow": "#edb443",
        "magenta": "#888ca6",
        "violet": "#4e5166",
        "blue": "#195466",
        "cyan": "#33859E",
        "green": "#2aa889"
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
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
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
