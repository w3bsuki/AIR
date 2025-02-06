'use client'

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    title: "Computer Vision",
    href: "/computer-vision",
    description: "Train and deploy computer vision models with our end-to-end platform."
  },
  {
    title: "NLP",
    href: "/nlp",
    description: "Process and understand text data at scale with our NLP solutions."
  },
  {
    title: "Synthetic Data",
    href: "/synthetic",
    description: "Generate high-quality synthetic data to train your AI models."
  },
]

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Learn how to integrate and use our platform effectively."
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Stay updated with our latest developments and industry insights."
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "See how other companies are succeeding with our platform."
  },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Agents", href: "#agents" },
    { label: "Pricing", href: "#pricing" },
  ]

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <nav className="flex h-20 items-center justify-between">
          <Link 
            href="/" 
            className="relative group flex items-center gap-2 font-bold text-2xl tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              AIDR
            </span>
            <span className="text-foreground">.ai</span>
            <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign in</Link>
              </Button>
              <Button className="bg-gradient hover:opacity-90" asChild>
                <Link href="/signup">Get started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t bg-background/95 backdrop-blur-lg"
          >
            <div className="container py-6">
              <nav className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-3">
                  {menuItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleMobileMenuClick(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-blue-500 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-3 pt-6 border-t">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/login">Sign in</Link>
                  </Button>
                  <Button className="w-full bg-gradient hover:opacity-90" asChild>
                    <Link href="/signup">Get started</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

