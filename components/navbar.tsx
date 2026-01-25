"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Globe, User, LayoutDashboard } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { VoiceSupport } from "@/components/voice-support"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const pathname = usePathname()
  const { t, language, setLanguage, availableLanguages } = useLanguage()
  const isMobile = useMobile()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/marketplace", label: t("nav.marketplace") },
    { href: "/equipment", label: t("nav.equipment") },
    { href: "/community", label: t("nav.community") },
    { href: "/resources", label: t("nav.resources") },
  ]

  const handleVoiceCommand = (text: string) => {
    // Simple voice command handling
    const lowerText = text.toLowerCase()

    // Navigate to pages based on voice commands
    if (lowerText.includes("home") || lowerText.includes("homepage")) {
      window.location.href = "/"
    } else if (lowerText.includes("marketplace") || lowerText.includes("market")) {
      window.location.href = "/marketplace"
    } else if (lowerText.includes("equipment") || lowerText.includes("rental")) {
      window.location.href = "/equipment"
    } else if (lowerText.includes("community") || lowerText.includes("forum")) {
      window.location.href = "/community"
    } else if (lowerText.includes("resources") || lowerText.includes("learning")) {
      window.location.href = "/resources"
    } else if (lowerText.includes("dashboard")) {
      window.location.href = "/dashboard"
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/agri-nova-logo.jpg" 
              alt="Agri-Nova Logo" 
              width={40} 
              height={40}
              className="h-10 w-auto rounded-lg"
              priority
            />
            <span className="hidden sm:inline text-lg font-bold text-primary tracking-tight">Agri-Nova</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          <VoiceSupport onSpeechResult={handleVoiceCommand} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {availableLanguages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={language === lang.code ? "bg-muted" : ""}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => (window.location.href = "/dashboard")}>
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => (window.location.href = "/auth")}>
                <User className="h-4 w-4 mr-2" />
                Login / Register
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        pathname === item.href ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="/dashboard"
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
