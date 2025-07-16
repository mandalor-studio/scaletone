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
              {/*  <div className="fixed inset-x-0 top-0 h-10 z-50 text-black text-sm flex items-center justify-center bg-amber-50 sm:bg-blue-100 md:bg-green-100 lg:bg-red-100 xl:bg-purple-100 2xl:bg-pink-100">
                <div className="block sm:hidden">base</div>
                <div className="hidden sm:block md:hidden">sm</div>
                <div className="hidden md:block lg:hidden">md</div>
                <div className="hidden lg:block xl:hidden">lg</div>
                <div className="hidden xl:block 2xl:hidden">xl</div>
                <div className="hidden 2xl:block">2xl</div>
              </div> */}

              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </RadixThemeProvider>
        </ThemeModeProvider>
      </body>
    </html>
  );
}
