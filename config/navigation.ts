import { Brain, Code, FileText, Rocket, Users } from "lucide-react"

export const navigationConfig = [
  {
    id: 1,
    label: "Solutions",
    subMenus: [
      {
        title: "AI Solutions",
        items: [
          {
            label: "AI Development",
            description: "Custom AI solutions for your business",
            icon: Brain,
          },
          {
            label: "Research",
            description: "Cutting-edge AI research",
            icon: Code,
          },
        ],
      },
      {
        title: "Services",
        items: [
          {
            label: "Consulting",
            description: "Expert guidance and strategy",
            icon: Users,
          },
          {
            label: "Development",
            description: "End-to-end implementation",
            icon: Rocket,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Research",
    link: "/research",
  },
  {
    id: 3,
    label: "About",
    link: "/about",
  },
  {
    id: 4,
    label: "Blog",
    link: "/blog",
  },
] 