'use client'

import Link from "next/link"
import { routes } from "@/lib/routes"

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-lg">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={routes.home} className="text-xl font-bold text-white">
          AIR
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={routes.agents}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Agents
          </Link>
          <Link
            href={routes.services}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Services
          </Link>
          <Link
            href={routes.research}
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Research
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href={routes.login}
            className="hidden text-sm font-medium text-white/70 transition-colors hover:text-white sm:block"
          >
            Sign in
          </Link>
          <Link
            href={routes.signup}
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  )
} 