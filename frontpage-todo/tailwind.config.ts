import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#344C64",
        secondary: "#57A6A1",
      },
      backgroundColor: {
        primary: "#344C64",
        secondary: "#57A6A1",
      },
      borderColor: {
        primary: "#344C64",
        secondary: "#57A6A1",
      },
      outlineColor: {
        primary: "#344C64",
        secondary: "#57A6A1",
      },
    },
  },
  plugins: [],
};
export default config;
