module.exports = {
  purge: ["./src/**/*.js"],
  content: ["./src/components/**/*.js", "./src/components/**/*.scss", "./src/pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        "background": "#1d2021",
        "foreground": "#fbf1c7",
        "red": "#cc241d",
        "green": "#98971a",
        "yellow": "#d79921",
        "blue": "#458588",
        "purple": "#b16286",
        "aqua": "#689d6a",
        "gray": "#a89984"
      },
      borderWidth: {
        "1": "1px"
      }
    },
  },
  plugins: [],
}
