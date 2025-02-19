"use client"

import { useState } from "react"
import LoginSignup from "./login-signup"
import ShoppingCart from "./shopping-cart"

export default function LuxuryShoppingApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleLogin = (email: string, password: string) => {
    // Implement actual login logic here
    setIsLoggedIn(true)
  }

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  return (
    <div className="flex flex-col md:flex-row h-screen" style={{ backgroundColor: "#580c14" }}>
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
        <LoginSignup onLogin={handleLogin} isLoggedIn={isLoggedIn} />
      </div>
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center" style={{ backgroundColor: "#6d1019" }}>
        <ShoppingCart cartItems={cartItems} onAddToCart={handleAddToCart} />
      </div>
    </div>
  )
}

export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export interface CartItem extends Product {
  quantity: number
}

