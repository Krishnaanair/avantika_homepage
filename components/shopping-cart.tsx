"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { CartItem } from "../shop/page"

interface ShoppingCartProps {
  cartItems: CartItem[]
}

export default function ShoppingCart({ cartItems }: ShoppingCartProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="text-white border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 hover:border-gray-600 transition-all"
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Cart ({cartItems.length})
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-900/90 backdrop-blur-lg border-gray-700 w-96">
        <SheetHeader>
          <SheetTitle className="font-playfair text-2xl text-white">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8">
          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 transition-all">
                Checkout
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

