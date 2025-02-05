export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "AIDR.ai",
  description: "AI Development & Research - Building the future of AI",
  url: "https://aidr.ai",
  ogImage: "https://aidr.ai/og.jpg",
  links: {
    twitter: "https://twitter.com/aidr_ai",
    github: "https://github.com/aidr-ai",
    linkedin: "https://linkedin.com/company/aidr-ai",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  features: [
    {
      title: "AI Development",
      description: "Custom AI solutions for your business needs",
      icon: "brain",
    },
    {
      title: "Research",
      description: "Cutting-edge AI research and development",
      icon: "microscope",
    },
    {
      title: "Consulting",
      description: "Expert AI consulting services",
      icon: "lightbulb",
    },
  ],
} 