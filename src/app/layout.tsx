import type { Metadata } from "next";
import { cx } from "@/utils/misc";

import { inter, newsreader } from "@/utils/fonts";
import { ThemeProvider } from "@/providers/theme-provider";

import "./globals.css";
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
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MXLQNN5B');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXLQNN5B"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>

        <ThemeProvider defaultTheme="dark" attribute="class">
          <div className="blur" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
