'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    }
  })
}

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center">
      <div className="container relative z-10 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1 
            className="text-gradient mb-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            The Platform for AI Development
          </motion.h1>

          <motion.p 
            className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
          >
            Build, train, and deploy AI models with unprecedented speed and accuracy.
            Our end-to-end platform provides everything you need to turn your AI vision into reality.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
          >
            <Button 
              size="lg" 
              className="bg-gradient hover:opacity-90 w-full sm:w-auto"
              style={{ willChange: 'transform' }}
            >
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto"
              style={{ willChange: 'transform' }}
            >
              Schedule a demo
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Background gradient - Using CSS variables for better performance */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        <div 
          className="absolute -top-1/4 right-0 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-[120px]"
          style={{ 
            width: 'min(1000px, 100vw)',
            height: 'min(1000px, 100vh)',
            willChange: 'transform',
          }}
        />
        <div 
          className="absolute -top-1/4 left-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-[120px]"
          style={{ 
            width: 'min(1000px, 100vw)',
            height: 'min(1000px, 100vh)',
            willChange: 'transform',
          }}
        />
      </div>
    </section>
  )
} 