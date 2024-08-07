import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1B262C", // Dark mode primary color
          light: "#BBE1FA", // Light mode primary color
        },
        secondary: {
          dark: "#0F4C75", // Dark mode secondary color
          light: "#3282B8", // Light mode secondary color
        },
        accent: {
          dark: "#3282B8", // Dark mode accent color
          light: "#0F4C75", // Light mode accent color
        },
        background: {
          dark: "#1B262C", // Dark mode background color
          light: "#FFFFFF", // Light mode background color
        },
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
