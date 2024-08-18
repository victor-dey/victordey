import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Header from "./Header/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Hi! | Victor Dey",
  description: "This is Victor's own playground to tinker with",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}${lato.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
