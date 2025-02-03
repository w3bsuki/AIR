import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <div className="flex select-none items-center">
              <span
                data-content="AIDR"
                className="before:animate-gradient-background-1 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 bg-gradient-to-r bg-clip-text px-2 text-transparent">
                  AIDR
                </span>
              </span>
              <span
                data-content=".ai"
                className="before:animate-gradient-background-2 relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-full before:px-2 before:content-[attr(data-content)] sm:before:top-0"
              >
                <span className="from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 bg-gradient-to-r bg-clip-text text-transparent">
                  .ai
                </span>
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-200">
              Agents
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-200">
              Solutions
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-200">
              Pricing
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-200">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
              Log In
            </Button>
            <Button
              variant="default"
              className="bg-white text-black hover:bg-white/90 transition-colors duration-200 border border-white/20 hover:border-white/40"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

