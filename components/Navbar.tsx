'use client'

import { navigationConfig } from "@/config/navigation"
import { DropdownNavigation } from "@/components/ui/dropdown-navigation"

export function Navbar() {
  return <DropdownNavigation navItems={navigationConfig} />
}

