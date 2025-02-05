'use client'

import Image from "next/image"
import {
  Brain,
  Shield,
  Globe,
  Zap,
  Bot
} from "lucide-react"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const features = [
  {
    Icon: Brain,
    name: "Advanced AI Research",
    description: "Pushing the boundaries of artificial intelligence with cutting-edge research and development.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image 
        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
        width={256}
        height={256}
        className="absolute -right-20 -top-20 opacity-60 object-cover"
        alt="AI Research"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Shield,
    name: "AI Safety",
    description: "Ensuring responsible AI development with robust safety measures and ethical guidelines.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        width={256}
        height={256}
        className="absolute -right-20 -top-20 opacity-60 object-cover"
        alt="AI Safety"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Globe,
    name: "Global Impact",
    description: "Making AI accessible and beneficial for organizations worldwide.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image 
        src="https://images.unsplash.com/photo-1522071901873-411886a10004"
        width={256}
        height={256}
        className="absolute -right-20 -top-20 opacity-60 object-cover"
        alt="Global Impact"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Zap,
    name: "Innovation",
    description: "Continuously evolving and improving our AI technologies.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image 
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
        width={256}
        height={256}
        className="absolute -right-20 -top-20 opacity-60 object-cover"
        alt="Innovation"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Bot,
    name: "AI Agents",
    description: "Building intelligent agents that solve real-world problems.",
    href: "/",
    cta: "Learn more",
    background: (
      <Image 
        src="https://images.unsplash.com/photo-1551434678-e076c223a692"
        width={256}
        height={256}
        className="absolute -right-20 -top-20 opacity-60 object-cover"
        alt="AI Agents"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
]

function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}

export { BentoDemo } 