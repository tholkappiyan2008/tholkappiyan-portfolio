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

export const metadata: Metadata = {
  title: "Tholkappiyan S. | B.Tech CSE (Data Science) · AI & Full-Stack Developer",
  description:
    "Official developer portfolio of Tholkappiyan S. B.Tech Computer Science and Engineering (Data Science) student at Takshashila University. Architect of AI Business OS and NewsTrack, focused on intelligent systems and scalable software.",
  keywords: [
    "Tholkappiyan S",
    "Tholkappiyan",
    "Computer Science",
    "Data Science",
    "Takshashila University",
    "AI Business OS",
    "NewsTrack",
    "AI Agents",
    "Full-Stack Developer",
    "Portfolio",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Tholkappiyan S." }],
  creator: "Tholkappiyan S.",
  metadataBase: new URL("https://tholkappiyan.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tholkappiyan.dev",
    title: "Tholkappiyan S. | B.Tech CSE (Data Science) · AI & Full-Stack Developer",
    description:
      "Building intelligent systems that solve real problems. Computer Science & Data Science student exploring AI-powered applications, full-stack engineering, and intelligent automation.",
    siteName: "Tholkappiyan S. Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tholkappiyan S. | B.Tech CSE (Data Science) · AI & Full-Stack Developer",
    description: "Building intelligent systems that solve real problems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#0B0D10] text-[#F5F7FA] antialiased selection:bg-[#8B9CFF] selection:text-[#0B0D10]`}
      >
        {children}
      </body>
    </html>
  );
}
