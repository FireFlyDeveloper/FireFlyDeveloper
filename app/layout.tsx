import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Kim Eduard Saludes, Full-Stack Developer and IoT Engineer",
  description:
    "Portfolio of Kim Eduard Saludes. Production-grade web systems, IoT platforms, automation pipelines, and edge devices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <div className="min-h-[100dvh]">{children}</div>
      </body>
    </html>
  );
}
