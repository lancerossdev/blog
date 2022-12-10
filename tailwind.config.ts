/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "p, li, h1": {
              code: {
                backgroundColor: "#1d202b",
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "300",
                color: "white",
                transitionProperty: "color, background-color",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "150ms",
              },
            },
            "html:not(.dark) p, li, h1": {
              code: {
                backgroundColor: "#e4e4e7",
                padding: "0.250rem 0.4rem",
                borderRadius: "0.250rem",
                fontWeight: "300",
                color: "black",
                transitionProperty: "color, background-color",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDuration: "150ms",
              },
            },
            "h1, h2, h3, h4": {
              fontWeight: "300",
            },
          },
        },
      },
      fontFamily: {
        inter: "Inter, Arial, sans-serif",
      },
      gridTemplateColumns: {
        1: "repeat(auto-fit, minmax(24ch, 1fr));",
      },
      colors: {
        nord: {
          900: "#8FBCBB",
          800: "#88C0D0",
          700: "#81A1C1",
          600: "#5E81AC",
          500: "#BF616A",
          400: "#D08770",
          300: "#EBCB8B",
          200: "#A3BE8C",
          100: "#B48EAD",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
