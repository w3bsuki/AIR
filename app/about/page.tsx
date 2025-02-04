import { AIChatComponent } from "@/components/ai-chat"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            About Us
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Leading the future of AI innovation
          </p>
        </div>
        
        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          {/* ... about content ... */}
        </div>
      </div>
    </div>
  )
} 