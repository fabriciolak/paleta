import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paleta - Tailwind CSS Palette Generator",
  description:
    "Generate your Tailwind CSS color palette effortlessly with Paleta. Enter a hex code or press spacebar, click 'Generate Palette' and create the perfect colors for your project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
