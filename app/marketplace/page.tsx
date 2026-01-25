"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ArrowUpDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function MarketplacePage() {
  const { t } = useLanguage()
  const [displayedCount, setDisplayedCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  const products = [
    {
      id: 1,
      name: "Organic Rice",
      category: "Grains",
      price: 35,
      unit: "per kg",
      quantity: 500,
      location: "Pune, Maharashtra",
      image: "/product-rice.jpg",
      seller: "Anushka Farms",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Fresh Tomatoes",
      category: "Vegetables",
      price: 20,
      unit: "per kg",
      quantity: 100,
      location: "Nashik, Maharashtra",
      image: "/product-tomatoes.jpg",
      seller: "Fresh Valley",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Wheat Grain",
      category: "Grains",
      price: 25,
      unit: "per kg",
      quantity: 1000,
      location: "Indore, Madhya Pradesh",
      image: "/product-wheat.jpg",
      seller: "Golden Harvest",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Potatoes",
      category: "Vegetables",
      price: 15,
      unit: "per kg",
      quantity: 500,
      location: "Belgaum, Karnataka",
      image: "/product-potatoes.jpg",
      seller: "Vegetable Hub",
      rating: 4.3,
    },
    {
      id: 5,
      name: "Red Onions",
      category: "Vegetables",
      price: 18,
      unit: "per kg",
      quantity: 200,
      location: "Nashik, Maharashtra",
      image: "/product-onions.jpg",
      seller: "Organic Gardens",
      rating: 4.4,
    },
    {
      id: 6,
      name: "Fresh Cucumbers",
      category: "Vegetables",
      price: 22,
      unit: "per kg",
      quantity: 150,
      location: "Pune, Maharashtra",
      image: "/product-cucumber.jpg",
      seller: "Farm Fresh",
      rating: 4.1,
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Marketplace Header */}
      <section className="bg-green-50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-green-800 mb-4">{t("marketplace.title")}</h1>
              <p className="text-gray-600">{t("marketplace.subtitle")}</p>
            </div>
            <Button variant="outline" className="whitespace-nowrap text-sm bg-transparent">
              {t("watchTutorial")}
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder={t("marketplace.search")} className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              <span>{t("marketplace.filters")}</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowUpDown className="h-4 w-4" />
              <span>{t("marketplace.sort")}</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Marketplace Content */}
      <section className="py-8 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="buy" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="buy">{t("marketplace.tabs.buy")}</TabsTrigger>
              <TabsTrigger value="sell">{t("marketplace.tabs.sell")}</TabsTrigger>
              <TabsTrigger value="ai-price">{t("marketplace.tabs.ai")}</TabsTrigger>
            </TabsList>

            <TabsContent value="buy" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.slice(0, displayedCount).map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{product.name}</CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {product.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-green-600">₹{product.price}</p>
                          <p className="text-sm text-gray-500">{product.unit}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Quantity:</span> {product.quantity} kg
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Location:</span> {product.location}
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Seller:</span> {product.seller}
                        </p>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-sm ${i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        {t("marketplace.contactSeller")}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                {displayedCount < products.length && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsLoading(true)
                      setTimeout(() => {
                        setDisplayedCount((prev) => Math.min(prev + 3, products.length))
                        setIsLoading(false)
                      }, 500)
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? t("loading") : t("loadMore")}
                  </Button>
                )}
              </div>
            </TabsContent>

            <TabsContent value="sell">
              <Card>
                <CardHeader>
                  <CardTitle>{t("marketplace.tabs.sell")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="product-name" className="text-sm font-medium">
                          Product Name
                        </label>
                        <Input id="product-name" placeholder="e.g., Organic Rice" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="category" className="text-sm font-medium">
                          Category
                        </label>
                        <Input id="category" placeholder="e.g., Grains, Vegetables" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="price" className="text-sm font-medium">
                          Price (₹)
                        </label>
                        <Input id="price" type="number" placeholder="Price per unit" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="unit" className="text-sm font-medium">
                          Unit
                        </label>
                        <Input id="unit" placeholder="e.g., per kg, per quintal" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="quantity" className="text-sm font-medium">
                          Quantity Available
                        </label>
                        <Input id="quantity" type="number" placeholder="Total quantity available" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-medium">
                          Location
                        </label>
                        <Input id="location" placeholder="e.g., Pune, Maharashtra" />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="description" className="text-sm font-medium">
                          Description
                        </label>
                        <textarea
                          id="description"
                          className="w-full min-h-[100px] px-3 py-2 border rounded-md"
                          placeholder="Describe your product, quality, harvesting date, etc."
                        ></textarea>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">Product Images</label>
                        <div className="border-2 border-dashed rounded-md p-6 text-center">
                          <p className="text-gray-500">Drag and drop images here, or click to select files</p>
                          <Button variant="outline" className="mt-2 bg-transparent">
                            Upload Images
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">List Product</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai-price">
              <Card>
                <CardHeader>
                  <CardTitle>{t("marketplace.tabs.ai")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{t("features.ai.desc")}</p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="crop-type" className="text-sm font-medium">
                          Crop Type
                        </label>
                        <Input id="crop-type" placeholder="e.g., Rice, Wheat, Tomatoes" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="crop-quality" className="text-sm font-medium">
                          Quality
                        </label>
                        <Input id="crop-quality" placeholder="e.g., Organic, Premium, Standard" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="crop-quantity" className="text-sm font-medium">
                          Quantity (kg)
                        </label>
                        <Input id="crop-quantity" type="number" placeholder="Total quantity" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="crop-location" className="text-sm font-medium">
                          Location
                        </label>
                        <Input id="crop-location" placeholder="e.g., Pune, Maharashtra" />
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">Get Price Suggestion</Button>
                  </form>

                  {/* Sample AI Price Suggestion Result */}
                  <div className="mt-8 p-4 bg-green-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Price Suggestion Results</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Suggested Price Range:</span>
                        <span className="font-medium">₹28 - ₹32 per kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Current Market Average:</span>
                        <span className="font-medium">₹30 per kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price Trend:</span>
                        <span className="font-medium text-green-600">Increasing ↑</span>
                      </div>
                      <div className="mt-4 text-sm text-gray-600">
                        <p>
                          <strong>AI Analysis:</strong> Based on current market trends, your crop quality, and location,
                          we suggest listing your product at ₹31 per kg for optimal returns. Market prices are expected
                          to rise in the next 2 weeks.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
