"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, ThumbsUp, Share2, Calendar, Users, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function CommunityPage() {
  const { t } = useLanguage()
  const [joinedGroups, setJoinedGroups] = useState<number[]>([])
  const [displayedPosts, setDisplayedPosts] = useState(4)
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)
  // Sample forum posts
  const posts = [
    {
      id: 1,
      title: "Best practices for organic rice farming?",
      content:
        "I'm planning to switch to organic rice farming. What are some best practices and challenges I should be aware of?",
      author: {
        name: "Anushka S.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2 days ago",
      comments: 12,
      likes: 24,
      tags: ["Organic Farming", "Rice"],
    },
    {
      id: 2,
      title: "Dealing with tomato leaf curl virus",
      content:
        "My tomato plants are showing signs of leaf curl virus. Has anyone successfully dealt with this issue without using harsh chemicals?",
      author: {
        name: "Devyani W.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "5 days ago",
      comments: 18,
      likes: 32,
      tags: ["Plant Disease", "Tomatoes", "Organic Solutions"],
    },
    {
      id: 3,
      title: "Government subsidy for drip irrigation",
      content:
        "I heard there's a new government subsidy for drip irrigation systems. Does anyone have information on how to apply?",
      author: {
        name: "Harshali D.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "1 week ago",
      comments: 15,
      likes: 41,
      tags: ["Government Schemes", "Irrigation"],
    },
    {
      id: 4,
      title: "Recommended tractor models for small farms",
      content:
        "I'm looking to buy a tractor for my 5-acre farm. Any recommendations for reliable and affordable models?",
      author: {
        name: "Sakshi T.",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "2 weeks ago",
      comments: 22,
      likes: 36,
      tags: ["Farm Equipment", "Tractors"],
    },
  ]

  // Sample upcoming events
  const events = [
    {
      id: 1,
      title: "Organic Farming Workshop",
      date: "May 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Agricultural College, Pune",
      organizer: "Maharashtra Organic Farmers Association",
      attendees: 45,
    },
    {
      id: 2,
      title: "Agricultural Technology Expo",
      date: "May 22-24, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Exhibition Center, Mumbai",
      organizer: "Agri-Tech India",
      attendees: 120,
    },
    {
      id: 3,
      title: "Farmer-Buyer Meet",
      date: "June 5, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Community Hall, Nashik",
      organizer: "Agri-nova",
      attendees: 78,
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Community Header */}
      <section className="bg-green-50 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{t("community.title")}</h1>
              <p className="text-gray-600 text-sm md:text-base">
                {t("community.subtitle")}
              </p>
            </div>
            <Button variant="outline" className="whitespace-nowrap text-sm bg-transparent">
              {t("watchTutorial")}
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Input placeholder="Search discussions..." className="pl-10 text-sm" />
            <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>
      </section>

      {/* Community Content */}
      <section className="py-8 px-4 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="forum" className="w-full">
            <TabsList className="mb-6 flex flex-col sm:flex-row">
              <TabsTrigger value="forum">{t("community.discussionForum")}</TabsTrigger>
              <TabsTrigger value="events">{t("community.upcomingEvents")}</TabsTrigger>
              <TabsTrigger value="groups">{t("community.localGroups")}</TabsTrigger>
            </TabsList>

            <TabsContent value="forum" className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-lg sm:text-xl font-semibold">{t("community.recentDiscussions")}</h2>
                <Button className="bg-green-600 hover:bg-green-700 text-sm">Start New</Button>
              </div>

              <div className="space-y-4">
                {posts.slice(0, displayedPosts).map((post) => (
                  <Card key={post.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle className="text-lg">{post.title}</CardTitle>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{post.author.name}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{post.content}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-green-50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-3 flex justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{post.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                {displayedPosts < posts.length && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsLoadingPosts(true)
                      setTimeout(() => {
                        setDisplayedPosts((prev) => Math.min(prev + 2, posts.length))
                        setIsLoadingPosts(false)
                      }, 500)
                    }}
                    disabled={isLoadingPosts}
                  >
                    {isLoadingPosts ? t("loading") : t("loadMore")}
                  </Button>
                )}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-lg sm:text-xl font-semibold">{t("community.upcomingEvents")}</h2>
                <Button className="bg-green-600 hover:bg-green-700 text-sm">Create Event</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <Card key={event.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{event.attendees} attending</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Organized by: {event.organizer}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-sm">Register</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="groups">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-lg sm:text-xl font-semibold">{t("community.localGroups")}</h2>
                <Button className="bg-green-600 hover:bg-green-700 text-sm">{t("createGroup")}</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    id: 1,
                    name: "Pune Organic Farmers",
                    desc: "A community of organic farmers in and around Pune sharing knowledge and resources.",
                    members: 128,
                  },
                  {
                    id: 2,
                    name: "Maharashtra Rice Growers",
                    desc: "Dedicated to rice cultivation techniques, market insights, and collective bargaining.",
                    members: 95,
                  },
                  {
                    id: 3,
                    name: "Young Farmers Network",
                    desc: "Supporting the next generation of farmers with modern techniques and technology.",
                    members: 76,
                  },
                ].map((group) => (
                  <Card key={group.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{group.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-gray-600 mb-3">{group.desc}</p>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{group.members} {t("members")}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full text-sm"
                        variant={joinedGroups.includes(group.id) ? "default" : "default"}
                        onClick={() => {
                          if (joinedGroups.includes(group.id)) {
                            setJoinedGroups(joinedGroups.filter((id) => id !== group.id))
                          } else {
                            setJoinedGroups([...joinedGroups, group.id])
                          }
                        }}
                      >
                        {joinedGroups.includes(group.id) ? "Joined ✓" : t("joinGroup")}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
