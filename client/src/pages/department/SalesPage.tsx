import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const SalesPage = () => {
  // Sales data
  const salesData = [
    { month: "Jan", direct: 1200000, mobile: 800000, ecommerce: 600000, total: 2600000 },
    { month: "Feb", direct: 1350000, mobile: 920000, ecommerce: 720000, total: 2990000 },
    { month: "Mar", direct: 1180000, mobile: 850000, ecommerce: 680000, total: 2710000 },
    { month: "Apr", direct: 1480000, mobile: 1050000, ecommerce: 820000, total: 3350000 },
    { month: "May", direct: 1420000, mobile: 980000, ecommerce: 790000, total: 3190000 },
    { month: "Jun", direct: 1650000, mobile: 1180000, ecommerce: 920000, total: 3750000 }
  ];

  const topSalespersons = [
    { id: 1, name: "Kwesi Adams", sales: 450800, target: 400000, region: "Central", deals: 23, performance: 112.7 },
    { id: 2, name: "Kofi Mensah", sales: 425000, target: 400000, region: "Greater Accra", deals: 21, performance: 106.3 },
    { id: 3, name: "Ama Owusu", sales: 389000, target: 350000, region: "Greater Accra", deals: 19, performance: 111.1 },
    { id: 4, name: "Efua Dadzie", sales: 321000, target: 300000, region: "Eastern", deals: 16, performance: 107.0 },
    { id: 5, name: "Kwame Asante", sales: 287000, target: 350000, region: "Ashanti", deals: 14, performance: 82.0 }
  ];

  const customerSegments = [
    { name: "Retail Chains", value: 4200000, percentage: 42, color: "#9efe00" },
    { name: "Export Markets", value: 2800000, color: "#4e342e", percentage: 28 },
    { name: "Local Distributors", value: 1800000, color: "#82ca9d", percentage: 18 },
    { name: "Direct Consumers", value: 1200000, color: "#ffc658", percentage: 12 }
  ];

  const activeDeals = [
    { id: "DL-2024-078", client: "SuperMart Ghana", value: 285000, stage: "Negotiation", probability: 75, salesperson: "Kofi Mensah" },
    { id: "DL-2024-079", client: "Export Partners Ltd", value: 420000, stage: "Proposal", probability: 60, salesperson: "Kwesi Adams" },
    { id: "DL-2024-080", client: "Tema Distribution", value: 180000, stage: "Closing", probability: 90, salesperson: "Ama Owusu" },
    { id: "DL-2024-081", client: "Kumasi Retailers", value: 320000, stage: "Discovery", probability: 40, salesperson: "Kwame Asante" }
  ];

  const formatCurrency = (value: number) => `GH₵ ${(value / 1000000).toFixed(1)}M`;
  const formatCurrencyK = (value: number) => `GH₵ ${(value / 1000).toFixed(0)}K`;

  const getStageColor = (stage: string) => {
    switch(stage) {
      case "Discovery": return "bg-blue-100 text-blue-700";
      case "Proposal": return "bg-amber-100 text-amber-700";
      case "Negotiation": return "bg-purple-100 text-purple-700";
      case "Closing": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Sales & Distribution</h2>
        <p className="text-muted-foreground">Comprehensive sales management and distribution oversight</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="pipeline">Sales Pipeline</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">GH₵ 18.6M</p>
                  <p className="text-sm text-muted-foreground">Total Sales YTD</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+18.5%</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">147</p>
                  <p className="text-sm text-muted-foreground">Active Customers</p>
                  <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700">+12</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">GH₵ 1.2M</p>
                  <p className="text-sm text-muted-foreground">Pipeline Value</p>
                  <Badge variant="outline" className="mt-1 bg-amber-50 text-amber-700">23 deals</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">68%</p>
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+5.2%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sales Channels & Customer Segments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Sales by Channel (6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={formatCurrency} />
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                      <Bar dataKey="direct" fill="#9efe00" name="Direct Sales" stackId="a" />
                      <Bar dataKey="mobile" fill="#4e342e" name="Mobile Sales" stackId="a" />
                      <Bar dataKey="ecommerce" fill="#82ca9d" name="E-Commerce" stackId="a" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Segments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={customerSegments}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {customerSegments.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  {customerSegments.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span>{item.name}: {item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Salespersons</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSalespersons.map((person, index) => (
                  <div key={person.id} className="flex items-center space-x-4 p-4 bg-muted/20 rounded">
                    <div className="flex items-center space-x-3">
                      <div className="text-sm font-bold text-primary">#{index + 1}</div>
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {getInitials(person.name)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4">
                      <div>
                        <p className="font-medium text-sm">{person.name}</p>
                        <p className="text-xs text-muted-foreground">{person.region} Region</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{formatCurrencyK(person.sales)}</p>
                        <p className="text-xs text-muted-foreground">Sales</p>
                      </div>
                      <div>
                        <p className="text-sm">{person.performance}%</p>
                        <p className="text-xs text-muted-foreground">vs Target</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{person.deals}</p>
                        <p className="text-xs text-muted-foreground">Deals Closed</p>
                      </div>
                      <div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${person.performance > 100 ? 'bg-green-500' : person.performance > 80 ? 'bg-amber-500' : 'bg-red-500'}`}
                            style={{ width: `${Math.min(person.performance, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-trophy-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">Kwesi Adams</p>
                  <p className="text-sm text-muted-foreground">Top Performer This Month</p>
                  <Badge className="mt-2 bg-green-100 text-green-700">112.7% of target</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-trending-up-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">18.5%</p>
                  <p className="text-sm text-muted-foreground">YoY Growth Rate</p>
                  <p className="text-xs text-green-600">Best performance in 3 years</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-team-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Active Sales Reps</p>
                  <p className="text-xs text-blue-600">Covering 5 regions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pipeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Sales Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeDeals.map((deal, index) => (
                  <div key={deal.id} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium text-sm">{deal.id}</span>
                        <Badge className={getStageColor(deal.stage)}>{deal.stage}</Badge>
                      </div>
                      <p className="font-semibold">{deal.client}</p>
                      <p className="text-sm text-muted-foreground">Assigned to: {deal.salesperson}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{formatCurrencyK(deal.value)}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${deal.probability}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">{deal.probability}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">6</p>
                  <p className="text-sm text-muted-foreground">Discovery</p>
                  <p className="text-xs text-muted-foreground">GH₵ 420K value</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-600">8</p>
                  <p className="text-sm text-muted-foreground">Proposal</p>
                  <p className="text-xs text-muted-foreground">GH₵ 380K value</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">5</p>
                  <p className="text-sm text-muted-foreground">Negotiation</p>
                  <p className="text-xs text-muted-foreground">GH₵ 285K value</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">4</p>
                  <p className="text-sm text-muted-foreground">Closing</p>
                  <p className="text-xs text-muted-foreground">GH₵ 115K value</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customers" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Customers by Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">MaxMart Retail Chain</p>
                      <p className="text-xs text-muted-foreground">Retail • 24 locations</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">GH₵ 2.4M</p>
                      <p className="text-xs text-green-600">+15% YoY</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">GlobalTrade Export Ltd</p>
                      <p className="text-xs text-muted-foreground">Export • International</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">GH₵ 1.8M</p>
                      <p className="text-xs text-green-600">+22% YoY</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Accra Distribution Hub</p>
                      <p className="text-xs text-muted-foreground">Distribution • Local</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">GH₵ 1.2M</p>
                      <p className="text-xs text-green-600">+8% YoY</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Tema Industrial Supplies</p>
                      <p className="text-xs text-muted-foreground">B2B • Manufacturing</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">GH₵ 950K</p>
                      <p className="text-xs text-amber-600">-2% YoY</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Acquisition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/20 rounded">
                    <p className="text-2xl font-bold text-primary">28</p>
                    <p className="text-sm text-muted-foreground">New Customers</p>
                    <p className="text-xs text-green-600">This quarter</p>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded">
                    <p className="text-2xl font-bold text-foreground">94%</p>
                    <p className="text-sm text-muted-foreground">Retention Rate</p>
                    <p className="text-xs text-green-600">Last 12 months</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Customer Satisfaction</span>
                    <span className="text-sm font-medium">4.6/5.0</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Repeat Purchase Rate</span>
                    <span className="text-sm font-medium">76%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "76%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SalesPage;