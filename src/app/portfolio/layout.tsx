import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import BackToSites from "@/components/ui/items/BackToSites";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio - SIGO Web Solutions",
  description: "Explore nosso portfólio de sites e landing pages.",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${plusJakartaSans.variable} antialiased`}>
      {children}
      <BackToSites />
    </div>
  );
}
