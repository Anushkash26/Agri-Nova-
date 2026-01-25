"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function EquipmentPage() {
  const { t } = useLanguage()
  const [displayedCount, setDisplayedCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  const equipments = [
    {
      id: 1,
      name: "Tractor John Deere 5310",
      category: "Tractor",
      price: 1500,
      unit: "per day",
      location: "Pune, Maharashtra",
      image: "/equipment-tractor.jpg",
      owner: "Sakshi Farms",
      rating: 4.8,
      availability: "Available Now",
    },
    {
      id: 2,
      name: "Rotavator",
      category: "Tillage Equipment",
      price: 800,
      unit: "per day",
      location: "Nashik, Maharashtra",
      image: "/equipment-plow.jpg",
      owner: "Anushka Agro Services",
      rating: 4.5,
      availability: "Available from 15th May",
    },
    {
      id: 3,
      name: "Seed Drill",
      category: "Seeding Equipment",
      price: 600,
      unit: "per day",
      location: "Nagpur, Maharashtra",
      image: "/equipment-seeder.jpg",
      owner: "Devyani Equipment Rentals",
      rating: 4.3,
      availability: "Available Now",
    },
    {
      id: 4,
      name: "Combine Harvester",
      category: "Harvesting Equipment",
      price: 3000,
      unit: "per day",
      location: "Kolhapur, Maharashtra",
      image: "/equipment-harvester.jpg",
      owner: "Harshali Mechanization",
      rating: 4.7,
      availability: "Available from 20th May",
    },
    {
      id: 5,
      name: "Water Pump Set",
      category: "Irrigation Equipment",
      price: 400,
      unit: "per day",
      location: "Solapur, Maharashtra",
      image: "/equipment-thresher.jpg",
      owner: "Agri-nova Partner",
      rating: 4.2,
      availability: "Available Now",
    },
    {
      id: 6,
      name: "Sprayer",
      category: "Plant Protection",
      price: 300,
      unit: "per day",
      location: "Ahmednagar, Maharashtra",
      image: "/equipment-sprayer.jpg",
      owner: "Farmer Cooperative",
      rating: 4.4,
      availability: "Available Now",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Equipment Header */}
      <section className="bg-green-50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{t("equipment.title")}</h1>
              <p className="text-gray-600 text-sm md:text-base">
                {t("equipment.subtitle")}
              </p>
            </div>
            <Button variant="outline" className="whitespace-nowrap text-sm bg-transparent">
              {t("watchTutorial")}
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder={t("equipment.searchPlaceholder")} className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Calendar className="h-4 w-4" />
              <span>Availability</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <MapPin className="h-4 w-4" />
              <span>Location</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Equipment Content */}
      <section className="py-8 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="rent" className="w-full">
            <TabsList className="mb-6 flex flex-col sm:flex-row">
              <TabsTrigger value="rent">{t("equipment.rentEquipment")}</TabsTrigger>
              <TabsTrigger value="list">{t("equipment.listEquipment")}</TabsTrigger>
            </TabsList>

            <TabsContent value="rent" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipments.slice(0, displayedCount).map((equipment) => (
                  <Card key={equipment.id} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={equipment.image || "/placeholder.svg"}
                        alt={equipment.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{equipment.name}</CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {equipment.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-green-600">₹{equipment.price}</p>
                          <p className="text-sm text-gray-500">{equipment.unit}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Location:</span> {equipment.location}
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Owner:</span> {equipment.owner}
                        </p>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Availability:</span> {equipment.availability}
                        </p>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`text-sm ${i < Math.floor(equipment.rating) ? "text-yellow-500" : "text-gray-300"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-1">({equipment.rating})</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-green-600 hover:bg-green-700">{t("equipment.bookNow")}</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                {displayedCount < equipments.length && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsLoading(true)
                      setTimeout(() => {
                        setDisplayedCount((prev) => Math.min(prev + 3, equipments.length))
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

            <TabsContent value="list">
              <Card>
                <CardHeader>
                  <CardTitle>{t("equipment.listEquipmentForm")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="equipment-name" className="text-sm font-medium">
                          Equipment Name
                        </label>
                        <Input id="equipment-name" placeholder="e.g., Tractor John Deere 5310" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="category" className="text-sm font-medium">
                          Category
                        </label>
                        <Input id="category" placeholder="e.g., Tractor, Harvester" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="price" className="text-sm font-medium">
                          Rental Price (₹)
                        </label>
                        <Input id="price" type="number" placeholder="Price per day" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="unit" className="text-sm font-medium">
                          Rental Unit
                        </label>
                        <Input id="unit" placeholder="e.g., per day, per hour" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-medium">
                          Location
                        </label>
                        <Input id="location" placeholder="e.g., Pune, Maharashtra" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="availability" className="text-sm font-medium">
                          Availability
                        </label>
                        <Input id="availability" placeholder="e.g., Available Now, From 15th May" />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="description" className="text-sm font-medium">
                          Description
                        </label>
                        <textarea
                          id="description"
                          className="w-full min-h-[100px] px-3 py-2 border rounded-md"
                          placeholder="Describe your equipment, specifications, condition, etc."
                        ></textarea>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">Equipment Images</label>
                        <div className="border-2 border-dashed rounded-md p-6 text-center">
                          <p className="text-gray-500">Drag and drop images here, or click to select files</p>
                          <Button variant="outline" className="mt-2 bg-transparent">
                            Upload Images
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">List Equipment</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
