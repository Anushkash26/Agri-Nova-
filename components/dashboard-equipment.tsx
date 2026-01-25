"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter, Edit, Trash2, Eye, ArrowUpDown, CheckCircle, AlertCircle, Calendar } from "lucide-react"

export function DashboardEquipment() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")

  // Mock equipment data
  const equipments = [
    {
      id: 1,
      name: "Tractor - John Deere 5310",
      category: "Tractor",
      price: 1500,
      unit: "per day",
      status: "available",
      image: "/placeholder.svg?height=100&width=100",
      bookings: 8,
      nextAvailable: "Available Now",
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: "Rotavator",
      category: "Tillage Equipment",
      price: 800,
      unit: "per day",
      status: "booked",
      image: "/placeholder.svg?height=100&width=100",
      bookings: 5,
      nextAvailable: "Available from 15th May",
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      name: "Seed Drill",
      category: "Seeding Equipment",
      price: 600,
      unit: "per day",
      status: "available",
      image: "/placeholder.svg?height=100&width=100",
      bookings: 3,
      nextAvailable: "Available Now",
      lastUpdated: "3 days ago",
    },
    {
      id: 4,
      name: "Combine Harvester",
      category: "Harvesting Equipment",
      price: 3000,
      unit: "per day",
      status: "maintenance",
      image: "/placeholder.svg?height=100&width=100",
      bookings: 12,
      nextAvailable: "Available from 20th May",
      lastUpdated: "5 days ago",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> Available
          </Badge>
        )
      case "booked":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-200 flex items-center gap-1">
            <Calendar className="h-3 w-3" /> Booked
          </Badge>
        )
      case "maintenance":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 flex items-center gap-1"
          >
            <AlertCircle className="h-3 w-3" /> Maintenance
          </Badge>
        )
      default:
        return <Badge>{status}</Badge>
    }
  }

  const filteredEquipments = equipments.filter((equipment) =>
    equipment.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">My Equipment</h1>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" /> Add New Equipment
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Manage Equipment</CardTitle>
          <CardDescription>View, edit, and manage your equipment listings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search equipment..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4" />
              <span>Sort</span>
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Equipment</TabsTrigger>
              <TabsTrigger value="available">Available</TabsTrigger>
              <TabsTrigger value="booked">Booked</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Equipment</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Category</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Price</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Availability</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEquipments.map((equipment) => (
                      <tr key={equipment.id} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={equipment.image || "/placeholder.svg"}
                              alt={equipment.name}
                              className="h-10 w-10 rounded-md object-cover"
                            />
                            <span className="font-medium">{equipment.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{equipment.category}</td>
                        <td className="py-3 px-4">
                          <div>
                            <span className="font-medium">₹{equipment.price}</span>
                            <span className="text-xs text-gray-500 ml-1">{equipment.unit}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{getStatusBadge(equipment.status)}</td>
                        <td className="py-3 px-4">
                          <div className="flex flex-col">
                            <span className="text-gray-600">{equipment.nextAvailable}</span>
                            <span className="text-xs text-gray-500">{equipment.bookings} total bookings</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Eye className="h-4 w-4 text-gray-500" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="h-4 w-4 text-blue-500" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            {/* Similar content for other tabs */}
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Previous</Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="h-8 w-8 p-0">
              1
            </Button>
            <Button variant="outline" className="h-8 w-8 p-0">
              2
            </Button>
          </div>
          <Button variant="outline">Next</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
