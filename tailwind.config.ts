import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/libs/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        news: ["var(--font-newsreader)"],
      },
      fontSize: {
        "reg-30": [
          "30px",
          {
            letterSpacing: "0em",
            lineHeight: "120%",
          },
        ],
        "reg-24": [
          "24px",
          {
            letterSpacing: "0em",
            lineHeight: "120%",
          },
        ],
        "reg-20": [
          "20px",
          {
            letterSpacing: "0em",
            lineHeight: "120%",
          },
        ],
        "reg-18": [
          "18px",
          {
            letterSpacing: "0em",
            lineHeight: "120%",
          },
        ],
        "reg-16": [
          "16px",
          {
            letterSpacing: "0em",
            lineHeight: "122%",
          },
        ],
        "reg-14": [
          "14px",
          {
            letterSpacing: "0.015em",
            lineHeight: "122%",
          },
        ],
        "reg-12": [
          "12px",
          {
            letterSpacing: "0.015em",
            lineHeight: "122%",
          },
        ],
        "reg-10": [
          "10px",
          {
            letterSpacing: "0.02em",
            lineHeight: "122%",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
