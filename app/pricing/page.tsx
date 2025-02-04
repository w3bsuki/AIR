export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black/40 backdrop-blur-sm pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Pricing Plans
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>
        
        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ... pricing cards ... */}
        </div>
      </div>
    </div>
  )
} 