import React from 'react'; 
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Book, Activity, Info, Mail, Settings } from "lucide-react";

interface SidebarProps {
  className?: string;
  companyLogo?: string;
  companyName?: string;
}

/** Renders a sidebar nav item */
interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors rounded-lg",
        active
          ? "bg-purple-light text-white"
          : "text-gray-600 hover:text-white hover:bg-purple-light/20"
      )}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </Link>
  );
};

export function Sidebar({
  className,
  companyLogo = "/lovable-uploads/45498434-4cdd-445a-8645-a0ca82fc7c1e.png",
  companyName = "Your Company",
}: SidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside
      className={cn(
        "w-60 bg-purple-DEFAULT min-h-screen flex flex-col shadow-lg", // always visible with shadow
        className
      )}
    >
      <div className="p-6 flex flex-col items-start">
        <div className="h-10 w-32 flex items-center mb-2">
          <img
            src={companyLogo}
            alt={companyName + ' logo'}
            className="h-full w-auto max-w-full object-contain rounded"
            style={{ background: "#fff", padding: "2px" }}
          />
        </div>
        {/* Optionally show company name if you want */}
        {/* <h2 className="text-xl font-bold text-white">{companyName}</h2> */}
      </div>

      <div className="flex-1 p-3 space-y-1">
        <SidebarItem
          icon={Home}
          label="Home"
          href="/"
          active={currentPath === "/"}
        />
        <SidebarItem
          icon={User}
          label="Profile"
          href="/profile"
          active={currentPath === "/profile"}
        />
        <SidebarItem
          icon={Briefcase}
          label="Services"
          href="/services"
          active={currentPath === "/services"}
        />
        <SidebarItem
          icon={Book}
          label="Brands"
          href="/brands"
          active={currentPath === "/brands"}
        />
        <SidebarItem
          icon={Activity}
          label="Ongoing Campaigns"
          href="/campaigns"
          active={currentPath === "/campaigns"}
        />
        <SidebarItem
          icon={Info}
          label="About Us"
          href="/about"
          active={currentPath === "/about"}
        />
        <SidebarItem
          icon={Mail}
          label="Contact Us"
          href="/contact"
          active={currentPath === "/contact"}
        />
        <SidebarItem
          icon={Settings}
          label="Settings"
          href="/settings"
          active={currentPath === "/settings"}
        />
      </div>

      <div className="p-4 mt-auto border-t border-white/10">
        <p className="text-xs text-white/60 text-center">
          © 2025 {companyName}. All rights reserved.
        </p>
      </div>
    </aside>
  );
}
