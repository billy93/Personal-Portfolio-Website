import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Billy's Portfolio",
  description: "Front End Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <meta name="title" content="Billy's Portfolio" />
        <meta name="description" content="Front End Developer Portfolio" />
        <meta name="keywords" content="frontend, fullstack, nextjs, software engineer, andreasbilly" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta property="og:url" content="https://andreasbilly.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Billy's Portfolio" />
        <meta property="og:description" content="Front End Developer Portfolio" />
        <meta property="og:image" content="https://andreasbilly.com/preview.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="andreasbilly.com" />
        <meta property="twitter:url" content="https://andreasbilly.com" />
        <meta name="twitter:title" content="Billy's Portfolio" />
        <meta name="twitter:description" content="Front End Developer Portfolio" />
        <meta name="twitter:image" content="https://andreasbilly.com/preview.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
