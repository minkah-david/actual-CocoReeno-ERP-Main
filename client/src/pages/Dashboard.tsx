import { Card, CardContent } from "@/components/ui/card";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ProfitLossBlock from "@/components/dashboard/ProfitLossBlock";
import SalespersonsTracking from "@/components/dashboard/SalespersonsTracking";
import SalespersonsPerformance from "@/components/dashboard/SalespersonsPerformance";
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
      
      {/* Revenue & Profit/Loss */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue & Expenditure chart */}
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        
        {/* Profit & Loss block */}
        <div>
          <ProfitLossBlock />
        </div>
      </div>
      
      {/* Salespersons Tracking & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Salespersons Map */}
        <div className="lg:col-span-2">
          <SalespersonsTracking />
        </div>
        
        {/* Top Performing Salespersons */}
        <div>
          <SalespersonsPerformance />
        </div>
      </div>
      
      {/* Inventory Status & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Inventory status */}
        <div>
          <InventoryStatus />
        </div>
        
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
      </div>
      
      {/* Farming Communities & Sustainability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Farming Communities */}
        <TopFarmingCommunities />
        
        {/* Sustainability Impact */}
        <SustainabilityImpact />
      </div>
      
      {/* Weather & Farm Conditions */}
      <div className="mb-8">
        <WeatherFarmConditions />
      </div>
    </div>
  );
};

export default Dashboard;
