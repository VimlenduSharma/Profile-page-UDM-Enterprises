import React from 'react'; 
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  userName: string;
  userAvatar?: string;
}

export function Header({ userName, userAvatar }: HeaderProps) {
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="border-b bg-white">
      <div className="flex h-16 items-center px-6 justify-between">
        <h2 className="text-lg font-medium">
          Welcome <span className="font-bold">{userName}</span>!
        </h2>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium">{userName}</span>
            <Link to="/logout" className="text-xs text-gray-500 hover:underline">
              Log out
            </Link>
          </div>
          
          <Avatar className="h-9 w-9 border-2 border-purple-light">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback className="bg-purple-light text-white">{initials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
