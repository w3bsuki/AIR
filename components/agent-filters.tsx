'use client'

import { useState } from "react"
import { Search, Sliders } from "lucide-react"

export function AgentFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="space-y-6 sticky top-24">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
        <input
          type="text"
          placeholder="Search agents..."
          className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-white mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-white/20 bg-white/5" />
              <span className="text-sm text-white/70">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium text-white mb-3">Price Range</h3>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
          className="w-full"
        />
        <div className="flex items-center justify-between text-sm text-white/70">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* More filters can be added here */}
    </div>
  )
}

const categories = [
  "Data Analysis",
  "Customer Service",
  "Content Creation",
  "Research",
  "Development",
  "Marketing",
] 