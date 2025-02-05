"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CodeDemoProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  animationDelay?: number
  showLineNumbers?: boolean
  highlightLines?: number[]
}

export function CodeDemo({
  code,
  language = "typescript",
  animationDelay = 0.1,
  showLineNumbers = true,
  highlightLines = [],
  className,
  ...props
}: CodeDemoProps) {
  const [mounted, setMounted] = useState(false)
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const lines = code.trim().split("\n")

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)} {...props}>
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30 backdrop-blur" />
      <pre
        ref={preRef}
        className={cn(
          "relative z-10 p-4 text-sm",
          showLineNumbers && "pl-12"
        )}
      >
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * animationDelay,
            }}
            className={cn(
              "relative",
              highlightLines.includes(i + 1) &&
                "bg-primary/10 before:absolute before:-left-12 before:top-0 before:h-full before:w-1 before:bg-primary"
            )}
          >
            {showLineNumbers && (
              <span className="absolute -left-8 select-none text-xs text-muted-foreground">
                {i + 1}
              </span>
            )}
            <span className="font-mono">{line}</span>
          </motion.div>
        ))}
      </pre>
    </div>
  )
} 