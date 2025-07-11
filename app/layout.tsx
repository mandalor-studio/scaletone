import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeModeProvider } from "../components/theme-mode-provider";
import { RadixThemeProvider } from "../components/radix-theme-provider";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scaletone - Shadcn/Radix Theme Generator",
  description:
    "Generate beautiful themes for shadcn/ui and Radix UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link id="theme-stylesheet" rel="stylesheet" href="/themes/sage.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <ThemeModeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RadixThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <div className="container mx-auto px-6 py-8 max-w-6xl">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
            <Toaster />
          </RadixThemeProvider>
        </ThemeModeProvider>
      </body>
    </html>
  );
}
