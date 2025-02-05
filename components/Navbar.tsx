'use client'

import { navigationConfig } from "@/config/navigation"
import { DropdownNavigation } from "@/components/ui/dropdown-navigation"
import { GlowingEffect } from "@/components/ui/glowing-effect"

export function Navbar() {
  return (
    <div className="relative">
      <div className="relative rounded-2.5xl p-2 md:rounded-3xl md:p-3">
        <GlowingEffect spread={80} glow={true} proximity={100} />
        <DropdownNavigation navItems={navigationConfig} />
      </div>
    </div>
  )
}

