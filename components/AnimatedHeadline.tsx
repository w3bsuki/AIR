"use client"

import { motion } from "framer-motion"

export function AnimatedHeadline() {
  return (
    <motion.h1
      className="text-4xl md:text-6xl font-bold mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Hire AI Agents That Never Sleep
    </motion.h1>
  )
}

