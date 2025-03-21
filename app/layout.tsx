import type { Metadata } from "next";
import { Livvic } from "next/font/google";
import "./globals.css";
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
      <head>
        <link
          rel="shortcut icon"
          href="/icon.jpg"
          type="image/jpeg"
        />
      </head>
      <body className={`${livvic.className} antialiased`}>{children}</body>
    </html>
  );
}
