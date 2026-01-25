"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { DashboardProducts } from "@/components/dashboard-products"
import { DashboardEquipment } from "@/components/dashboard-equipment"
import { DashboardTransactions } from "@/components/dashboard-transactions"
import { DashboardSettings } from "@/components/dashboard-settings"
import { useLanguage } from "@/components/language-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col md:flex-row flex-1">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 p-4 md:p-6 bg-muted/50">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="outline" className="gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
                <Badge className="ml-1 bg-green-600">3</Badge>
              </Button>
            </div>
          </div>
          {activeTab === "overview" && <DashboardOverview />}
          {activeTab === "products" && <DashboardProducts />}
          {activeTab === "equipment" && <DashboardEquipment />}
          {activeTab === "transactions" && <DashboardTransactions />}
          {activeTab === "settings" && <DashboardSettings />}
        </div>
      </div>
    </main>
  )
}
