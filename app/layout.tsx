import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SQN QMS | BIS, ISI, FSSAI, CGWA & Pollution NOC Consultants",
  description:
    "Standard Quality Nexus (SQN) provides PAN India consultancy for BIS Certification, ISI Mark, FSSAI License, CGWA Approval, CRS Registration and Pollution NOC services.",
  keywords:
    "BIS certification consultant India, ISI mark registration, FSSAI license consultant, CGWA approval, Pollution NOC consultant India, CRS registration India, PAN India certification services",
  authors: [{ name: "Standard Quality Nexus" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
