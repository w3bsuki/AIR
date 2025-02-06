'use client'

import { useState, useEffect, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"

function SearchOverlayComponent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="fixed right-8 top-8 z-50 hidden h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-lg backdrop-blur-md sm:flex"
        onClick={() => setOpen(true)}
        style={{ willChange: 'transform' }}
      >
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          >
            <div className="fixed inset-x-0 top-[20vh]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="relative mx-auto max-w-2xl"
              >
                <div className="rounded-lg border bg-background shadow-2xl">
                  <div className="flex items-center border-b px-4">
                    <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-2 h-8 w-8 shrink-0"
                      onClick={() => setOpen(false)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto p-2">
                    <div className="p-4 text-center text-sm text-muted-foreground">
                      No results found.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default memo(SearchOverlayComponent) 