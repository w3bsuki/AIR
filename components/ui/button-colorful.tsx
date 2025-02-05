'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonColorfulProps {
  children: ReactNode
  href: string
  className?: string
}

export function ButtonColorful({ children, href, className }: ButtonColorfulProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-blue-500 p-0.5 font-medium text-foreground hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-primary group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800",
        className
      )}
    >
      <span className="relative rounded-md bg-background px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-black">
        {children}
      </span>
    </Link>
  )
}
