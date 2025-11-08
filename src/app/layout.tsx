import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WP Creators - Dynamic WordPress Solutions",
  description: "Crafting Digital Experiences That Captivate & Convert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.className} bg-background-light dark:bg-background-dark font-display text-[#0d121b] dark:text-gray-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
