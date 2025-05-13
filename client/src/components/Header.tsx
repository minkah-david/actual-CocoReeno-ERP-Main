import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [notifications, setNotifications] = useState(5);
  const [messages, setMessages] = useState(3);

  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-4 md:px-6 sticky top-0 z-20">
      <div className="flex items-center space-x-4">
        <Button 
          onClick={toggleSidebar} 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-muted-foreground hover:text-foreground"
        >
          <i className="ri-menu-line text-xl"></i>
        </Button>
        
        <div className="relative">
          <Input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 w-64 hidden md:flex"
          />
          <i className="ri-search-line absolute left-3 top-2.5 text-muted-foreground hidden md:block"></i>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
            >
              <i className="ri-notification-3-line text-xl text-muted-foreground"></i>
              {notifications > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                  {notifications}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-start gap-2">
                <span className="bg-green-100 p-2 rounded-full text-green-600 mt-0.5">
                  <i className="ri-truck-line text-sm"></i>
                </span>
                <div>
                  <p className="text-sm font-medium">Shipment delivered</p>
                  <p className="text-xs text-muted-foreground">Today, 10:42 AM</p>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-start gap-2">
                <span className="bg-blue-100 p-2 rounded-full text-blue-600 mt-0.5">
                  <i className="ri-user-add-line text-sm"></i>
                </span>
                <div>
                  <p className="text-sm font-medium">New farmers registered</p>
                  <p className="text-xs text-muted-foreground">Today, 9:15 AM</p>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-primary cursor-pointer">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
            >
              <i className="ri-message-3-line text-xl text-muted-foreground"></i>
              {messages > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                  {messages}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>Messages</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-start gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                  <AvatarFallback>KA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Kofi Annan</p>
                  <p className="text-xs text-muted-foreground truncate w-44">Need the monthly report by EOD</p>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-start gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Ama Mensah</p>
                  <p className="text-xs text-muted-foreground truncate w-44">Updated the supply chain docs</p>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-primary cursor-pointer">
              View all messages
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61" alt="User Profile" />
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <i className="ri-user-line mr-2"></i>
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <i className="ri-settings-3-line mr-2"></i>
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <i className="ri-dashboard-line mr-2"></i>
              <span>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <i className="ri-logout-box-line mr-2"></i>
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
