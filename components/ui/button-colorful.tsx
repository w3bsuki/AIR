'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonColorfulProps {
  children: ReactNode
  href: string
  size?: 'default' | 'sm' | 'lg'
  className?: string
  variant?: 'default' | 'outline'
}

export function ButtonColorful({ 
  children, 
  href, 
  size = 'default', 
  variant = 'default',
  className 
}: ButtonColorfulProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base'
  }

  const variantClasses = {
    default: cn(
      "relative inline-flex items-center justify-center overflow-hidden rounded-lg",
      "bg-gradient-to-r from-blue-500 to-indigo-500 text-white",
      "hover:from-blue-600 hover:to-indigo-600",
      "transition-all duration-300 ease-out hover:scale-[1.02]",
      "font-medium tracking-wide",
      "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-background"
    ),
    outline: cn(
      "relative inline-flex items-center justify-center overflow-hidden rounded-lg",
      "border border-blue-500/20 bg-transparent text-blue-500",
      "hover:bg-blue-500/10 hover:border-blue-500/30",
      "transition-all duration-300 ease-out",
      "font-medium tracking-wide",
      "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-background"
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        "shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30",
        className
      )}
    >
      {children}
    </Link>
  )
}
