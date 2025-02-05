'use client'

import { useState } from "react"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function DropdownNavigation({ navItems }: { navItems: Props[] }) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel)
  }

  const [isHover, setIsHover] = useState<number | null>(null)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-foreground">AIDR.ai</a>
          </div>
          <div className="flex items-center">
            <ul className="relative flex items-center space-x-0">
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
                      className="text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-muted-foreground hover:text-foreground relative"
                      onMouseEnter={() => setIsHover(navItem.id)}
                      onMouseLeave={() => setIsHover(null)}
                    >
                      <span>{navItem.label}</span>
                      {(isHover === navItem.id) && (
                        <motion.div
                          layoutId="hover-bg"
                          className="absolute inset-0 size-full bg-primary/10"
                          style={{ borderRadius: 99 }}
                        />
                      )}
                    </a>
                  ) : (
                    <button
                      className="text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-muted-foreground hover:text-foreground relative"
                      onMouseEnter={() => setIsHover(navItem.id)}
                      onMouseLeave={() => setIsHover(null)}
                    >
                      <span>{navItem.label}</span>
                      {navItem.subMenus && (
                        <ChevronDown
                          className={`h-4 w-4 group-hover:rotate-180 duration-300 transition-transform
                            ${openMenu === navItem.label ? "rotate-180" : ""}`}
                        />
                      )}
                      {(isHover === navItem.id || openMenu === navItem.label) && (
                        <motion.div
                          layoutId="hover-bg"
                          className="absolute inset-0 size-full bg-primary/10"
                          style={{ borderRadius: 99 }}
                        />
                      )}
                    </button>
                  )}

                  <AnimatePresence>
                    {openMenu === navItem.label && navItem.subMenus && (
                      <div className="w-auto absolute left-0 top-full pt-2">
                        <motion.div
                          className="bg-background/80 backdrop-blur-sm border border-border p-4 w-max shadow-lg"
                          style={{ borderRadius: 16 }}
                          layoutId="menu"
                        >
                          <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                            {navItem.subMenus.map((sub) => (
                              <motion.div layout className="w-full" key={sub.title}>
                                <h3 className="mb-4 text-sm font-medium capitalize text-muted-foreground">
                                  {sub.title}
                                </h3>
                                <ul className="space-y-6">
                                  {sub.items.map((item) => {
                                    const Icon = item.icon
                                    return (
                                      <li key={item.label}>
                                        <a
                                          href="#"
                                          className="flex items-start space-x-3 group"
                                        >
                                          <div className="border border-border text-foreground rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                                            <Icon className="h-5 w-5 flex-none" />
                                          </div>
                                          <div className="leading-5 w-max">
                                            <p className="text-sm font-medium text-foreground shrink-0">
                                              {item.label}
                                            </p>
                                            <p className="text-xs text-muted-foreground shrink-0 group-hover:text-foreground transition-colors duration-300">
                                              {item.description}
                                            </p>
                                          </div>
                                        </a>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
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