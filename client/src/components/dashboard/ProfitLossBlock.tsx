import { useRevenueData } from "@/hooks/useDashboardData";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ProfitLossBlock = () => {
  const { data: financeData, isLoading } = useRevenueData();

  // Calculate total profit, revenue and expenditure
  const totals = financeData?.reduce(
    (acc, curr) => ({
      totalProfit: acc.totalProfit + curr.profit,
      totalRevenue: acc.totalRevenue + curr.revenue,
      totalExpenditure: acc.totalExpenditure + curr.expenditure,
    }),
    { totalProfit: 0, totalRevenue: 0, totalExpenditure: 0 }
  );

  // Format currency
  const formatCurrency = (value: number) => {
    return `GH₵ ${(value / 1000000).toFixed(2)}M`;
  };

  // Calculate profit margin percentage
  const profitMargin = totals ? ((totals.totalProfit / totals.totalRevenue) * 100).toFixed(1) : "0";

  // Format tooltip value
  const formatTooltipValue = (value: number) => {
    return `GH₵ ${value.toLocaleString()}`;
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-5">
          <Skeleton className="h-6 w-32 mb-4" />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
          <Skeleton className="h-44 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-5">
        <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">Profit & Loss</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-muted/20 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground">Total Profit</p>
            <p className="text-lg font-semibold text-primary">{formatCurrency(totals?.totalProfit || 0)}</p>
            <p className="text-xs text-muted-foreground">Profit Margin: <span className="text-primary">{profitMargin}%</span></p>
          </div>
          <div className="bg-muted/20 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground">Revenue vs Expenditure</p>
            <p className="text-lg font-semibold">{formatCurrency(totals?.totalRevenue || 0)}</p>
            <p className="text-xs text-muted-foreground">{formatCurrency(totals?.totalExpenditure || 0)}</p>
          </div>
        </div>
        
        <div className="h-44">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={financeData}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
              <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip 
                formatter={formatTooltipValue}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
              <Area 
                type="monotone" 
                dataKey="profit" 
                fill="rgba(158, 207, 69, 0.2)" 
                stroke="rgba(158, 207, 69, 0.8)" 
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfitLossBlock;