"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { AgentModal } from "./AgentModal"
import { motion } from "framer-motion"

interface Agent {
  id: number
  name: string
  description: string
  skills: string[]
}

interface AgentCardProps {
  agent: Agent
}

export function AgentCard({ agent }: AgentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        className="flex flex-col items-center h-full p-8 text-center transition-all duration-300 bg-black border shadow-md cursor-pointer rounded-xl border-white/10 hover:bg-gradient-to-b hover:from-gray-900 hover:to-black hover:border-white/20 spotlight-card"
        onClick={() => setIsModalOpen(true)}
        whileHover={{
          scale: 1.05,
          shadow: "lg",
          borderColor: "white/30",
          transition: { duration: 0.2 },
        }}
      >
        <Avatar className="mb-6 w-28 h-28">
          <AvatarImage src={`https://api.dicebear.com/6.x/bottts/svg?seed=${agent.id}`} />
          <AvatarFallback>{agent.name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <h3 className="mb-3 text-lg font-semibold text-white">{agent.name}</h3>
        <p className="flex-grow mb-5 text-sm text-gray-300">{agent.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {agent.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 text-[0.7rem] rounded-full bg-white/10 text-white/70">
              {skill}
            </span>
          ))}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="text-white transition-all duration-300 border-white/20 hover:bg-white/5 hover:border-white/30 hover:text-white"
        >
          <Eye className="w-4 h-4 mr-2" /> Demo
        </Button>
      </motion.div>
      <AgentModal agent={agent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
