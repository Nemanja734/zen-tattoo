import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/utils/fonts";
import Nav from "@/layout/nav";
import Footer from "@/layout/footer";

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
    <html lang="de" className={geistSans.className}>
      <body className="min-h-dvh flex flex-col">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
