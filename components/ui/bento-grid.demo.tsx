import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const features = [
  {
    Icon: FileTextIcon,
    name: "Advanced AI Models",
    description: "Access state-of-the-art AI models trained on diverse datasets.",
    href: "/",
    cta: "Learn more",
    background: (
      <img 
        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" 
        className="absolute -right-20 -top-20 opacity-60 w-64 h-64 object-cover"
        alt="AI visualization"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Research Platform",
    description: "Collaborate with researchers worldwide on cutting-edge AI projects.",
    href: "/",
    cta: "Learn more",
    background: (
      <img 
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
        className="absolute -right-20 -top-20 opacity-60 w-64 h-64 object-cover"
        alt="Research collaboration"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Global Network",
    description: "Connect with AI experts and developers across the globe.",
    href: "/",
    cta: "Learn more",
    background: (
      <img 
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" 
        className="absolute -right-20 -top-20 opacity-60 w-64 h-64 object-cover"
        alt="Global network"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Real-time Updates",
    description: "Stay updated with the latest developments in AI research.",
    href: "/",
    cta: "Learn more",
    background: (
      <img 
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
        className="absolute -right-20 -top-20 opacity-60 w-64 h-64 object-cover"
        alt="Real-time updates"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Smart Notifications",
    description: "Get intelligent alerts about research opportunities and collaborations.",
    href: "/",
    cta: "Learn more",
    background: (
      <img 
        src="https://images.unsplash.com/photo-1551434678-e076c223a692" 
        className="absolute -right-20 -top-20 opacity-60 w-64 h-64 object-cover"
        alt="Smart notifications"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
]

function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}

export { BentoDemo } 