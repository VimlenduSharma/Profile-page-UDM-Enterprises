import React from 'react'; 
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileHeroProps {
  coverImage: string;
  profileImage?: string;
  name: string;
  title: string;
  description: string;
}

export function ProfileHero({ coverImage, profileImage, name, title, description }: ProfileHeroProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative">
      {/* Cover Image */}
      <div 
        className="h-64 w-full bg-cover bg-center rounded-b-lg overflow-hidden" 
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/20 to-white/70"></div>
      </div>
      
      {/* Profile Content */}
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Avatar className="flex h-40 w-40 items-center justify-center rounded-full bg-violet-700 text-5xl font-semibold text-white ring-4 ring-white shadow-lg">
              <AvatarImage src={profileImage} alt={name} className="h-full w-full object-cover" />
              <AvatarFallback className="bg-purple-light text-white text-4xl">{initials}</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Profile Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mt-4 md:mt-0">{name}</h1>
            <p className="text-purple-light font-medium">{title}</p>
            <p className="mt-2 text-gray-600 max-w-3xl">{description}</p>
          </div>
          
          {/* Edit Button */}
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50 hover:text-purple-light transition-colors">
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
