'use client'

import { useState } from "react"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { routes } from "@/lib/routes"

export function DropdownNavigation({ navItems }: { navItems: Props[] }) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const [isHover, setIsHover] = useState<number | null>(null)

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            className="relative group flex items-center gap-2 font-bold text-2xl tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              AIDR
            </span>
            <span className="text-foreground">.ai</span>
            <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Navigation Items */}
          <div className="flex items-center gap-2">
            <ul className="flex items-center gap-1">
              {navItems.map((navItem) => (
                <li
                  key={navItem.label}
                  className="relative"
                  onMouseEnter={() => handleHover(navItem.label)}
                  onMouseLeave={() => handleHover(null)}
                >
                  {navItem.link ? (
                    <a
                      href={navItem.link}
                      className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                      onMouseEnter={() => setIsHover(navItem.id)}
                      onMouseLeave={() => setIsHover(null)}
                    >
                      <span className="relative z-10">{navItem.label}</span>
                      {(isHover === navItem.id) && (
                        <motion.div
                          layoutId="nav-hover"
                          className="absolute inset-0 rounded-lg bg-muted"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </a>
                  ) : (
                    <button
                      className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                      onMouseEnter={() => setIsHover(navItem.id)}
                      onMouseLeave={() => setIsHover(null)}
                    >
                      <span className="relative z-10 flex items-center gap-1">
                        {navItem.label}
                        {navItem.subMenus && (
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              openMenu === navItem.label ? "rotate-180" : ""
                            )}
                          />
                        )}
                      </span>
                      {(isHover === navItem.id || openMenu === navItem.label) && (
                        <motion.div
                          layoutId="nav-hover"
                          className="absolute inset-0 rounded-lg bg-muted"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  )}

                  <AnimatePresence>
                    {openMenu === navItem.label && navItem.subMenus && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        className="absolute left-0 top-full pt-2 w-max"
                      >
                        <div className="relative overflow-hidden rounded-2xl border bg-background/80 backdrop-blur-xl p-6 shadow-xl">
                          <div className="flex gap-12">
                            {navItem.subMenus.map((sub) => (
                              <div key={sub.title} className="flex-1">
                                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                                  {sub.title}
                                </h3>
                                <ul className="space-y-4">
                                  {sub.items.map((item) => {
                                    const Icon = item.icon
                                    return (
                                      <li key={item.label}>
                                        <a
                                          href="#"
                                          className="group flex items-start gap-4 transition-colors"
                                        >
                                          <div className="relative mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background transition-colors group-hover:border-blue-500/50 group-hover:bg-blue-500/10">
                                            <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-blue-500" />
                                          </div>
                                          <div>
                                            <div className="text-sm font-medium text-foreground group-hover:text-blue-500">
                                              {item.label}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                              {item.description}
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="absolute inset-0 pointer-events-none border border-blue-500/5 rounded-2xl" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="flex items-center ml-4">
              <Button asChild className="bg-gradient hover:opacity-90">
                <a href={routes.signup}>Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

type Props = {
  id: number
  label: string
  subMenus?: {
    title: string
    items: {
      label: string
      description: string
      icon: React.ElementType
    }[]
  }[]
  link?: string
} 