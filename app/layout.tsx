import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { COMPANY_INFO } from "@/lib/constants"

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

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`,
  description: COMPANY_INFO.description,
  keywords: "UPVC, aluminum, windows, doors, partitions, Pokhara, Nepal, construction",
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${jeko.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
