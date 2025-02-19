"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LoginSignupProps {
  onLogin: (email: string, password: string) => void
  isLoggedIn: boolean
}

export default function LoginSignup({ onLogin, isLoggedIn }: LoginSignupProps) {
  const [isSignup, setIsSignup] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSignup) {
      // Implement signup logic
    } else {
      onLogin(email, password)
    }
  }

  if (isLoggedIn) {
    return (
      <div style={{ color: "#fff7a2" }} className="text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome to Avantika Jewelry</h2>
        <p>You are now logged in. Enjoy your shopping experience!</p>
      </div>
    )
  }

  return (
    <div
      style={{ backgroundColor: "rgba(71, 13, 20, 0.4)" }} // Added opacity to the background
      className="p-8 rounded-lg shadow-lg max-w-md w-full backdrop-blur-sm" // Added backdrop blur for a frosted glass effect
    >
      <h2 style={{ color: "#fff7a2" }} className="text-3xl font-playfair font-bold mb-8 text-center tracking-wide">
        {isSignup ? "Create an Account" : "Welcome Back"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignup && (
          <div>
            <Label htmlFor="name" style={{ color: "#fff7a2", opacity: 0.9 }}>
              Name
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                backgroundColor: "rgba(88, 12, 20, 0.8)",
                color: "#fff7a2",
                borderColor: "rgba(255, 247, 162, 0.5)",
              }}
              className="border"
              required
            />
          </div>
        )}
        <div>
          <Label htmlFor="email" style={{ color: "#fff7a2", opacity: 0.9 }}>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              backgroundColor: "rgba(88, 12, 20, 0.8)",
              color: "#fff7a2",
              borderColor: "rgba(255, 247, 162, 0.5)",
            }}
            className="border"
            required
          />
        </div>
        <div>
          <Label htmlFor="password" style={{ color: "#fff7a2", opacity: 0.9 }}>
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              backgroundColor: "rgba(88, 12, 20, 0.2)",
              color: "#fff7a2",
              borderColor: "rgba(255, 247, 162, 0.5)",
            }}
            className="border"
            required
          />
        </div>
        {isSignup && (
          <div>
            <Label htmlFor="confirmPassword" style={{ color: "#fff7a2", opacity: 0.9 }}>
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                backgroundColor: "rgba(88, 12, 20, 0.8)",
                color: "#fff7a2",
                borderColor: "rgba(255, 247, 162, 0.5)",
              }}
              className="border"
              required
            />
          </div>
        )}
        <Button
          type="submit"
          style={{ backgroundColor: "rgba(255, 247, 162, 0.9)", color: "#580c14" }}
          className="w-full hover:bg-yellow-200 hover:opacity-90 font-lato tracking-wider uppercase text-sm transition-opacity"
        >
          {isSignup ? "Sign Up" : "Login"}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Button
          variant="link"
          onClick={() => setIsSignup(!isSignup)}
          style={{ color: "rgba(255, 247, 162, 0.9)" }}
          className="hover:text-yellow-200 hover:opacity-80 transition-opacity"
        >
          {isSignup ? "Already have an account? Login" : "Create an Account"}
        </Button>
      </div>
      <div className="mt-6">
        <div className="flex justify-center space-x-4"></div>
      </div>
    </div>
  )
}

