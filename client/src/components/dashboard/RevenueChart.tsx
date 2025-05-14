import { useState } from "react";
import { useRevenueData } from "@/hooks/useDashboardData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const RevenueChart = () => {
  const [period, setPeriod] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');
  const { data: revenueData, isLoading } = useRevenueData();

  // Format currency in millions
  const formatYAxis = (value: number) => {
    return `${(value / 1000000).toFixed(1)}M`;
  };

  // Format tooltip value
  const formatTooltipValue = (value: number) => {
    return `GH₵ ${value.toLocaleString()}`;
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-32" />
            <div className="flex space-x-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-poppins font-semibold text-lg text-foreground">Revenue & Expenditure</h3>
          <div className="flex space-x-2">
            <Button 
              size="sm" 
              variant={period === 'monthly' ? 'default' : 'outline'}
              onClick={() => setPeriod('monthly')}
            >
              Monthly
            </Button>
            <Button 
              size="sm" 
              variant={period === 'quarterly' ? 'default' : 'outline'}
              onClick={() => setPeriod('quarterly')}
            >
              Quarterly
            </Button>
            <Button 
              size="sm" 
              variant={period === 'yearly' ? 'default' : 'outline'}
              onClick={() => setPeriod('yearly')}
            >
              Yearly
            </Button>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={revenueData}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tickFormatter={formatYAxis} 
                width={40}
              />
              <Tooltip 
                formatter={formatTooltipValue}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
              <Legend 
                verticalAlign="top" 
                height={36}
                iconType="circle" 
                iconSize={8}
                formatter={(value) => <span style={{ color: '#4B5563', fontSize: '0.875rem' }}>{value}</span>}
              />
              <Bar 
                name="Revenue" 
                dataKey="revenue" 
                fill="rgba(158, 207, 69, 0.8)" 
                barSize={20}
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                name="Expenditure" 
                dataKey="expenditure" 
                fill="rgba(239, 68, 68, 0.7)" 
                barSize={20}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
