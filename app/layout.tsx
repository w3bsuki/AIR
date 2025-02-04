import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import { Footerdemo } from "@/components/ui/footer-section"
import { SpotlightProvider } from "@/components/SpotlightProvider"
import type React from "react" // Added import for React
import { Nav } from "@/components/nav"

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
        {children}
      </body>
    </html>
  )
}

