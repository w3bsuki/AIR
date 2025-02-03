import { AIChatComponent } from "@/components/ai-chat"

export default function AboutPage() {
  return (
    <main className="min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        <AIChatComponent />
      </div>
    </main>
  )
} 