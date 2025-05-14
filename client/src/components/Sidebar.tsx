import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { menuItems } from "@/lib/constants";
import { useMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const [location] = useLocation();
  const isMobile = useMobile();
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMobile, setCollapsed]);

  const toggleSubmenu = (title: string) => {
    setOpenItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const isActive = (path: string) => {
    return location === path;
  };

  const renderSubmenu = (item: any, level = 0) => {
    if (!item.submenu) return null;

    return (
      <CollapsibleContent className={`pl-${level + 4}`}>
        <ul className="space-y-1">
          {item.submenu.map((subItem: any, idx: number) => (
            <li key={idx}>
              {subItem.submenu ? (
                <Collapsible
                  open={!!openItems[subItem.title]}
                  onOpenChange={() => toggleSubmenu(subItem.title)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-sm text-gray-300 hover:text-white hover:bg-[#5d4037] ${
                        isActive(subItem.path) ? "bg-[#5d4037] text-white" : ""
                      }`}
                    >
                      <i className={`${subItem.icon} mr-2 text-base`}></i>
                      <span className="truncate">{subItem.title}</span>
                      <i className={`ri-arrow-down-s-line ml-auto transition-transform ${
                        openItems[subItem.title] ? "rotate-180" : ""
                      }`}></i>
                    </Button>
                  </CollapsibleTrigger>
                  {renderSubmenu(subItem, level + 1)}
                </Collapsible>
              ) : (
                <Link href={subItem.path}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-sm text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/10 ${
                      isActive(subItem.path) ? "bg-sidebar-accent/10 text-sidebar-foreground" : ""
                    }`}
                  >
                    <i className={`${subItem.icon} mr-2 text-base`}></i>
                    <span className="truncate">{subItem.title}</span>
                  </Button>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    );
  };

  return (
    <aside 
      className={`fixed inset-y-0 left-0 bg-[#4e342e] text-white flex flex-col z-30 transition-all duration-300 ease-in-out ${
        collapsed ? "w-0 md:w-20" : "w-64"
      }`}
    >
      {/* Logo & Title */}
      <div className="flex items-center h-16 px-4 border-b border-[#5d4037]">
        <img 
          src="https://pixabay.com/get/g6f7d14410f8d54f0e4b4b9213e13d43e90cb2b20e57eef747ce571e1bd485ecd50a80dd0ccc1ece33b34065072a427a17dc62c2eddf67b989421531328b1d04d_1280.jpg" 
          alt="CocoReeno Logo" 
          className="h-10 w-10 rounded-full object-cover" 
        />
        {!collapsed && (
          <div className="ml-3">
            <h1 className="font-semibold text-xl text-white">CocoReeno</h1>
            <p className="text-xs text-gray-300">Enterprise ERP</p>
          </div>
        )}
        {isMobile && (
          <Button 
            onClick={() => setCollapsed(!collapsed)} 
            variant="ghost" 
            size="icon" 
            className="ml-auto text-gray-300 hover:text-white"
          >
            <i className={`${collapsed ? "ri-menu-line" : "ri-close-line"} text-xl`}></i>
          </Button>
        )}
      </div>

      {/* User profile removed as requested */}

      {/* Navigation */}
      <ScrollArea className="flex-1">
        <nav className="p-2">
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <Collapsible
                    open={!!openItems[item.title]}
                    onOpenChange={() => toggleSubmenu(item.title)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${
                          isActive(item.path) 
                            ? "bg-[#9efe00] text-[#4e342e] font-medium" 
                            : "text-white hover:bg-[#5d4037]"
                        } ${collapsed ? "px-2" : "px-4"}`}
                      >
                        <i className={`${item.icon} ${collapsed ? "" : "mr-2"} text-lg`}></i>
                        {!collapsed && (
                          <>
                            <span className="truncate">{item.title}</span>
                            <i className={`ri-arrow-down-s-line ml-auto transition-transform ${
                              openItems[item.title] ? "rotate-180" : ""
                            }`}></i>
                          </>
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    {!collapsed && renderSubmenu(item)}
                  </Collapsible>
                ) : (
                  <Link href={item.path}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start ${
                        isActive(item.path) 
                          ? "bg-[#9efe00] text-[#4e342e] font-medium" 
                          : "text-white hover:bg-[#5d4037]"
                      } ${collapsed ? "px-2" : "px-4"}`}
                    >
                      <i className={`${item.icon} ${collapsed ? "" : "mr-2"} text-lg`}></i>
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </Button>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>

      {/* Bottom actions */}
      <div className="p-4 border-t border-[#5d4037]">
        {!collapsed ? (
          <>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-[#5d4037] mb-2">
              <i className="ri-settings-3-line mr-2"></i>
              <span>Settings</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white hover:bg-[#5d4037]">
              <i className="ri-logout-box-line mr-2"></i>
              <span>Logout</span>
            </Button>
          </>
        ) : (
          <>
            <Button variant="ghost" className="w-full justify-center text-gray-300 hover:text-white hover:bg-[#5d4037] mb-2">
              <i className="ri-settings-3-line"></i>
            </Button>
            <Button variant="ghost" className="w-full justify-center text-gray-300 hover:text-white hover:bg-[#5d4037]">
              <i className="ri-logout-box-line"></i>
            </Button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
