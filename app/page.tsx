"use client"

import Link from "next/link"
import { Leaf, Tractor, Users, BarChart3 } from "lucide-react"
import { CardDescription } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">{t("hero.title")}</h1>
              <p className="text-lg text-gray-700 mb-8">{t("hero.subtitle")}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  {t("cta.getStarted")}
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 bg-transparent">
                  {t("watchTutorial")}
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <div className="absolute inset-0 bg-green-100 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/hero-farming.jpg"
                  alt="Farmers working in lush green agricultural fields"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">{t("features.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Leaf className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>{t("features.marketplace")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t("features.marketplace.desc")}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Tractor className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>{t("features.equipment")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t("features.equipment.desc")}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>{t("features.community")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t("features.community.desc")}</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <BarChart3 className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>{t("features.ai")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t("features.ai.desc")}</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">{t("howItWorks.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("howItWorks.step1.title")}</h3>
              <p className="text-gray-600">{t("howItWorks.step1.desc")}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("howItWorks.step2.title")}</h3>
              <p className="text-gray-600">{t("howItWorks.step2.desc")}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("howItWorks.step3.title")}</h3>
              <p className="text-gray-600">{t("howItWorks.step3.desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-700 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">{t("cta.join")}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{t("hero.subtitle")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              {t("cta.getStarted")}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              {t("watchTutorial")}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image 
                  src="/agri-nova-logo.jpg" 
                  alt="Agri-Nova Logo" 
                  width={40} 
                  height={40}
                  className="h-10 w-auto rounded-lg"
                />
                <h3 className="text-xl font-bold">Agri-Nova</h3>
              </div>
              <p className="text-gray-400 text-sm">{t("hero.subtitle")}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace" className="text-gray-400 hover:text-white">
                    {t("nav.marketplace")}
                  </Link>
                </li>
                <li>
                  <Link href="/equipment" className="text-gray-400 hover:text-white">
                    {t("nav.equipment")}
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-400 hover:text-white">
                    {t("nav.community")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.resources")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources" className="text-gray-400 hover:text-white">
                    {t("resources.title")}
                  </Link>
                </li>
                <li>
                  <Link href="/resources/government-schemes" className="text-gray-400 hover:text-white">
                    {t("marketplace.tabs.ai")}
                  </Link>
                </li>
                <li>
                  <Link href="/resources/tutorials" className="text-gray-400 hover:text-white">
                    {t("features.community")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.contactUs")}</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@agri-nova.com</li>
                <li className="text-gray-400">Phone: +91 1234567890</li>
                <li className="text-gray-400">Address: Pune, Maharashtra, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Agri-nova. {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
