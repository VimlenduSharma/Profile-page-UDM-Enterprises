import React from 'react'; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SocialLinksProps {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export function SocialLinks({ facebook, instagram, twitter }: SocialLinksProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">My social media links</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {facebook && (
          <a 
            href={facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-white border border-gray-200 hover:bg-gray-50 hover:border-blue-500 transition-colors"
          >
            <Facebook className="h-6 w-6 text-blue-600" />
            <span className="sr-only">Facebook</span>
          </a>
        )}
        
        {instagram && (
          <a 
            href={instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-white border border-gray-200 hover:bg-gray-50 hover:border-pink-500 transition-colors"
          >
            <Instagram className="h-6 w-6 text-pink-600" />
            <span className="sr-only">Instagram</span>
          </a>
        )}
        
        {twitter && (
          <a 
            href={twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full w-12 h-12 bg-white border border-gray-200 hover:bg-gray-50 hover:border-blue-400 transition-colors"
          >
            <Twitter className="h-6 w-6 text-blue-400" />
            <span className="sr-only">Twitter</span>
          </a>
        )}
        
        <Button 
          variant="outline" 
          size="sm" 
          className="ml-auto text-sm text-gray-500 hover:text-purple-DEFAULT"
        >
          Add more
        </Button>
      </CardContent>
    </Card>
  );
}
