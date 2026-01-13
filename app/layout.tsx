import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import NavigationErrorProvider from "@/context/error/NavigationErrorProvider";
import LanguageProvider from "@/context/language/LanguageProvider";
import ThemeProvider from "@/context/theme/ThemeProvider";
import ToastProvider from "@/context/toast/ToastProvider";
import type { Metadata } from "next";
import { Inter, Oswald, Roboto } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  title: "change this in layout.tsx",
  description: "change this in layout.tsx",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <ThemeProvider>
        <LanguageProvider>
          <NavigationErrorProvider>
            <body className={`${inter.className} ${oswald.variable} h-screen flex flex-col`}>
              <ToastProvider>
                <Navbar />
                <main className="font-roboto flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-bl sm:bg-gradient-to-l from-primary-100 via-secondary-100 to-primary-100 dark:from-primary-950 dark:via-secondary-950 dark:to-primary-950 scrollbar-thin scrollbar-thumb-primary-400 scrollbar-track-primary-100 hover:scrollbar-thumb-primary-500 dark:scrollbar-thumb-primary-800 dark:scrollbar-track-primary-950 dark:hover:scrollbar-thumb-primary-950">
                  {children}
                </main>
                <Footer />
              </ToastProvider>
            </body>
          </NavigationErrorProvider>
        </LanguageProvider>
      </ThemeProvider>
    </html >
  );
}