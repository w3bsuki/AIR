import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar1 } from "@/components/ui/navbar"
import { Footerdemo } from "@/components/ui/footer-section"
import { SpotlightProvider } from "@/components/SpotlightProvider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <SpotlightProvider>
          <Navbar1 />
          {children}
          <Footerdemo />
        </SpotlightProvider>
      </body>
    </html>
  )
}

