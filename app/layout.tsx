import type { Metadata } from "next";
import { Geist, Geist_Mono, Livvic } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const livvic = Livvic({
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HooBook",
  description: "Hote Booking System Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${livvic.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
