import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RapidLanyard - 3-Day Custom Lanyards Delivery to EU & US",
  description: "Factory-direct custom lanyards with 3-day delivery to EU & US. Flexible MOQs starting from 50 pieces. Professional event lanyards, ID badges, and accessories.",
  keywords: "custom lanyards, bulk lanyards, conference lanyards, event lanyards, ID badges, fast delivery, Europe, US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
