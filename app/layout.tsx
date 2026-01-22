"use client";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster";
import { AppQueryClientProvider } from "@/components/providers/query-client-provider";
import { Playfair_Display, Poppins } from "next/font/google";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import type React from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const jeko = localFont({
  src: [
    {
      path: "../fonts/jeko/fonnts.com-Jeko_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/jeko/fonnts.com-Jeko_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/jeko/fonnts.com-Jeko_SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/jeko/fonnts.com-Jeko_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-jeko",
  display: "swap",
  fallback: ["serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const isDashboard = path.startsWith("/dashboard");

  // Add favicon link to head
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = "/images/logo.png";

    // Remove existing favicon links
    const existingLinks = document.querySelectorAll('link[rel="icon"]');
    existingLinks.forEach((el) => el.remove());

    document.head.appendChild(link);

    // Also add apple-touch-icon
    const appleLink = document.createElement("link");
    appleLink.rel = "apple-touch-icon";
    appleLink.href = "/images/logo.png";
    document.head.appendChild(appleLink);
  }, []);

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} ${jeko.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <AppQueryClientProvider>
          {isDashboard ? null : <Header />}
          <main className="flex-1">{children}</main>
          {isDashboard ? null : <Footer />}
          <Toaster />
        </AppQueryClientProvider>
      </body>
    </html>
  );
}
