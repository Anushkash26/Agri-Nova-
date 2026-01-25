"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Calendar,
  Package,
  Tractor,
  TrendingUp,
  Users,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
} from "lucide-react"

export function DashboardOverview() {
  const { t } = useLanguage()

  // Mock data
  const stats = [
    {
      title: "Total Sales",
      value: "₹24,500",
      change: "+12%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Active Listings",
      value: "8",
      change: "+2",
      trend: "up",
      icon: Package,
    },
    {
      title: "Equipment Rentals",
      value: "3",
      change: "-1",
      trend: "down",
      icon: Tractor,
    },
    {
      title: "Connections",
      value: "42",
      change: "+5",
      trend: "up",
      icon: Users,
    },
  ]

  const recentActivity = [
    {
      id: 1,
      title: "New order received",
      description: "Organic Rice - 200kg",
      time: "2 hours ago",
      type: "order",
    },
    {
      id: 2,
      title: "Equipment rental request",
      description: "Tractor - John Deere 5310",
      time: "Yesterday",
      type: "rental",
    },
    {
      id: 3,
      title: "Payment received",
      description: "₹12,500 for Organic Rice",
      time: "2 days ago",
      type: "payment",
    },
    {
      id: 4,
      title: "New message",
      description: "From Devyani Organics regarding tomatoes",
      time: "3 days ago",
      type: "message",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Farmer-Buyer Meet",
      date: "May 15, 2025",
      location: "Nashik",
    },
    {
      id: 2,
      title: "Agricultural Technology Expo",
      date: "May 22, 2025",
      location: "Mumbai",
    },
  ]

  const marketInsights = [
    {
      id: 1,
      crop: "Rice",
      price: "₹35/kg",
      trend: "up",
      change: "+₹2",
    },
    {
      id: 2,
      crop: "Wheat",
      price: "₹28/kg",
      trend: "up",
      change: "+₹1",
    },
    {
      id: 3,
      crop: "Tomatoes",
      price: "₹20/kg",
      trend: "down",
      change: "-₹5",
    },
    {
      id: 4,
      crop: "Potatoes",
      price: "₹15/kg",
      trend: "stable",
      change: "0",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <Button variant="outline" className="gap-2">
          <Bell className="h-4 w-4" />
          <span className="hidden sm:inline">Notifications</span>
          <Badge className="ml-1 bg-green-600">3</Badge>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <div className="flex items-center mt-1">
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-4 w-4 text-green-600 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-600 mr-1" />
                  )}
                  <span className={`text-xs font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest transactions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    {activity.type === "order" && <Package className="h-4 w-4 text-primary" />}
                    {activity.type === "rental" && <Tractor className="h-4 w-4 text-primary" />}
                    {activity.type === "payment" && <TrendingUp className="h-4 w-4 text-primary" />}
                    {activity.type === "message" && <Users className="h-4 w-4 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-medium text-sm">{activity.title}</p>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-2 text-green-600">
              View All Activity
            </Button>
          </CardContent>
        </Card>

        {/* Market Insights */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Market Insights</CardTitle>
            <CardDescription>Current crop prices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {marketInsights.map((insight) => (
                <div
                  key={insight.id}
                  className="flex items-center justify-between pb-2 border-b border-gray-100 last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <BarChart className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{insight.crop}</p>
                      <p className="text-xs text-gray-500">Current Price</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm">{insight.price}</p>
                    <div className="flex items-center justify-end">
                      {insight.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
                      ) : insight.trend === "down" ? (
                        <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
                      ) : (
                        <span className="h-3 w-3 mr-1">-</span>
                      )}
                      <span
                        className={`text-xs font-medium ${
                          insight.trend === "up"
                            ? "text-green-600"
                            : insight.trend === "down"
                              ? "text-red-600"
                              : "text-gray-500"
                        }`}
                      >
                        {insight.change}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-2 text-green-600">
              View Full Market Report
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Events you might be interested in</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{event.title}</p>
                    <p className="text-xs text-gray-500">
                      {event.date} • {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-2 text-green-600">
              View All Events
            </Button>
          </CardContent>
        </Card>

        {/* Weather Forecast */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Weather Forecast</CardTitle>
            <CardDescription>Pune, Maharashtra</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                  {/* Weather icon would go here */}
                  <span className="text-xl">☀️</span>
                </div>
                <div>
                  <p className="text-2xl font-bold">32°C</p>
                  <p className="text-sm text-gray-500">Sunny</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">Humidity: 65%</p>
                <p className="text-sm font-medium">Wind: 12 km/h</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              {["Mon", "Tue", "Wed", "Thu"].map((day, i) => (
                <div key={day} className="p-2">
                  <p className="text-xs font-medium">{day}</p>
                  <p className="text-sm my-1">{["☀️", "⛅", "🌧️", "☀️"][i]}</p>
                  <p className="text-xs">{[32, 30, 28, 31][i]}°C</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tips & Alerts */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Tips & Alerts</CardTitle>
            <CardDescription>Important information for you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Rainfall Alert</p>
                  <p className="text-xs text-yellow-700">
                    Heavy rainfall expected in your region next week. Plan your harvesting accordingly.
                  </p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-md p-3 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-green-800">Price Alert</p>
                  <p className="text-xs text-green-700">
                    Rice prices are trending upward. Consider holding your stock for better returns.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
