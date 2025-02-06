'use client'

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState, memo } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

function FloatingNavComponent() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 150) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20 
      }}
      transition={{ duration: 0.2 }}
      className="fixed left-1/2 top-8 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-4 rounded-full border bg-background/50 p-2 pr-6 shadow-lg backdrop-blur-lg">
        <nav className="flex items-center gap-4 text-sm">
          <Link 
            href="#features"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link 
            href="#agents"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            Agents
          </Link>
          <Link 
            href="#pricing"
            className="rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
        </nav>
        <Button size="sm" className="bg-gradient hover:opacity-90">
          Get Started
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

export default memo(FloatingNavComponent) 