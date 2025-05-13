import { Card, CardContent } from "@/components/ui/card";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RevenueChart from "@/components/dashboard/RevenueChart";
import InventoryStatus from "@/components/dashboard/InventoryStatus";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TopFarmingCommunities from "@/components/dashboard/TopFarmingCommunities";
import SustainabilityImpact from "@/components/dashboard/SustainabilityImpact";
import WeatherFarmConditions from "@/components/dashboard/WeatherFarmConditions";

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back, Dr. Michael. Here's an overview of CocoReeno's performance.</p>
      </div>
      
      {/* Quick stats */}
      <DashboardStats />
      
      {/* Revenue & Inventory */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue chart */}
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        
        {/* Inventory status */}
        <div>
          <InventoryStatus />
        </div>
      </div>
      
      {/* Recent Activity and Farming Communities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Activity */}
        <RecentActivity />
        
        {/* Top Farming Communities */}
        <TopFarmingCommunities />
      </div>
      
      {/* Sustainability Impact & Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Sustainability Impact */}
        <div className="lg:col-span-2">
          <SustainabilityImpact />
        </div>
        
        {/* Weather & Farm Conditions */}
        <WeatherFarmConditions />
      </div>
    </div>
  );
};

export default Dashboard;
