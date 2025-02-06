'use client'

import { motion } from "framer-motion"
import { memo } from "react"

const stats = [
  {
    value: "99.9%",
    label: "Uptime SLA",
    delay: 0,
  },
  {
    value: "50ms",
    label: "Average Latency",
    delay: 0.1,
  },
  {
    value: "24/7",
    label: "Support",
    delay: 0.2,
  },
  {
    value: "100K+",
    label: "API Requests/sec",
    delay: 0.3,
  },
] as const

const statVariants = {
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

function StatsComponent() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={stat.delay}
              className="text-center"
            >
              <div className="text-gradient text-4xl font-bold lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[800px] opacity-20">
          <div className="absolute inset-0 bg-gradient-conic from-blue-500 via-cyan-500 to-blue-500 blur-[64px]" />
        </div>
      </div>
    </section>
  )
}

export default memo(StatsComponent) 