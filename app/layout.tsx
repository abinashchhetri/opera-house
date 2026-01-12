"use client"
import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { COMPANY_INFO } from "@/lib/constants"
import { usePathname } from "next/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

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
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const path = usePathname();
  const isDashboard = path.startsWith("/dashboard");
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${jeko.variable}`}>
      <body className="min-h-screen flex flex-col">
        {isDashboard ? null : <Header />}
        <main className="flex-1">{children}</main>
        {isDashboard ? null : <Footer />}
      </body>
    </html>
  )
}
