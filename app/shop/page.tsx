"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the Product and CartItem interfaces
export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export interface CartItem extends Product {
  quantity: number
}

// Sample products
const products: Product[] = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    price: 2999.99,
    image: "/ring.jpg",
  },
  {
    id: 2,
    name: "Pearl Necklace",
    price: 1299.99,
    image: "/necklace.jpg",
  },
  {
    id: 3,
    name: "Sapphire Earrings",
    price: 899.99,
    image: "/earrings.jpg",
  },
  {
    id: 4,
    name: "Gold Bracelet",
    price: 1499.99,
    image: "/bracelet.jpg",
  },
  {
    id: 5,
    name: "Emerald Pendant",
    price: 1999.99,
    image: "/pendant.jpg",
  },
  {
    id: 6,
    name: "Platinum Watch",
    price: 3499.99,
    image: "/watch.jpg",
  },
  {
    id: 7,
    name: "Ruby Brooch",
    price: 999.99,
    image: "/brooch.jpg",
  },
  {
    id: 8,
    name: "Silver Anklet",
    price: 499.99,
    image: "/anklet.jpg",
  },
]

export default function ShopPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // Function to add a product to the cart
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  return (
    <div className="min-h-screen bg-[#4d0313]">
      {/* Header */}
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

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px]">
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
                Shop Our Collection
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gold/90 max-w-2xl mx-auto"
              >
                Discover our curated collection of exquisite jewelry pieces
              </motion.p>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-lg bg-[#4d0313]/50 border border-gold/10 hover:border-gold/20 transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gold">{product.name}</h3>
                  <p className="mt-2 text-gold/90">${product.price.toFixed(2)}</p>
                  <Button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-gold text-[#4d0313] hover:bg-gold/90 transition-all"
                  >
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#4d0313]/80 backdrop-blur-sm border-t border-gold/10">
        <div className="container mx-auto px-4 py-12">
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
                className="w-full bg-[#4d0313]/20 border border-gold/20 text-gold placeholder:text-gold/50 px-4 py-2 focus:outline-none focus:border-gold"
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

