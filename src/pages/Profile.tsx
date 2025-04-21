import React from 'react'; 
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/profile/Header";
import { ProfileHero } from "@/components/profile/ProfileHero";
import { AboutSection } from "@/components/profile/AboutSection";
import { CollaborationCard } from "@/components/profile/CollaborationCard";
import { EngagementStats } from "@/components/profile/EngagementStats";
import { SocialLinks } from "@/components/profile/SocialLinks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

const Profile = () => {
  // Simulating data fetch from an API - in a real app this would come from a backend
  const [userData, setUserData] = useState({
    name: "Amritansh Srivastava",
    userName: "Amritansh", // For welcome message
    title: "Influencer @UDM",
    description: "We have several powerful plans to showcase your business and get discovered as a creative entrepreneur. Everything you need.",
    profileImage: "/lovable-uploads/0e87068f-98dc-4c31-8d91-35f321e3390b.png",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop",
    gender: "Male",
    location: "2239 Hog Camp Road, Schaumburg",
    email: "charles5182@ummoh.com",
    phone: "33757005467",
    instagramRate: 40,
    facebook: "https://facebook.com/user",
    instagram: "https://instagram.com/user",
    twitter: "https://twitter.com/user"
  });

  // Simulated collaborations data
  const [collaborations, setCollaborations] = useState([
    {
      name: "Swiss Beauty",
      logo: "", // No logo provided, will use initial
      lastActive: "Today",
      lastViewed: "2hr Ago",
      status: "waiting" as const
    },
    {
      name: "Fashion Trends",
      logo: "",
      lastActive: "Yesterday",
      lastViewed: "5hr Ago",
      status: "approved" as const
    },
    {
      name: "Cosmetic Brand",
      logo: "",
      lastActive: "2 Days Ago",
      lastViewed: "1 Day Ago",
      status: "pending" as const
    }
  ]);

  // Add animation effect when component mounts
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((el, index) => {
      (el as HTMLElement).style.opacity = '0';
      setTimeout(() => {
        (el as HTMLElement).style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar always visible and receives companyLogo/companyName props */}
      <Sidebar
        companyLogo="/lovable-uploads/45498434-4cdd-445a-8645-a0ca82fc7c1e.png"
        companyName="Your Company"
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header userName={userData.userName} userAvatar={userData.profileImage} />
        
        {/* Profile Hero Section */}
        <div className="animate-fade-in" style={{ transform: 'translateY(10px)' }}>
          <ProfileHero 
            coverImage={userData.coverImage} 
            profileImage={userData.profileImage}
            name={userData.name}
            title={userData.title}
            description={userData.description}
          />
        </div>
        
        {/* Main Content Area */}
        <div className="container max-w-screen-xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="animate-fade-in" style={{ transform: 'translateY(10px)' }}>
              <AboutSection 
                gender={userData.gender}
                location={userData.location}
                email={userData.email}
                phone={userData.phone}
              />
            </div>
            
            {/* Right Column (wider) */}
            <div className="md:col-span-2 space-y-8">
              {/* Tabs for different sections */}
              <Tabs defaultValue="collaborations" className="animate-fade-in" style={{ transform: 'translateY(10px)' }}>
                <TabsList className="bg-white border rounded-md p-1 w-full">
                  <TabsTrigger 
                    value="collaborations" 
                    className="data-[state=active]:bg-purple-light data-[state=active]:text-white rounded-md"
                  >
                    My Collaborations
                  </TabsTrigger>
                  <TabsTrigger 
                    value="stats" 
                    className="data-[state=active]:bg-purple-light data-[state=active]:text-white rounded-md"
                  >
                    Stats & Analytics
                  </TabsTrigger>
                  <TabsTrigger 
                    value="social" 
                    className="data-[state=active]:bg-purple-light data-[state=active]:text-white rounded-md"
                  >
                    Social Media
                  </TabsTrigger>
                </TabsList>
                
                {/* Collaborations Content */}
                <TabsContent value="collaborations" className="space-y-4 mt-4">
                  {collaborations.map((collab, index) => (
                    <div 
                      key={collab.name} 
                      className="animate-fade-in" 
                      style={{ 
                        transform: 'translateY(10px)', 
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <CollaborationCard {...collab} />
                    </div>
                  ))}
                </TabsContent>
                
                {/* Stats Content */}
                <TabsContent value="stats" className="mt-4">
                  <div className="animate-fade-in" style={{ transform: 'translateY(10px)' }}>
                    <EngagementStats platform="Instagram" rate={userData.instagramRate} />
                  </div>
                </TabsContent>
                
                {/* Social Media Content */}
                <TabsContent value="social" className="mt-4">
                  <div className="animate-fade-in" style={{ transform: 'translateY(10px)' }}>
                    <SocialLinks 
                      facebook={userData.facebook}
                      instagram={userData.instagram}
                      twitter={userData.twitter}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
