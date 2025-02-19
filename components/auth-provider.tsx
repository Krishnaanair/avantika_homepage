"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"
import { useRouter } from "next/navigation"

interface AuthContextType {
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  const login = async (email: string, password: string) => {
    // Implement actual authentication here
    setIsAuthenticated(true)
    router.push("/shop")
  }

  const logout = () => {
    setIsAuthenticated(false)
    router.push("/login")
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

