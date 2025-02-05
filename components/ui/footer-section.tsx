"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
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

  return (
    <footer className="w-full bg-black/[0.96] border-t border-white/10 relative group">
      <Spotlight />
      <div className="container mx-auto px-4 py-20">
        <div className="relative rounded-2.5xl border border-white/10 p-2 md:rounded-3xl md:p-3">
          <GlowingEffect spread={80} glow={true} proximity={100} />
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 p-6">
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Stay Connected</h2>
              <p className="mb-6 text-neutral-400">
                Join our newsletter for the latest updates and exclusive offers.
              </p>
              <form className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pr-12 bg-white/5 border-white/10"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </form>
              <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-neutral-200">Quick Links</h3>
              <nav className="space-y-2 text-sm">
                <a href="#" className="block text-neutral-400 transition-colors hover:text-white">
                  Home
                </a>
                <a href="#" className="block text-neutral-400 transition-colors hover:text-white">
                  About Us
                </a>
                <a href="#" className="block text-neutral-400 transition-colors hover:text-white">
                  Services
                </a>
                <a href="#" className="block text-neutral-400 transition-colors hover:text-white">
                  Products
                </a>
                <a href="#" className="block text-neutral-400 transition-colors hover:text-white">
                  Contact
                </a>
              </nav>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-neutral-200">Contact Us</h3>
              <address className="space-y-2 text-sm not-italic text-neutral-400">
                <p>123 Innovation Street</p>
                <p>Tech City, TC 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: hello@example.com</p>
              </address>
            </div>
            <div className="relative">
              <h3 className="mb-4 text-lg font-semibold text-neutral-200">Follow Us</h3>
              <div className="mb-6 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Facebook</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect with us on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-neutral-400">
            © 2024 Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-neutral-400 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-400 transition-colors hover:text-white">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

