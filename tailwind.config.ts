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
        "reg-110": [
          "110px",
          {
            letterSpacing: "-0.03em",
            lineHeight: "100%",
          },
        ],
        "reg-90": [
          "90px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "100%",
          },
        ],
        "reg-75": [
          "75px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "100%",
          },
        ],
        "reg-70": [
          "70px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "100%",
          },
        ],
        "reg-60": [
          "60px",
          {
            letterSpacing: "-0.015em",
            lineHeight: "110%",
          },
        ],
        "reg-50": [
          "50px",
          {
            letterSpacing: "-0.01em",
            lineHeight: "110%",
          },
        ],
        "reg-40": [
          "40px",
          {
            letterSpacing: "-0.01em",
            lineHeight: "110%",
          },
        ],
        "reg-35": [
          "35px",
          {
            letterSpacing: "-0.01em",
            lineHeight: "110%",
          },
        ],
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
        "reg-17": [
          "17px",
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
        "mono-13": [
          "13px",
          {
            letterSpacing: "0em",
            lineHeight: "122%",
          },
        ],
        "mono-10": [
          "10px",
          {
            letterSpacing: "0.01em",
            lineHeight: "122%",
          },
        ],
        "mono-10-caps": [
          "10px",
          {
            letterSpacing: "0.15em",
            lineHeight: "122%",
          },
        ],
        "mono-8-caps": [
          "8px",
          {
            letterSpacing: "0.15em",
            lineHeight: "122%",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
