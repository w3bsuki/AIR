'use client'

import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"
import { ButtonHTMLAttributes } from "react"

interface ButtonColorfulProps extends Omit<HTMLMotionProps<"button">, "children"> {
  size?: 'default' | 'sm' | 'lg'
  className?: string
  children: React.ReactNode
}

export function ButtonColorful({ 
  size = 'default', 
  className,
  children,
  ...props 
}: ButtonColorfulProps) {
  const sizeClasses = {
    default: 'px-6 py-2 text-sm',
    sm: 'px-4 py-1.5 text-xs',
    lg: 'px-8 py-3 text-sm'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full font-medium text-white transition-colors",
        "bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
