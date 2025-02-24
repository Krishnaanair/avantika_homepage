"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#4d0313]">

      <header className="fixed top-0 w-full z-50 bg-[#4d0313]/80 backdrop-blur-sm border-b border-gold/10">

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-serif text-gold">
              AVANTIKA
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/new-arrivals" className="text-gold/90 hover:text-gold transition-colors">
                NEW ARRIVALS
              </Link>
              <Link href="/high-jewelry" className="text-gold/90 hover:text-gold transition-colors">
                HIGH JEWELRY
              </Link>
              <Link href="/shop" className="text-gold/90 hover:text-gold transition-colors">
                SHOP
              </Link>
              <Link href="/about" className="text-gold/90 hover:text-gold transition-colors">
                ABOUT
              </Link>
            </nav>
            <Button variant="ghost" size="icon" className="text-gold">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-screen">
          <Image
            src={`https://i.pinimg.com/736x/5d/22/6a/5d226ac0250e7026a8d866847e49aca0.jpg`}
            alt="Luxury jewelry piece"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-[#4d0313]/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-gold"
              >
                Timeless Elegance
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gold/90 max-w-2xl mx-auto"
              >
                Discover our curated collection of exquisite jewelry pieces
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button className="bg-gold hover:bg-gold/90 text-[#4d0313] rounded-none px-8 py-6 text-lg">
                  Explore Collection
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#4d0313]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-gold text-center mb-16">Featured Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-[400px] overflow-hidden"
                >
                  <Image
                    src={`https://i.pinimg.com/736x/02/2c/ce/022cce4455f29370704f56eaf8c798f3.jpg`}
                    alt={category.name}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    fill
                  />
                  <div className="absolute inset-0 bg-emerald-950/40 group-hover:bg-emerald-950/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link
                      href={category.href}
                      className="text-2xl font-serif text-gold hover:text-gold/90 transition-colors"
                    >
                      {category.name}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-emerald-900/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-serif text-gold">The Avantika Heritage</h2>
                <p className="text-gold/90 leading-relaxed">
                  For generations, Avantika has been crafting exquisite jewelry pieces that blend traditional artistry
                  with contemporary design. Each piece tells a story of unparalleled craftsmanship and timeless
                  elegance.
                </p>
                <Button
  className="bg-[#4d0313] text-gold border-[#4d0313] hover:bg-[#65041a] hover:border-[#65041a] rounded-none px-8 py-6"
>
  Discover Our Story
</Button>

              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative h-[600px]"
              >
                <Image
                  src={`https://i.pinimg.com/736x/29/c6/4d/29c64d268611ae01ecc857f1120e7893.jpg`}
                  alt="Jewelry craftsmanship"
                  className="object-cover"
                  fill
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#4d0313]/80 backdrop-blur-sm border-b border-gold/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gold font-serif text-lg mb-4">Contact</h3>
              <p className="text-gold/80">contact@avantika.com</p>
              <p className="text-gold/80">+91 88888 88888</p>
            </div>
            <div>
              <h3 className="text-gold font-serif text-lg mb-4">Customer Care</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/shipping" className="text-gold/80 hover:text-gold">
                    Shipping Information
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gold/80 hover:text-gold">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/care" className="text-gold/80 hover:text-gold">
                    Jewelry Care
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-serif text-lg mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/our-story" className="text-gold/80 hover:text-gold">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/craftsmanship" className="text-gold/80 hover:text-gold">
                    Craftsmanship
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="text-gold/80 hover:text-gold">
                    Sustainability
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-serif text-lg mb-4">Newsletter</h3>
              <p className="text-gold/80 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-emerald-900/20 border border-gold/20 text-gold placeholder:text-gold/50 px-4 py-2 focus:outline-none focus:border-gold"
              />
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gold/10 text-center text-gold/60">
            <p>&copy; {new Date().getFullYear()} Avantika. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const categories = [
  { name: "Necklaces", href: "/category/necklaces" },
  { name: "Earrings", href: "/category/earrings" },
  { name: "Rings", href: "/category/rings" },
  { name: "Bracelets", href: "/category/bracelets" },
]

