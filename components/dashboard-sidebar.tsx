"use client"

import { useLanguage } from "@/components/language-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Package, Tractor, Settings, LogOut, ShoppingCart } from "lucide-react"

interface DashboardSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  const { t } = useLanguage()

  // Mock user data
  const user = {
    name: "Anushka Sharma",
    role: "Farmer",
    avatar: "/placeholder.svg?height=40&width=40",
  }

  const menuItems = [
    {
      id: "overview",
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      id: "products",
      label: "My Products",
      icon: Package,
    },
    {
      id: "equipment",
      label: "My Equipment",
      icon: Tractor,
    },
    {
      id: "transactions",
      label: "Transactions",
      icon: ShoppingCart,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ]

  const handleLogout = () => {
    // Handle logout logic here
    window.location.href = "/"
  }

  return (
    <div className="w-full md:w-64 bg-background border-r border-border">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.role}</p>
          </div>
        </div>
      </div>

      <nav className="p-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeTab === item.id ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-2 mt-auto border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-muted-foreground hover:bg-muted"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}
