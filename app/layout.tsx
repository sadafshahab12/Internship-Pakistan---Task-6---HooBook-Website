import type { Metadata } from "next";
import {  Livvic } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { HotelContextProvider } from "./context/contextapi";

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
        <HotelContextProvider>
          <Header />
          {children}
        </HotelContextProvider>
      </body>
    </html>
  );
}
