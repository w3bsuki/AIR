import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import { Navbar } from "@/components/Navbar"
import { Footerdemo } from "@/components/ui/footer-section"
import { SpotlightProvider } from "@/components/SpotlightProvider"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-clash-display',
})

export const metadata: Metadata = {
  title: "AIDR.ai",
  description: "AI Development & Research",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${clashDisplay.variable} font-sans antialiased`}>
        <SpotlightProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footerdemo />
        </SpotlightProvider>
      </body>
    </html>
  )
}

