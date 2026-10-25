import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QDelta — Our Work | Premium Portfolio Showcase",
  description:
    "Curated collection of our best website projects, digital experiences, and creative social media content for prospective clients.",
  keywords: [
    "QDelta",
    "Creative Agency",
    "Digital Studio",
    "Web Design Portfolio",
    "Social Media Design",
    "Digital Experiences",
  ],
  authors: [{ name: "QDelta Studio" }],
  openGraph: {
    title: "QDelta — Our Work | Premium Portfolio Showcase",
    description:
      "Websites, digital experiences, and creative content. Curated showcase for QDelta clients.",
    url: "https://work.qdelta.com",
    siteName: "QDelta — Our Work",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "QDelta — Our Work",
    description: "Websites, digital experiences, and creative content.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#111315",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#111315] text-[#F5F6F2] font-sans antialiased selection:bg-[#D4FF78] selection:text-[#111315]">
        {children}
      </body>
    </html>
  );
}
