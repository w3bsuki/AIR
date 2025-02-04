'use client'

import { useState } from "react"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface NavItem {
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

interface Props {
  navItems: NavItem[]
}

export function DropdownNavigation({ navItems }: Props) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const [isHover, setIsHover] = useState<number | null>(null)

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel)
  }

  return (
    <div className="relative gap-5 flex flex-col items-center justify-center">
      <ul className="relative flex items-center space-x-2">
        {navItems.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            <button
              className="text-base py-2 px-5 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1.5 text-white/70 hover:text-white relative"
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
                  className="absolute inset-0 size-full bg-white/5 rounded-full"
                />
              )}
            </button>

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="w-auto absolute left-1/2 -translate-x-1/2 top-full pt-2">
                  <motion.div
                    className="bg-black/95 backdrop-blur-sm border border-white/10 p-6 w-max rounded-2xl shadow-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-fit shrink-0 flex space-x-12 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="w-full" key={sub.title}>
                          <h3 className="mb-4 text-sm font-medium capitalize text-white/50">
                            {sub.title}
                          </h3>
                          <ul className="space-y-4">
                            {sub.items.map((item) => {
                              const Icon = item.icon
                              return (
                                <li key={item.label}>
                                  <a
                                    href="#"
                                    className="flex items-start space-x-3 group"
                                  >
                                    <div className="border border-white/10 text-white/70 rounded-lg flex items-center justify-center size-10 shrink-0 group-hover:bg-white/5 group-hover:text-white transition-colors duration-300">
                                      <Icon className="h-5 w-5 flex-none" />
                                    </div>
                                    <div className="leading-5">
                                      <p className="text-sm font-medium text-white/90 group-hover:text-white">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-300">
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
  )
} 