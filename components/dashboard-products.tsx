"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Filter, Edit, Trash2, Eye, ArrowUpDown, CheckCircle, Clock, AlertCircle } from "lucide-react"

export function DashboardProducts() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Organic Rice",
      category: "Grains",
      price: 35,
      unit: "per kg",
      quantity: 500,
      status: "active",
      image: "/placeholder.svg?height=100&width=100",
      views: 120,
      inquiries: 8,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 20,
      unit: "per kg",
      quantity: 100,
      status: "active",
      image: "/placeholder.svg?height=100&width=100",
      views: 85,
      inquiries: 5,
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      name: "Wheat",
      category: "Grains",
      price: 28,
      unit: "per kg",
      quantity: 1000,
      status: "active",
      image: "/placeholder.svg?height=100&width=100",
      views: 95,
      inquiries: 7,
      lastUpdated: "3 days ago",
    },
    {
      id: 4,
      name: "Organic Potatoes",
      category: "Vegetables",
      price: 15,
      unit: "per kg",
      quantity: 300,
      status: "pending",
      image: "/placeholder.svg?height=100&width=100",
      views: 0,
      inquiries: 0,
      lastUpdated: "Just now",
    },
    {
      id: 5,
      name: "Sugarcane",
      category: "Cash Crops",
      price: 12,
      unit: "per kg",
      quantity: 2000,
      status: "inactive",
      image: "/placeholder.svg?height=100&width=100",
      views: 45,
      inquiries: 2,
      lastUpdated: "1 month ago",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> Active
          </Badge>
        )
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 flex items-center gap-1"
          >
            <Clock className="h-3 w-3" /> Pending
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> Inactive
          </Badge>
        )
      default:
        return <Badge>{status}</Badge>
    }
  }

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">My Products</h1>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus className="mr-2 h-4 w-4" /> Add New Product
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Manage Products</CardTitle>
          <CardDescription>View, edit, and manage your product listings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
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
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Product</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Category</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Price</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Quantity</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Views</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product) => (
                      <tr key={product.id} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="h-10 w-10 rounded-md object-cover"
                            />
                            <span className="font-medium">{product.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{product.category}</td>
                        <td className="py-3 px-4">
                          <div>
                            <span className="font-medium">₹{product.price}</span>
                            <span className="text-xs text-gray-500 ml-1">{product.unit}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{product.quantity} kg</td>
                        <td className="py-3 px-4">{getStatusBadge(product.status)}</td>
                        <td className="py-3 px-4">
                          <div className="flex flex-col">
                            <span className="text-gray-600">{product.views} views</span>
                            <span className="text-xs text-gray-500">{product.inquiries} inquiries</span>
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

            <TabsContent value="active">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Product</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Category</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Price</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Quantity</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Views</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts
                      .filter((product) => product.status === "active")
                      .map((product) => (
                        <tr key={product.id} className="border-b border-border hover:bg-muted/50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="h-10 w-10 rounded-md object-cover"
                              />
                              <span className="font-medium">{product.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{product.category}</td>
                          <td className="py-3 px-4">
                            <div>
                              <span className="font-medium">₹{product.price}</span>
                              <span className="text-xs text-gray-500 ml-1">{product.unit}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{product.quantity} kg</td>
                          <td className="py-3 px-4">
                            <div className="flex flex-col">
                              <span className="text-gray-600">{product.views} views</span>
                              <span className="text-xs text-gray-500">{product.inquiries} inquiries</span>
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
            <Button variant="outline" className="h-8 w-8 p-0">
              3
            </Button>
          </div>
          <Button variant="outline">Next</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
