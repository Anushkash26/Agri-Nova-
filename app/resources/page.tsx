"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Play, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ResourcesPage() {
  const { t, language } = useLanguage() // Declare the language variable here
  const [displayedTutorials, setDisplayedTutorials] = useState(6)
  const [isLoadingTutorials, setIsLoadingTutorials] = useState(false)
  // Sample learning resources
  const tutorials = [
    {
      id: 1,
      title: "Organic Farming Basics",
      description: "Learn how to get started with organic farming techniques.",
      category: "Organic",
      level: "Beginner",
      duration: "3:50 min",
      image: "https://i.ytimg.com/vi/uC81WpKlykI/maxresdefault.jpg",
      youtubeLink: "https://youtu.be/WhOrIUlrnPo?si=4AU0ew2aNBwt0UzM",
    },
    {
      id: 2,
      title: "Drip Irrigation Setup",
      description: "Step-by-Step guide for drip irrigation.",
      category: "Irrigation",
      level: "Intermediate",
      duration: "4:40 min",
      image: "https://i.ytimg.com/vi/oVIM3WHzz5M/maxresdefault.jpg",
      youtubeLink: "https://youtu.be/uDBB7EzVD_M?si=NdFQguSd530OjXts",
    },
    {
      id: 3,
      title: "Modern Tractor Maintenance",
      description: "Learn how to maintain and troubleshoot common issues with modern tractors.",
      category: "Equipment",
      duration: "60 min",
      level: "Advanced",
      image: "https://www.annmariejohn.com/wp-content/uploads/2022/10/Tractor-Maintenance-Tips.jpg",
      youtubeLink: "https://youtu.be/ylv9E1xHsZQ",
    },
    {
      id: 4,
      title: "Crop Rotation Strategies",
      description: "Maximize soil health and crop yields with effective rotation strategies.",
      category: "Crop Management",
      duration: "1:25 min",
      level: "Intermediate",
      image: "https://th.bing.com/th/id/OIP.Cuv3kJaU02ICXQVcurXnhAHaEK?rs=1&pid=ImgDetMain",
      youtubeLink: "https://youtu.be/vkYEmC5xDDE",
    },
    {
      id: 5,
      title: "Multilayer Farming",
      description: "Growing different crops at various heights on the same land for better yield.",
      category: "Sustainable Farming",
      duration: "9:22 min",
      level: "Intermediate",
      image: "https://geopard.tech/wp-content/uploads/2022/06/75-min.jpg",
      youtubeLink: "https://youtu.be/c5pekMjAapo?si=nqyl-pomM_FETdaM",
    },
    {
      id: 6,
      title: "How to Start Small Farming",
      description: "A step by step guide for starting a small farm",
      category: "Farming",
      duration: "17:56 min",
      level: "Beginner",
      image: "https://i.ytimg.com/vi/heTxEsrPVdQ/maxresdefault.jpg",
      youtubeLink: "https://youtu.be/heTxEsrPVdQ",
    },
  ]

  // Sample government schemes with official links
  const schemes = [
    {
      id: 1,
      title: "PM-KISAN",
      description:
        "Income support of ₹6,000 per year to all farmer families across the country in three equal installments.",
      eligibility: "All landholding farmers' families with cultivable land.",
      deadline: "Ongoing",
      link: "https://pmkisan.gov.in/",
    },
    {
      id: 2,
      title: "Pradhan Mantri Fasal Bima Yojana",
      description: "Provides financial support to farmers suffering crop loss/damage arising out of unforeseen events.",
      eligibility: "All farmers growing notified crops in notified areas.",
      deadline: "Seasonal application",
      link: "https://pmfby.gov.in/",
    },
    {
      id: 3,
      title: "Micro Irrigation Fund",
      description: "Promotes water conservation and improves water use efficiency in agriculture.",
      eligibility: "Farmers interested in implementing micro-irrigation systems.",
      deadline: "Ongoing",
      link: "https://pmksy.gov.in/microirrigation/index.aspx",
    },
    {
      id: 4,
      title: "Agriculture Infrastructure Fund",
      description: "Financing facility for investment in viable projects for post-harvest management infrastructure.",
      eligibility: "Farmers, FPOs, PACS, Marketing Cooperative Societies, etc.",
      deadline: "2023-2029",
      link: "https://agriinfra.dac.gov.in/",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Resources Header */}
      <section className="bg-green-50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{t("resources.title")}</h1>
              <p className="text-gray-600 text-sm md:text-base">
                {t("resources.subtitle")}
              </p>
            </div>
            <Button variant="outline" className="whitespace-nowrap text-sm bg-transparent">
              {t("watchTutorial")}
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search resources..." className="pl-10 text-sm" />
          </div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-8 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="tutorials" className="w-full">
            <TabsList className="mb-6 flex flex-col sm:flex-row">
              <TabsTrigger value="tutorials">{t("resources.tutorialsVideos")}</TabsTrigger>
              <TabsTrigger value="schemes">{t("resources.governmentSchemes")}</TabsTrigger>
              <TabsTrigger value="expert">{t("resources.expertAdvice")}</TabsTrigger>
            </TabsList>

            <TabsContent value="tutorials" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.slice(0, displayedTutorials).map((tutorial) => (
                  <Card key={tutorial.id} className="overflow-hidden">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={tutorial.image || "/placeholder.svg?height=200&width=300"}
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white bg-green-600 bg-opacity-80 hover:bg-green-700 hover:bg-opacity-90 rounded-full"
                          onClick={() => window.open(tutorial.youtubeLink, "_blank")}
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base md:text-lg">{tutorial.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tutorial.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="bg-green-50">
                          {tutorial.category}
                        </Badge>
                        <Badge variant="outline">{tutorial.level}</Badge>
                        <Badge variant="outline">{tutorial.duration}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="gap-2 flex flex-col sm:flex-row">
                      <Button
                        className="flex-1 bg-green-600 hover:bg-green-700 text-sm"
                        onClick={() => window.open(tutorial.youtubeLink, "_blank")}
                      >
                        {t("watchTutorial")}
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 text-sm bg-transparent"
                        onClick={() => {
                          if (window.speechSynthesis) {
                            window.speechSynthesis.cancel()
                            const utterance = new SpeechSynthesisUtterance(tutorial.description)
                            utterance.lang = language === "hi" ? "hi-IN" : language === "mr" ? "mr-IN" : "en-US"
                            window.speechSynthesis.speak(utterance)
                          }
                        }}
                      >
                        {t("textToSpeech")}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                {displayedTutorials < tutorials.length && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsLoadingTutorials(true)
                      setTimeout(() => {
                        setDisplayedTutorials((prev) => Math.min(prev + 3, tutorials.length))
                        setIsLoadingTutorials(false)
                      }, 500)
                    }}
                    disabled={isLoadingTutorials}
                  >
                    {isLoadingTutorials ? t("loading") : t("loadMore")}
                  </Button>
                )}
              </div>
            </TabsContent>

            <TabsContent value="schemes">
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h2 className="text-lg md:text-xl font-semibold text-green-800 mb-2">{t("resources.governmentSchemes")}</h2>
                  <p className="text-gray-600 text-sm md:text-base">
                    {t("resources.governmentSchemesDesc")}
                  </p>
                </div>

                {schemes.map((scheme) => (
                  <Card key={scheme.id}>
                    <CardHeader>
                      <CardTitle className="text-xl">{scheme.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-gray-600 mb-4 text-sm md:text-base">{scheme.description}</p>
                      <div className="space-y-2 text-sm md:text-base">
                        <div className="flex items-start gap-2">
                          <span className="font-medium min-w-24">{t("resources.eligibility")}:</span>
                          <span className="text-gray-600">{scheme.eligibility}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-medium min-w-24">{t("resources.deadline")}:</span>
                          <span className="text-gray-600">{scheme.deadline}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="bg-green-600 hover:bg-green-700 flex items-center gap-2 text-sm"
                        onClick={() => window.open(scheme.link, "_blank")}
                      >
                        {t("resources.applyNow")}
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="expert">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t("resources.askExpert")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 text-sm md:text-base">
                        Have a specific farming question? Our agricultural experts are here to help.
                      </p>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="topic" className="text-sm font-medium">
                            {t("resources.topic")}
                          </label>
                          <Input id="topic" placeholder={t("resources.topicPlaceholder")} className="text-sm" />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="question" className="text-sm font-medium">
                            {t("resources.yourQuestion")}
                          </label>
                          <textarea
                            id="question"
                            className="w-full min-h-[150px] px-3 py-2 border rounded-md text-sm"
                            placeholder={t("resources.describeQuestion")}
                          ></textarea>
                        </div>

                        <Button className="w-full bg-green-600 hover:bg-green-700 text-sm">{t("resources.submitQuestion")}</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>{t("resources.expertArticles")}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-b pb-4">
                          <h3 className="text-lg font-medium mb-1">Managing Water Stress in Summer Crops</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            Expert advice on irrigation scheduling, mulching techniques, and drought-resistant
                            varieties.
                          </p>
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <span className="text-sm text-gray-500">By Dr. Rajesh Patel, Agricultural Scientist</span>
                            <Button variant="link" className="text-green-600 p-0 text-sm">
                              {t("resources.readArticle")}
                            </Button>
                          </div>
                        </div>

                        <div className="border-b pb-4">
                          <h3 className="text-base md:text-lg font-medium mb-1">Integrated Pest Management for Vegetable Crops</h3>
                          <p className="text-gray-600 text-sm mb-2">
                            Learn how to control pests using natural predators, crop rotation, and minimal chemical
                            intervention.
                          </p>
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <span className="text-sm text-gray-500">By Dr. Priya Sharma, Entomologist</span>
                            <Button variant="link" className="text-green-600 p-0 text-sm">
                              {t("resources.readArticle")}
                            </Button>
                          </div>
                        </div>

                        <div className="border-b pb-4">
                          <h3 className="text-base md:text-lg font-medium mb-1">
                            Soil Health Management for Long-term Productivity
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            Strategies for maintaining soil fertility, structure, and microbial activity for sustainable
                            farming.
                          </p>
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <span className="text-sm text-gray-500">By Dr. Amit Verma, Soil Scientist</span>
                            <Button variant="link" className="text-green-600 p-0 text-sm">
                              {t("resources.readArticle")}
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base md:text-lg font-medium mb-1">
                            Market Trends and Price Forecasting for Kharif Crops
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            Analysis of market trends and price predictions to help you plan your crop selection and
                            sales strategy.
                          </p>
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <span className="text-sm text-gray-500">By Sunil Joshi, Agricultural Economist</span>
                            <Button variant="link" className="text-green-600 p-0 text-sm">
                              {t("resources.readArticle")}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full bg-transparent text-sm">
                        {t("resources.viewAllArticles")}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
