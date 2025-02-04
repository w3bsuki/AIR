'use client'

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react
import Link from "next/link"

const RESEARCH_ITEMS = [
  {
    id: 1,
    title: "Advancing AI Safety",
    description: "Exploring new methodologies for safer and more reliable AI systems",
    category: "AI Safety",
    readTime: "8 min read",
    date: "Mar 2024",
  },
  {
    id: 2,
    title: "Large Language Model Breakthroughs",
    description: "Recent developments in LLM architectures and their implications",
    category: "LLMs",
    readTime: "12 min read",
    date: "Mar 2024",
  },
  {
    id: 3,
    title: "Neural Networks Evolution",
    description: "The future of neural network architectures and training methods",
    category: "Deep Learning",
    readTime: "10 min read",
    date: "Mar 2024",
  },
]

export function ResearchSection() {
  return (
    <section className="w-full bg-black/50 backdrop-blur-sm py-24 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Research
          </h2>
          <p className="text-white/70 text-lg">
            Exploring the frontiers of artificial intelligence and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {RESEARCH_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
            >
              <Link 
                href="#" 
                className="block group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="absolute top-3 right-3">
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors" />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-white/50 px-3 py-1 rounded-full bg-white/5">
                    {item.category}
                  </span>
                  <span className="text-xs text-white/30">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-white/70 mb-4">
                  {item.description}
                </p>

                <div className="flex items-center text-xs text-white/50">
                  <span>{item.readTime}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 