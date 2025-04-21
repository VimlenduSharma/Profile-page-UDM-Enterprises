import React from 'react'; 
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/profile/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Settings = () => {
  const userName = "Amritansh";
  const userAvatar = "/lovable-uploads/0e87068f-98dc-4c31-8d91-35f321e3390b.png";

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header userName={userName} userAvatar={userAvatar} />
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Settings</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="bg-white border rounded-md p-1 w-full mb-6">
              <TabsTrigger 
                value="profile" 
                className="data-[state=active]:bg-purple-light data-[state=active]:text-white rounded-md"
              >
                Profile Settings
              </TabsTrigger>
              <TabsTrigger 
                value="account" 
                className="data-[state=active]:bg-purple-light data-[state=active]:text-white rounded-md"
              >
                Account Settings
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="data-[state=active]:bg-purple-light data-[state=active]:text-white rounded-md"
              >
                Notification Preferences
              </TabsTrigger>
              <TabsTrigger 
                value="privacy" 
                className="data-[state=active]:bg-purple-light data-[state=active]:text-white rounded-md"
              >
                Privacy
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      defaultValue="Amritansh"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      defaultValue="Srivastava"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                  <textarea
                    id="bio"
                    rows={3}
                    defaultValue="We have several powerful plans to showcase your business and get discovered as a creative entrepreneur. Everything you need."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    id="location"
                    defaultValue="2239 Hog Camp Road, Schaumburg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="pt-4">
                  <Button className="bg-purple-DEFAULT hover:bg-purple-light">Save Changes</Button>
                </div>
              </form>
            </TabsContent>
            
            <TabsContent value="account" className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    defaultValue="charles5182@ummoh.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    defaultValue="33757005467"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div className="pt-4">
                  <Button className="bg-purple-DEFAULT hover:bg-purple-light">Update Account</Button>
                </div>
              </form>
              
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">Change Password</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input
                      type="password"
                      id="currentPassword"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div className="pt-4">
                    <Button className="bg-purple-DEFAULT hover:bg-purple-light">Change Password</Button>
                  </div>
                </form>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications" className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive email notifications for new collaborations and messages</p>
                  </div>
                  <div className="h-6 w-11 bg-purple-DEFAULT rounded-full relative cursor-pointer">
                    <div className="h-5 w-5 bg-white rounded-full absolute right-1 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-medium">SMS Notifications</h3>
                    <p className="text-sm text-gray-500">Receive text message notifications for urgent updates</p>
                  </div>
                  <div className="h-6 w-11 bg-gray-300 rounded-full relative cursor-pointer">
                    <div className="h-5 w-5 bg-white rounded-full absolute left-1 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-medium">Browser Notifications</h3>
                    <p className="text-sm text-gray-500">Receive notifications in your browser while using the platform</p>
                  </div>
                  <div className="h-6 w-11 bg-purple-DEFAULT rounded-full relative cursor-pointer">
                    <div className="h-5 w-5 bg-white rounded-full absolute right-1 top-0.5"></div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-purple-DEFAULT hover:bg-purple-light">Save Preferences</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-medium">Profile Visibility</h3>
                    <p className="text-sm text-gray-500">Make your profile visible to brands and other influencers</p>
                  </div>
                  <div className="h-6 w-11 bg-purple-DEFAULT rounded-full relative cursor-pointer">
                    <div className="h-5 w-5 bg-white rounded-full absolute right-1 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-medium">Show Social Media Stats</h3>
                    <p className="text-sm text-gray-500">Display your social media statistics to potential collaborators</p>
                  </div>
                  <div className="h-6 w-11 bg-purple-DEFAULT rounded-full relative cursor-pointer">
                    <div className="h-5 w-5 bg-white rounded-full absolute right-1 top-0.5"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-medium">Data Collection Consent</h3>
                    <p className="text-sm text-gray-500">Allow us to collect data to improve your experience</p>
                  </div>
                  <div className="h-6 w-11 bg-gray-300 rounded-full relative cursor-pointer">
                    <div className="h-5 w-5 bg-white rounded-full absolute left-1 top-0.5"></div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-purple-DEFAULT hover:bg-purple-light">Update Privacy Settings</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
