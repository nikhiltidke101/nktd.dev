import { Inter, Newsreader } from "next/font/google";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
});

export const newsreader = Newsreader({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: 'swap',
  subsets: ["latin"],
  variable: "--font-news",
});
