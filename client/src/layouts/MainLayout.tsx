import { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const MainLayout = ({ children, title = "CocoReeno Enterprise ERP" }: MainLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link 
          href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <meta name="description" content="CocoReeno Enterprise ERP - Integrated coconut development company ERP system" />
      </Helmet>
      
      <div className="flex h-screen bg-background overflow-hidden">
        <Sidebar 
          collapsed={sidebarCollapsed} 
          setCollapsed={setSidebarCollapsed} 
        />
        
        <main 
          className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
            sidebarCollapsed ? "ml-0 md:ml-20" : "ml-0 md:ml-64"
          }`}
        >
          <Header toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default MainLayout;
