"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Spotlight } from "@/components/ui/spotlight-new"

export function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative w-full py-12 md:py-24 lg:py-32 border-t bg-background/80 backdrop-blur-xl group">
      <Spotlight />
      <div className="container px-4 md:px-6">
        <div className="relative rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
          <GlowingEffect spread={60} glow={true} proximity={80} />
          <div className="grid gap-10 mx-auto max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">About Us</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>Our Story</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>AI Development</li>
                <li>Research</li>
                <li>Consulting</li>
                <li>Training</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Resources</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>Blog</li>
                <li>Documentation</li>
                <li>Case Studies</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

