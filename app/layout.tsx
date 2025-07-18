import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeModeProvider } from "@/components/providers/theme-mode-provider";
import { RadixThemeProvider } from "@/components/providers/radix-theme-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  authors: [{ name: "Mandalor Studio" }],
  creator: "Mandalor Studio",
  publisher: "Mandalor Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://scaletone.mandalor.studio"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Scaletone",
      url: "https://scaletone.mandalor.studio",
      description:
        "Generate beautiful, accessible themes for shadcn/ui and Radix UI components using Radix Colors. Create consistent design systems with easy theme customization.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      creator: {
        "@type": "Organization",
        name: "Mandalor Studio",
        url: "https://mandalor.studio",
      },
      featureList: [
        "Generate themes for shadcn/ui components",
        "Generate themes for Radix UI components",
        "Use Radix Colors for consistent palettes",
        "Export production-ready CSS",
        "Real-time theme preview",
        "Accessibility-focused color combinations",
      ],
      screenshot: "https://scaletone.mandalor.studio/og-image.jpg",
    }),
  },
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
        <Analytics />
        <ThemeModeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RadixThemeProvider>
            <div className="flex flex-col min-h-screen">
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
