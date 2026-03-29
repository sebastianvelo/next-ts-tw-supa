import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import AppProviders from "@/context";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Klass - Your modern classroom",
  description: "Your modern classroom.",
};

export default function RootLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} h-screen flex flex-col`}>
        <AppProviders>
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-bl sm:bg-gradient-to-tl from-primary-100 via-secondary-100 to-primary-100 dark:from-primary-950 dark:via-secondary-950 dark:to-primary-950 scrollbar-primary">
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}