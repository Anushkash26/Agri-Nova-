"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Lock, CreditCard, Upload, Shield } from "lucide-react"

export function DashboardSettings() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)

  // Mock user data
  const user = {
    name: "Anushka Sharma",
    email: "anushka@example.com",
    phone: "+91 9876543210",
    address: "123 Farm Road, Pune, Maharashtra, India",
    avatar: "/placeholder.svg?height=100&width=100",
    farmName: "Anushka Farms",
    farmDescription:
      "Organic farm specializing in rice, wheat, and vegetable cultivation using sustainable farming practices.",
    farmSize: "15 acres",
    farmLocation: "Pune, Maharashtra",
  }

  const handleSave = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="farm">Farm Details</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    <span>Change Photo</span>
                  </Button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input id="name" defaultValue={user.name} className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input id="email" type="email" defaultValue={user.email} className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input id="phone" defaultValue={user.phone} className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                        <Textarea id="address" defaultValue={user.address} className="pl-10 min-h-[80px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading} className="bg-green-600 hover:bg-green-700">
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="farm">
          <Card>
            <CardHeader>
              <CardTitle>Farm Details</CardTitle>
              <CardDescription>Update information about your farm</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="farm-name">Farm Name</Label>
                <Input id="farm-name" defaultValue={user.farmName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="farm-description">Farm Description</Label>
                <Textarea id="farm-description" defaultValue={user.farmDescription} className="min-h-[120px]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="farm-size">Farm Size</Label>
                  <Input id="farm-size" defaultValue={user.farmSize} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="farm-location">Farm Location</Label>
                  <Input id="farm-location" defaultValue={user.farmLocation} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="farm-photos">Farm Photos</Label>
                <div className="border-2 border-dashed border-border rounded-md p-6 text-center">
                  <p className="text-muted-foreground">Drag and drop images here, or click to select files</p>
                  <Button variant="outline" className="mt-2">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photos
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading} className="bg-green-600 hover:bg-green-700">
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account settings and security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input id="current-password" type="password" className="pl-10" />
                    </div>
                  </div>
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">Update Password</Button>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <h3 className="text-lg font-medium">Security Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch id="two-factor" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="login-alerts">Login Alerts</Label>
                      <p className="text-sm text-muted-foreground">Receive alerts for unusual login activity</p>
                    </div>
                    <Switch id="login-alerts" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <h3 className="text-lg font-medium">Danger Zone</h3>
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-red-800">Delete Account</p>
                      <p className="text-xs text-red-700 mt-1">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button variant="destructive" className="mt-3">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="order-notifications">Order Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive notifications about your orders</p>
                    </div>
                    <Switch id="order-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="price-alerts">Price Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when crop prices change significantly
                      </p>
                    </div>
                    <Switch id="price-alerts" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="equipment-notifications">Equipment Rental</Label>
                      <p className="text-sm text-muted-foreground">
                        Notifications about equipment bookings and returns
                      </p>
                    </div>
                    <Switch id="equipment-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="marketing-emails">Marketing Emails</Label>
                      <p className="text-sm text-muted-foreground">Receive promotional offers and newsletters</p>
                    </div>
                    <Switch id="marketing-emails" />
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <h3 className="text-lg font-medium">SMS Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-order-updates">Order Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive SMS notifications about your orders</p>
                    </div>
                    <Switch id="sms-order-updates" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-security-alerts">Security Alerts</Label>
                      <p className="text-sm text-muted-foreground">Get SMS alerts for account security</p>
                    </div>
                    <Switch id="sms-security-alerts" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading} className="bg-green-600 hover:bg-green-700">
                {isLoading ? "Saving..." : "Save Preferences"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods and transactions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Saved Payment Methods</h3>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Add New Method
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-md p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">HDFC Bank</p>
                        <p className="text-sm text-gray-500">•••• •••• •••• 4242</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>Default</Badge>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        Remove
                      </Button>
                    </div>
                  </div>

                  <div className="border rounded-md p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 rounded-md flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">SBI Bank</p>
                        <p className="text-sm text-gray-500">•••• •••• •••• 8888</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        Make Default
                      </Button>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <h3 className="text-lg font-medium">Billing Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="billing-name">Name</Label>
                    <Input id="billing-name" defaultValue="Anushka Sharma" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-email">Email</Label>
                    <Input id="billing-email" type="email" defaultValue="anushka@example.com" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="billing-address">Billing Address</Label>
                    <Textarea
                      id="billing-address"
                      defaultValue="123 Farm Road, Pune, Maharashtra, India"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button onClick={handleSave} disabled={isLoading} className="bg-green-600 hover:bg-green-700">
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
