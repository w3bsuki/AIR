import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar1, demoData } from "@/components/ui/navbar"
import { Footerdemo } from "@/components/ui/footer-section"
import { SpotlightProvider } from "@/components/SpotlightProvider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Agent Marketplace 2025",
  description: "Hire AI Agents That Never Sleep",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white">
        <Navbar1 {...demoData} />
        <main>
          {children}
        </main>
        <Footerdemo />
      </body>
    </html>
  )
}

