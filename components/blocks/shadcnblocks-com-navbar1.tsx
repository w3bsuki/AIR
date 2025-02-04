import { Book, Menu, Sunset, Trees, Zap } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const demoData = {
  logo: {
    url: "/",
    src: "/logo.png", // Update with your logo path
    alt: "AIDR.ai",
    title: "AIDR.ai",
  },
  menu: [
    {
      title: "AGENTS",
      url: "/agents",
      items: [
        {
          title: "Browse Agents",
          description: "Explore our marketplace of AI agents",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/agents",
        },
        {
          title: "Featured Agents",
          description: "Top performing AI agents",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/agents/featured",
        },
      ],
    },
    {
      title: "SOLUTIONS",
      url: "/solutions",
      items: [
        {
          title: "Enterprise",
          description: "AI solutions for businesses",
          icon: <Book className="size-5 shrink-0" />,
          url: "/solutions/enterprise",
        },
        {
          title: "Research",
          description: "Latest AI research and findings",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/solutions/research",
        },
      ],
    },
    {
      title: "ABOUT",
      url: "/about",
    },
  ],
  auth: {
    login: { text: "Sign In", url: "/login" },
    signup: { text: "Get Started", url: "/signup" },
  },
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "AIDR.ai",
    title: "AIDR.ai",
  },
  menu = [
    {
      title: "AGENTS",
      url: "/agents",
      items: [
        {
          title: "Browse Agents",
          description: "Explore our marketplace of AI agents",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/agents",
        },
        {
          title: "Featured Agents",
          description: "Top performing AI agents",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/agents/featured",
        },
      ],
    },
    {
      title: "SOLUTIONS",
      url: "/solutions",
      items: [
        {
          title: "Enterprise",
          description: "AI solutions for businesses",
          icon: <Book className="size-5 shrink-0" />,
          url: "/solutions/enterprise",
        },
        {
          title: "Research",
          description: "Latest AI research and findings",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/solutions/research",
        },
      ],
    },
    {
      title: "ABOUT",
      url: "/about",
    },
  ],
  auth = {
    login: { text: "Sign In", url: "/login" },
    signup: { text: "Get Started", url: "/signup" },
  },
}) => {
  return (
    <section className="py-4 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">{logo.title}</span>
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="ghost" size="sm" className="text-white hover:text-white/90">
              <a href={auth.login.url}>{auth.login.text}</a>
            </Button>
            <Button asChild size="sm" className="bg-white text-black hover:bg-white/90">
              <a href={auth.signup.url}>{auth.signup.text}</a>
            </Button>
          </div>
        </nav>
        {/* Mobile menu remains the same but with dark theme classes */}
      </div>
    </section>
  )
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-white">
        <NavigationMenuTrigger className="bg-transparent hover:bg-white/10">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3 bg-black/95 backdrop-blur-sm border border-white/10">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <a
                    className="flex select-none gap-4 rounded-md p-3 text-white hover:bg-white/10"
                    href={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold">{subItem.title}</div>
                      {subItem.description && (
                        <p className="text-sm text-white/70">{subItem.description}</p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <a
      key={item.title}
      className="text-white hover:text-white/90 px-4 py-2 text-sm"
      href={item.url}
    >
      {item.title}
    </a>
  )
}

// Mobile menu renderer remains the same but with dark theme classes...

export { Navbar1 } 