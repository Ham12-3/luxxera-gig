import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/nav/top-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patient Confidence Hub",
  description: "Your trusted partner for medical tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        <main className="min-h-screen w-full overflow-x-hidden pb-24 sm:pb-10">{children}</main>
      </body>
    </html>
  );
}

