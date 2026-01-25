"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ForgotPasswordPage() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-grow flex items-center justify-center py-12 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="w-full max-w-md">
          <Card className="border-green-100 shadow-lg">
            <CardHeader className="space-y-1">
              <div className="flex items-center mb-2">
                <Link href="/auth" className="text-green-600 hover:text-green-700 flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  <span>Back to login</span>
                </Link>
              </div>
              <CardTitle className="text-2xl font-bold text-green-800">Forgot Password</CardTitle>
              <CardDescription>
                Enter your email address and we'll send you a link to reset your password.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input id="email" type="email" placeholder="m@example.com" className="pl-10" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send reset link"}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-4">
                  <div className="bg-green-50 text-green-700 p-4 rounded-md mb-4">
                    <p>Password reset link has been sent to your email address.</p>
                    <p className="text-sm mt-2">Please check your inbox and follow the instructions.</p>
                  </div>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-2">
                    Try another email
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-500">
                Remember your password?{" "}
                <Link href="/auth" className="text-green-600 hover:underline">
                  Back to login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}
