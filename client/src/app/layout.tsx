import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Not being used
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Zen Tattoo | Das digitale Tattoostudio",
  description: "Entdecke talentierte Tätowierer aus ganz Deutschland, vergleiche ihre Portfolios und buche dein Wunsch-Tattoo bequem über das Internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
