import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Navbar from "@/components/layout/navbar/Navbar";
import AppProviders from "@/context/AppProviders";
import type { Metadata } from "next";
import { Inter, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "demo",
  description: "Create and share polls with the world.",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={`${plusJakarta.className} ${plusJakarta.variable} ${manrope.variable} ${inter.variable} h-screen flex flex-row overflow-hidden`}>
      <AppProviders>
        <Navbar />
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-bl sm:bg-gradient-to-tl from-secondary-100 via-secondary-50 to-secondary-100 dark:from-black dark:via-secondary-950 dark:to-black scrollbar-primary">
            <Header />
            {children}
          </main>
          <Footer />
        </div>
      </AppProviders>
    </body>
  </html>
);

export default RootLayout;