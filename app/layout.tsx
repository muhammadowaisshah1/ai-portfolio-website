import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WebVitals } from "./web-vitals";
import { ChatWidgetWrapper } from "@/components/ChatWidgetWrapper";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Muhammad Owais Shah - Agentic AI Engineer | Full-Stack Developer",
  description: "Agentic AI Engineer and Full-Stack Developer specializing in React.js, Next.js, Python, and Agentic AI Engineering. Panaversity Fellow building intelligent automation systems.",
  authors: [{ name: "Muhammad Owais Shah" }],
  keywords: ["AI Engineer", "Full-Stack Developer", "Python", "Next.js", "React", "TypeScript", "AI Agents", "OpenAI SDK", "N8N Automation", "Web Development", "Panaversity", "Muhammad Owais Shah"],
  openGraph: {
    title: "Muhammad Owais Shah - Agentic AI Engineer | Full-Stack Developer",
    description: "Building intelligent systems with AI agents, automation workflows, and modern frontend technologies. Panaversity Fellow specializing in React.js, Next.js, Python, and Agentic AI Engineering.",
    type: "website",
    locale: "en_US",
    siteName: "Muhammad Owais Shah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Owais Shah - Agentic AI Engineer | Full-Stack Developer",
    description: "Building intelligent systems with AI agents, automation workflows, and modern frontend technologies.",
    creator: "@muhammadowais",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://yourportfolio.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://muhammadowais4.app.n8n.cloud" />
      </head>
      <body className={inter.className}>
        <WebVitals />
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />

            {/* Static Background Gradient - CSS only, no animations */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-primary/5 via-background to-purple-500/5" />

            <div className="min-h-screen bg-background text-foreground">
              <Navbar />
              <main className="gpu-accelerated">
                {children}
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </Providers>

        {/* Chat Widget - MUST be outside all wrappers to maintain true fixed positioning */}
        <ChatWidgetWrapper />
      </body>
    </html>
  );
}
