import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, LineChart, Line } from "recharts";

const pieData = [
  { name: 'Raw Coconuts', value: 45 },
  { name: 'Coconut Water', value: 25 },
  { name: 'Coconut Oil', value: 15 },
  { name: 'Coconut Flour', value: 10 },
  { name: 'Other Products', value: 5 },
];

const COLORS = ['#A8CF45', '#4D3319', '#7A5A3C', '#C4E675', '#2E1F0F'];

const productionData = [
  { month: 'Jan', production: 720 },
  { month: 'Feb', production: 680 },
  { month: 'Mar', production: 750 },
  { month: 'Apr', production: 830 },
  { month: 'May', production: 790 },
  { month: 'Jun', production: 846 },
];

const revenueByRegion = [
  { region: 'Greater Accra', value: 420000 },
  { region: 'Western', value: 380000 },
  { region: 'Volta', value: 290000 },
  { region: 'Central', value: 220000 },
  { region: 'Eastern', value: 120000 },
];

const farmersData = [
  { month: 'Jan', farmers: 2100 },
  { month: 'Feb', farmers: 2150 },
  { month: 'Mar', farmers: 2220 },
  { month: 'Apr', farmers: 2280 },
  { month: 'May', farmers: 2350 },
  { month: 'Jun', farmers: 2419 },
];

const BusinessIntelligence = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Business Intelligence</h2>
        <p className="text-muted-foreground">Analytics, reporting, forecasting, and risk assessment for CocoReeno.</p>
      </div>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="farmers">Farmers</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Revenue Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Revenue Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend layout="vertical" verticalAlign="middle" align="right" />
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            {/* Revenue by Region */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Revenue by Region</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueByRegion}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="region" axisLine={false} tickLine={false} />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tickFormatter={(value) => `GH₵${(value/1000).toFixed(0)}K`} 
                      />
                      <Tooltip formatter={(value) => `GH₵${value.toLocaleString()}`} />
                      <Bar dataKey="value" fill="#A8CF45" name="Revenue" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-primary">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">YTD Revenue</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">GH₵ 8.2M</h3>
                  </div>
                  <span className="flex items-center text-green-500 text-sm font-medium">
                    <i className="ri-arrow-up-line mr-1"></i>
                    10.3%
                  </span>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Compared to GH₵ 7.4M last year
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-secondary">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Processing Cost</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">GH₵ 2.1M</h3>
                  </div>
                  <span className="flex items-center text-green-500 text-sm font-medium">
                    <i className="ri-arrow-down-line mr-1"></i>
                    5.2%
                  </span>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Improved efficiency from last quarter
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-amber-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Profit Margin</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">32.8%</h3>
                  </div>
                  <span className="flex items-center text-green-500 text-sm font-medium">
                    <i className="ri-arrow-up-line mr-1"></i>
                    3.6%
                  </span>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Increased from 29.2% last quarter
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="production">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Production Metrics (Tons)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={productionData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="production" fill="#A8CF45" name="Production (Tons)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="financial">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Financial Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Financial analysis content */}
              <p className="text-center p-8 text-muted-foreground">
                Financial analysis tools and detailed reports are under development.
                <br />
                Check back soon for comprehensive financial insights.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="farmers">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Registered Farmers Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={farmersData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="farmers" stroke="#4D3319" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BusinessIntelligence;
