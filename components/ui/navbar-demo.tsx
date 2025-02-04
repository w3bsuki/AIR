"use client"

import * as React from "react"
import { Header, Button } from "@/components/ui/21st-navbar"
import { Menu, User, Sun, Moon, ChevronDown } from "lucide-react"

const menuItems = [
  {
    text: "AI Agents",
    to: "/agents"
  },
  {
    text: "Services",
    items: [
      {
        text: "AI Services",
        description: "Explore our AI-powered solutions",
        to: "/services"
      },
      {
        text: "Research",
        description: "Latest AI research and findings",
        to: "/research"
      }
    ]
  },
  {
    text: "About",
    to: "/about"
  }
]

export function NavbarDemo() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark')
  
  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-[#0B0C0F]' : 'bg-white'}`}>
      <Header
        theme={theme}
        isSticky
        isStickyOverlay
        withBorder
        logo={<span className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>AIDR.ai</span>}
        menuItems={menuItems}
        onThemeChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        rightContent={
          <Button 
            variant={theme === 'dark' ? 'outline' : 'default'}
            className={theme === 'dark' ? 'text-white' : ''}
          >
            <User className="mr-2 h-4 w-4" />
            Sign In
          </Button>
        }
      />
    </div>
  )
} 