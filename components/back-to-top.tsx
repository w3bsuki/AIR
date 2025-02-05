'use client'

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{ duration: 0.2 }}
      className="fixed right-8 bottom-8 z-50"
    >
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-gradient shadow-lg hover:opacity-90"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-6 w-6" />
        <span className="sr-only">Back to top</span>
      </Button>
    </motion.div>
  )
} 