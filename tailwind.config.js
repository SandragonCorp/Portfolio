/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: "jersey",
      },
      colors: {
        primary: {
          DEFAULT: "#008170",
        },
        secondary: {
          DEFAULT: "#005B41",
        },
        tertiary: {
          DEFAULT: "#232D3F",
        },
        blackGround: {
          DEFAULT: "#0F0F0F",
        },
      }
    },
  },
  plugins: [],
};
