"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import { useAuth } from "./auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await login(email, password)
      toast({
        title: "Welcome back",
        description: "Successfully logged in to your account.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md"
    >
      <div className="bg-background/10 backdrop-blur-lg p-8 rounded-lg shadow-xl">
        <div className="text-center mb-8">
          <h1 className="font-playfair text-4xl font-bold text-gold-300 mb-2" style={{ color: "#FFD700" }}>AVANTIKA</h1> {/* Set explicit color */}
          <p className="text-gold-300/80 font-light">Enter your credentials to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gold-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background/50 text-gold-300 placeholder:text-gold-300/50 focus:ring-gold-300/20"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gold-300">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background/50 text-gold-300 placeholder:text-gold-300/50 focus:border-gold-300 focus:ring-gold-300/20 pr-10"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gold-300/50 hover:text-gold-300 focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gold-300 text-red-950 hover:bg-gold-400 transition-all duration-300 font-medium tracking-wide"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-gold-300/70 hover:text-gold-300 text-sm transition-colors">
            Forgot your password?
          </a>
        </div>
      </div>
    </motion.div>
  )
}
