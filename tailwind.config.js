/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        desaturatedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayishRed: "hsl(0, 6%, 24%)",
      },
      fontFamily: {
        josefin: "Josefin Sans",
      },
      backgroundImage: {
        mobile: "url('/images/hero-mobile.jpg')",
        desktop: "url('/images/hero-desktop.jpg')",
        patternDesktop: "url('/images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
