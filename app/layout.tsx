import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import AppProviders from "@/context";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";
import "./themes.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Demo",
  description: "Demo",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} h-screen flex flex-col`}>
        <AppProviders>
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-bl sm:bg-gradient-to-l from-primary-100 via-secondary-100 to-primary-100 dark:from-primary-950 dark:via-secondary-950 dark:to-primary-950 scrollbar-thin scrollbar-thumb-primary-400 scrollbar-track-primary-100 hover:scrollbar-thumb-primary-500 dark:scrollbar-thumb-primary-800 dark:scrollbar-track-primary-950 dark:hover:scrollbar-thumb-primary-950">
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}