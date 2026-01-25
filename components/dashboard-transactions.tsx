"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  ArrowUpDown,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Eye,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
} from "lucide-react"

export function DashboardTransactions() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")

  // Mock transaction data
  const transactions = [
    {
      id: "TRX-001",
      date: "May 10, 2025",
      type: "sale",
      product: "Organic Rice",
      amount: 7000,
      quantity: "200 kg",
      buyer: "Devyani Organics",
      status: "completed",
    },
    {
      id: "TRX-002",
      date: "May 8, 2025",
      type: "sale",
      product: "Fresh Tomatoes",
      amount: 2000,
      quantity: "100 kg",
      buyer: "Fresh Mart",
      status: "completed",
    },
    {
      id: "TRX-003",
      date: "May 5, 2025",
      type: "purchase",
      product: "Fertilizer",
      amount: 1500,
      quantity: "5 bags",
      buyer: "Agro Supplies",
      status: "completed",
    },
    {
      id: "TRX-004",
      date: "May 3, 2025",
      type: "rental",
      product: "Tractor Rental",
      amount: 3000,
      quantity: "2 days",
      buyer: "Harshali Farms",
      status: "pending",
    },
    {
      id: "TRX-005",
      date: "Apr 28, 2025",
      type: "sale",
      product: "Wheat",
      amount: 5600,
      quantity: "200 kg",
      buyer: "Grain Processors Ltd",
      status: "completed",
    },
    {
      id: "TRX-006",
      date: "Apr 25, 2025",
      type: "purchase",
      product: "Seeds",
      amount: 2200,
      quantity: "10 packets",
      buyer: "Seed Suppliers",
      status: "failed",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" /> Completed
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
      case "failed":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-200 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" /> Failed
          </Badge>
        )
      default:
        return <Badge>{status}</Badge>
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "sale":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "purchase":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      case "rental":
        return <ShoppingCart className="h-4 w-4 text-blue-600" />
      default:
        return null
    }
  }

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Transactions</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                <p className="text-2xl font-bold">₹14,600</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Purchases</p>
                <p className="text-2xl font-bold">₹3,700</p>
              </div>
              <div className="h-12 w-12 bg-red-50 rounded-full flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Net Balance</p>
                <p className="text-2xl font-bold">₹10,900</p>
              </div>
              <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>View and manage your transaction history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search transactions..."
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
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="purchases">Purchases</TabsTrigger>
              <TabsTrigger value="rentals">Rentals</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">ID</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Product</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Amount</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Buyer/Seller</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4 font-medium">{transaction.id}</td>
                        <td className="py-3 px-4 text-gray-600">{transaction.date}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-1">
                            {getTypeIcon(transaction.type)}
                            <span className="capitalize">{transaction.type}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex flex-col">
                            <span className="font-medium">{transaction.product}</span>
                            <span className="text-xs text-gray-500">{transaction.quantity}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-medium">₹{transaction.amount.toLocaleString()}</td>
                        <td className="py-3 px-4 text-gray-600">{transaction.buyer}</td>
                        <td className="py-3 px-4">{getStatusBadge(transaction.status)}</td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4 text-gray-500" />
                          </Button>
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
