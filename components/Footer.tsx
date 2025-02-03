import Link from "next/link"
import { Cpu, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center text-xl font-bold mb-4">
              <Cpu className="mr-2 text-primary" />
              <span className="text-gradient">AI Agent Market</span>
            </Link>
            <p className="text-gray-400">Empowering businesses with AI agents that never sleep.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  API
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AI Agent Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

