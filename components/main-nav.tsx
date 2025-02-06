"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { CommandMenu } from "@/components/command-menu"

const navigation = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Agents",
    href: "#agents",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
]

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex items-center gap-6 md:gap-10">
      {/* Logo */}
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
      <nav className="hidden md:flex items-center gap-6">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Access all sections of our platform
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t">
              <Button variant="outline" asChild className="w-full">
                <Link href="/login">Sign in</Link>
              </Button>
              <Button className="w-full bg-gradient hover:opacity-90" asChild>
                <Link href="/signup">Get started</Link>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Command Menu */}
      <div className="hidden md:flex">
        <CommandMenu />
      </div>
    </div>
  )
} 