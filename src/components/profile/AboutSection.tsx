import React from 'react'; 
import { User, MapPin, Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AboutSectionProps {
  gender: string;
  location: string;
  email: string;
  phone: string;
}

export function AboutSection({ gender, location, email, phone }: AboutSectionProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
          About
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-purple-light/10 p-2 rounded-full">
            <User className="h-5 w-5 text-purple-light" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-medium">{gender}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-purple-light/10 p-2 rounded-full">
            <MapPin className="h-5 w-5 text-purple-light" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">{location}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-purple-light/10 p-2 rounded-full">
            <Mail className="h-5 w-5 text-purple-light" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{email}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-purple-light/10 p-2 rounded-full">
            <Phone className="h-5 w-5 text-purple-light" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{phone}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
