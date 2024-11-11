import type { Metadata } from "next";
import { cx } from "@/utils/misc";

import { inter, newsreader } from "@/utils/fonts";
import { ThemeProvider } from "@/providers/theme-provider";

import "../../globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://nkdt.dev"),
  title: {
    default: "Nikhil Tidke",
    template: "%s | Nikhil Tidke",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Nikhil Tidke",
    description: "Developer, writer, and creator.",
    url: "https://nkdt.dev",
    siteName: "Nikhil Tidke",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "https://nkdt.dev",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={cx("font-sans", newsreader.variable, inter.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <div className="blur" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
