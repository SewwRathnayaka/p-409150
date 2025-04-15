
import React, { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bell,
  Clock,
  CreditCard,
  Lock,
  MapPin,
  Save,
  Settings as SettingsIcon,
  User,
  Wallet,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Settings: React.FC = () => {
  // Profile settings state
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    bio: "Experienced plumbing specialist with over 10 years in residential and commercial service.",
    location: "Colombo, Sri Lanka",
    specialties: ["Plumbing", "Electrical", "Carpentry"],
    hourlyRate: "45"
  });
  
  // Notification settings state
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: false,
    jobReminders: true,
    clientMessages: true,
    marketingUpdates: false
  });
  
  // Account settings state
  const [account, setAccount] = useState({
    language: "english",
    timezone: "asia-colombo",
    currency: "usd"
  });
  
  // Handle profile changes
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle notification toggle
  const handleNotificationToggle = (key: string) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof notifications] }));
  };
  
  // Handle account settings changes
  const handleAccountChange = (key: string, value: string) => {
    setAccount(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-y-auto p-0 md:p-0">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Settings</h1>
            <p className="text-gray-600">
              Manage your account settings and preferences
            </p>
          </div>
          
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 md:w-auto">
              <TabsTrigger value="profile" className="flex gap-2 items-center">
                <User size={16} /> Profile
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex gap-2 items-center">
                <Bell size={16} /> Notifications
              </TabsTrigger>
              <TabsTrigger value="account" className="flex gap-2 items-center">
                <SettingsIcon size={16} /> Account
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex gap-2 items-center">
                <CreditCard size={16} /> Billing
              </TabsTrigger>
            </TabsList>
            
            {/* Profile Settings */}
            <TabsContent value="profile">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your personal information and how it appears to clients
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="https://images.unsplash.com/photo-1472396961693-142e6e269027" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Profile Photo</h3>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Change Photo
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500">
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={profile.name}
                            onChange={handleProfileChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={profile.email}
                            onChange={handleProfileChange}
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={profile.phone}
                            onChange={handleProfileChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <div className="relative">
                            <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                            <Input
                              id="location"
                              name="location"
                              className="pl-8"
                              value={profile.location}
                              onChange={handleProfileChange}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Professional Bio</Label>
                        <Textarea
                          id="bio"
                          name="bio"
                          rows={4}
                          value={profile.bio}
                          onChange={handleProfileChange}
                          placeholder="Tell clients about your experience, skills, and services"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                        <Input
                          id="hourlyRate"
                          name="hourlyRate"
                          type="number"
                          value={profile.hourlyRate}
                          onChange={handleProfileChange}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-[#14B22D] hover:bg-green-700">
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Skills & Certifications</CardTitle>
                    <CardDescription>
                      Update your specialized skills and professional certifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start text-left">
                        <span className="mr-auto">Add New Skill or Certification</span>
                      </Button>
                      
                      <div className="rounded-md border p-4">
                        <p className="text-sm text-gray-500">
                          No skills or certifications have been added yet. Add your professional certifications, licenses and specialized skills to help clients find your services.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Notification Settings */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>
                    Manage how and when you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Channels</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-gray-500">Receive notifications via email</p>
                        </div>
                        <Switch 
                          checked={notifications.email}
                          onCheckedChange={() => handleNotificationToggle("email")}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>SMS Notifications</Label>
                          <p className="text-sm text-gray-500">Receive notifications via text message</p>
                        </div>
                        <Switch 
                          checked={notifications.sms}
                          onCheckedChange={() => handleNotificationToggle("sms")}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Push Notifications</Label>
                          <p className="text-sm text-gray-500">Receive notifications on your device</p>
                        </div>
                        <Switch 
                          checked={notifications.push}
                          onCheckedChange={() => handleNotificationToggle("push")}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Types</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Job Reminders</Label>
                          <p className="text-sm text-gray-500">Upcoming and scheduled job notifications</p>
                        </div>
                        <Switch 
                          checked={notifications.jobReminders}
                          onCheckedChange={() => handleNotificationToggle("jobReminders")}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Client Messages</Label>
                          <p className="text-sm text-gray-500">When clients send you messages</p>
                        </div>
                        <Switch 
                          checked={notifications.clientMessages}
                          onCheckedChange={() => handleNotificationToggle("clientMessages")}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Marketing Updates</Label>
                          <p className="text-sm text-gray-500">New features and promotional offers</p>
                        </div>
                        <Switch 
                          checked={notifications.marketingUpdates}
                          onCheckedChange={() => handleNotificationToggle("marketingUpdates")}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-[#14B22D] hover:bg-green-700">
                      Save Preferences
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Account Settings */}
            <TabsContent value="account">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Preferences</CardTitle>
                    <CardDescription>
                      Manage your account settings and regional preferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select 
                          value={account.language} 
                          onValueChange={(value) => handleAccountChange("language", value)}
                        >
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="sinhala">Sinhala</SelectItem>
                            <SelectItem value="tamil">Tamil</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select 
                          value={account.timezone} 
                          onValueChange={(value) => handleAccountChange("timezone", value)}
                        >
                          <SelectTrigger id="timezone">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asia-colombo">Asia/Colombo (GMT+5:30)</SelectItem>
                            <SelectItem value="asia-calcutta">Asia/Calcutta (GMT+5:30)</SelectItem>
                            <SelectItem value="asia-dubai">Asia/Dubai (GMT+4:00)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="currency">Currency</Label>
                      <Select 
                        value={account.currency} 
                        onValueChange={(value) => handleAccountChange("currency", value)}
                      >
                        <SelectTrigger id="currency">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">US Dollar (USD)</SelectItem>
                          <SelectItem value="lkr">Sri Lankan Rupee (LKR)</SelectItem>
                          <SelectItem value="inr">Indian Rupee (INR)</SelectItem>
                          <SelectItem value="gbp">British Pound (GBP)</SelectItem>
                          <SelectItem value="eur">Euro (EUR)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Security</h3>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                          <Lock className="mr-2 h-4 w-4" /> Change Password
                        </Button>
                        
                        <Button variant="outline" className="w-full justify-start">
                          <User className="mr-2 h-4 w-4" /> Two-Factor Authentication
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-[#14B22D] hover:bg-green-700">
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-600">Danger Zone</CardTitle>
                    <CardDescription>
                      Actions here can't be undone
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full justify-start border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
                        Deactivate Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Billing Settings */}
            <TabsContent value="billing">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>
                      Manage your payment methods for client transactions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="bg-[#14B22D] hover:bg-green-700 w-full md:w-auto justify-start">
                        <CreditCard className="mr-2 h-4 w-4" /> Add Payment Method
                      </Button>
                      
                      <div className="rounded-md border p-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-8 w-8 text-[#14B22D]" />
                            <div>
                              <p className="font-medium">Visa ending in 4242</p>
                              <p className="text-sm text-gray-500">Expires 12/2025</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge>Default</Badge>
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm" className="text-red-500">Remove</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Payout Settings</CardTitle>
                    <CardDescription>
                      Manage how you receive payments from clients
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Automatic Payouts</h3>
                        <p className="text-sm text-gray-500">Automatically transfer earnings to your bank account</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="payout-schedule">Payout Schedule</Label>
                      <Select defaultValue="weekly">
                        <SelectTrigger id="payout-schedule">
                          <SelectValue placeholder="Select schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="biweekly">Bi-weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Bank Accounts</h3>
                        <Button variant="outline" size="sm">
                          <Wallet className="mr-2 h-4 w-4" /> Add Account
                        </Button>
                      </div>
                      
                      <div className="rounded-md border p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">National Bank ****1234</p>
                            <p className="text-sm text-gray-500">Checking Account</p>
                          </div>
                          <Badge>Default</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-[#14B22D] hover:bg-green-700">
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Billing History</CardTitle>
                    <CardDescription>
                      View your transaction history
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-gray-400" />
                                Apr 15, 2025
                              </div>
                            </TableCell>
                            <TableCell>Platform Service Fee</TableCell>
                            <TableCell className="text-red-500">-$25.00</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                                Completed
                              </Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-gray-400" />
                                Apr 10, 2025
                              </div>
                            </TableCell>
                            <TableCell>Job Payment - Plumbing Repair</TableCell>
                            <TableCell className="text-green-500">+$150.00</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                                Completed
                              </Badge>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-gray-400" />
                                Apr 5, 2025
                              </div>
                            </TableCell>
                            <TableCell>Job Payment - Electrical Work</TableCell>
                            <TableCell className="text-green-500">+$85.00</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                                Completed
                              </Badge>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
