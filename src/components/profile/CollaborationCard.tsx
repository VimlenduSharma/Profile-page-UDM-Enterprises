import React from 'react'; 
import { MoreVertical, Clock, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CollaborationCardProps {
  logo?: string;
  name: string;
  lastActive: string;
  lastViewed: string;
  status: 'waiting' | 'approved' | 'rejected' | 'pending';
}

export function CollaborationCard({ logo, name, lastActive, lastViewed, status }: CollaborationCardProps) {
  const logoInitial = name.charAt(0).toUpperCase();
  
  const statusColor = {
    waiting: "bg-amber-100 text-amber-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
    pending: "bg-blue-100 text-blue-800",
  };
  
  const statusText = {
    waiting: "WAITING",
    approved: "APPROVED",
    rejected: "REJECTED",
    pending: "PENDING",
  };

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="p-4 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 bg-purple-DEFAULT text-white">
            <AvatarImage src={logo} alt={name} />
            <AvatarFallback>{logoInitial}</AvatarFallback>
          </Avatar>
          <h3 className="font-semibold text-gray-900">{name}</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className={statusColor[status]}>
            {statusText[status]}
          </Badge>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Contact brand</DropdownMenuItem>
              <DropdownMenuItem>Share profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Last Active {lastActive}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>Application Viewed {lastViewed}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
