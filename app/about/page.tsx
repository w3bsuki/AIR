import { BentoDemo } from "@/components/ui/bento-grid.demo"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 bg-black">
      {/* Hero Section */}
      <section className="py-24 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About AIDR.ai
            </h1>
            <p className="text-lg text-white/70 mb-8">
              We're building the future of AI development and research, making advanced AI technologies accessible and reliable for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-white/70">
              Discover the key features that make our platform unique and powerful
            </p>
          </div>

          <BentoDemo />
        </div>
      </section>
    </main>
  )
} 