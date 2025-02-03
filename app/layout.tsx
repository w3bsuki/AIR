import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import { Footerdemo } from "@/components/ui/footer-section"
import { SpotlightProvider } from "@/components/SpotlightProvider"
import type React from "react" // Added import for React

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
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black min-h-screen flex flex-col`}>
        <SpotlightProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footerdemo />
        </SpotlightProvider>
      </body>
    </html>
  )
}

