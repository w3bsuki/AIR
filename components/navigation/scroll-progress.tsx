'use client'

import { motion, useScroll, useSpring } from "framer-motion"
import { memo } from "react"

function ScrollProgressComponent() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-1 origin-[0%] bg-gradient-to-r from-blue-500 to-cyan-500"
      style={{ 
        scaleX,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
    />
  )
}

export default memo(ScrollProgressComponent) 