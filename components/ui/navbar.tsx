"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { DIcons } from "dicons"
import { DropdownNavigation } from "@/components/ui/dropdown-navigation"
import {
  Bot,
  Code,
  Search,
  Shield,
  Zap,
  Brain,
  Box,
  Globe,
  BookOpen,
  FileText,
} from "lucide-react"

const NAV_ITEMS = [
  {
    id: 1,
    label: "Agents",
    link: "/agents",
    subMenus: [
      {
        title: "Browse Agents",
        items: [
          {
            label: "Featured Agents",
            description: "Our top performing AI agents",
            icon: Bot,
          },
          {
            label: "New Releases",
            description: "Recently added agents",
            icon: Zap,
          },
        ],
      },
      {
        title: "By Category",
        items: [
          {
            label: "Development",
            description: "Code and development agents",
            icon: Code,
          },
          {
            label: "Research",
            description: "Data analysis and research agents",
            icon: Search,
          },
          {
            label: "Security",
            description: "Security and compliance agents",
            icon: Shield,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Solutions",
    subMenus: [
      {
        title: "By Industry",
        items: [
          {
            label: "Enterprise",
            description: "Solutions for large organizations",
            icon: Brain,
          },
          {
            label: "Startups",
            description: "Scale your business with AI",
            icon: Box,
          },
          {
            label: "Healthcare",
            description: "AI solutions for healthcare",
            icon: Globe,
          },
        ],
      },
      {
        title: "Resources",
        items: [
          {
            label: "Documentation",
            description: "Detailed guides and API docs",
            icon: BookOpen,
          },
          {
            label: "Case Studies",
            description: "Success stories and examples",
            icon: FileText,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "About",
    link: "/about",
  },
]

export function Navbar1() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">AIDR.ai</span>
        </Link>

        <DropdownNavigation navItems={NAV_ITEMS} />

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-base text-white/70 hover:text-white transition-colors px-4 py-2"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-base text-black bg-white px-5 py-2 rounded-full hover:bg-white/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
} 