import Link from "next/link"

export function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left section */}
        <div className="flex items-center">
          <nav className="hidden space-x-8 text-sm font-medium text-white/70 md:flex">
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Products
            </Link>
            <Link
              href="/agents"
              className="transition-colors hover:text-white"
            >
              Agents
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-white"
            >
              About
            </Link>
          </nav>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="text-lg font-bold text-white">
            AIR1
          </Link>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <nav className="hidden space-x-8 text-sm font-medium text-white/70 md:flex">
            <Link
              href="/pricing"
              className="transition-colors hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-white"
            >
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden text-sm font-medium text-white/70 transition-colors hover:text-white sm:block"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition-all hover:bg-white/20 ring-1 ring-white/20 hover:ring-white/40"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
} 