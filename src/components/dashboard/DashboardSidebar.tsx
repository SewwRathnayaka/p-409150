
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  ClipboardList,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  icon,
  label,
  to,
  active = false,
}) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
        active
          ? "bg-[#14B22D]/10 text-[#14B22D]"
          : "hover:bg-[#14B22D]/5 text-gray-700"
      }`}
    >
      {icon}
      <span className={`${active ? "font-medium" : ""}`}>{label}</span>
    </Link>
  );
};

const DashboardSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Mobile sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Sidebar backdrop for mobile */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-white border-r border-gray-200 transition-all duration-300 ${
          isCollapsed ? "-translate-x-full" : "translate-x-0"
        } md:translate-x-0 md:w-64 md:relative md:z-0 shadow-lg md:shadow-none`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8 pt-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43a4c741b401606dd47d9440db3d87262eb472f2?placeholderIfAbsent=true"
                alt="Fixfinder Logo"
                className="h-8"
              />
              <span className="text-xl font-bold text-[#14B22D]">Fixfinder</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsCollapsed(true)}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          {/* User profile */}
          <div className="flex flex-col items-center mb-8 pb-4 border-b border-gray-200">
            <Avatar className="h-20 w-20 mb-3">
              <AvatarImage src="https://images.unsplash.com/photo-1472396961693-142e6e269027" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="font-bold text-lg">John Doe</h3>
              <p className="text-sm text-gray-500">Plumbing Specialist</p>
              <div className="flex items-center mt-1 justify-center">
                <span className="text-[#F6AC3D] text-sm mr-1">4.8</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill={i < 5 ? "#F6AC3D" : "none"}
                      stroke={i < 5 ? "#F6AC3D" : "currentColor"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 space-y-1">
            <SidebarLink
              to="/handyman-dashboard"
              icon={<LayoutDashboard className="h-5 w-5" />}
              label="Dashboard"
              active={isActive("/handyman-dashboard")}
            />
            <SidebarLink
              to="/schedule-jobs"
              icon={<Calendar className="h-5 w-5" />}
              label="Schedule"
              active={isActive("/schedule-jobs")}
            />
            <SidebarLink
              to="#"
              icon={<ClipboardList className="h-5 w-5" />}
              label="Jobs"
              active={isActive("/jobs")}
            />
            <SidebarLink
              to="/client-settings"
              icon={<Users className="h-5 w-5" />}
              label="Clients"
              active={isActive("/client-settings")}
            />
            <SidebarLink
              to="#"
              icon={<Settings className="h-5 w-5" />}
              label="Settings"
              active={isActive("/settings")}
            />
          </nav>

          {/* Logout button */}
          <div className="pt-4 border-t border-gray-200">
            <Button
              variant="ghost"
              className="w-full text-gray-700 justify-start"
            >
              <LogOut className="mr-2 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
