/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        aliceblue: "#f3f9fc",
        gray: {
          "100": "#f9fdff",
          "200": "#898989",
          "300": "#040c18",
        },
        deepskyblue: {
          "100": "#72bbff",
          "200": "#1ea0e9",
        },
        gainsboro: "#d9d8d8",
        "colour-codes-text-placeholder-default": "#666",
        steelblue: "#0d4270",
        cornflowerblue: "#0e94df",
        whitesmoke: "#f4f4f4",
        darkslategray: "#373b40",
        dodgerblue: "#1f8cf0",
      },
      fontFamily: {
        manrope: "Manrope",
        "heading-16px-heading-medium-16": "'SF Pro Text'",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      "21xl": "40px",
      "5xl": "24px",
      xl: "20px",
      "45xl": "64px",
      xs: "12px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
