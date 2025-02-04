'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { ButtonColorful } from "./button-colorful"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { routes } from "@/lib/routes"

const words = [
  "Intelligent",
  "Efficient",
  "Reliable",
  "Scalable",
  "Secure"
]

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 3000) // Increased duration for smoother transitions

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  }

  const textVariants = {
    enter: { 
      y: 20, 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    center: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          <span className="block mb-2">
            Deploy{" "}
            <motion.span
              key={words[index]}
              initial="enter"
              animate="center"
              exit="exit"
              variants={textVariants}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500"
            >
              {words[index]}
            </motion.span>
          </span>
          AI Agents at Scale
        </h1>

        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Experience the future of AI with our marketplace of specialized agents ready to transform your business operations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={routes.signup}>
            <ButtonColorful size="lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonColorful>
          </Link>
          <Link
            href={routes.demo}
            className="inline-flex items-center justify-center rounded-full bg-white/5 px-8 py-3 text-sm font-medium text-white ring-1 ring-white/20 hover:ring-white/40 transition-all"
          >
            View Demo
          </Link>
        </div>
      </div>
    </motion.div>
  )
} 