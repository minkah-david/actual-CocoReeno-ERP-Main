import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const OperationsPage = () => {
  // Production data
  const productionData = [
    { month: "Jan", coconuts: 4200, oil: 850, water: 2100, flour: 420 },
    { month: "Feb", coconuts: 4800, oil: 960, water: 2400, flour: 480 },
    { month: "Mar", coconuts: 4500, oil: 900, water: 2250, flour: 450 },
    { month: "Apr", coconuts: 5200, oil: 1040, water: 2600, flour: 520 },
    { month: "May", coconuts: 4900, oil: 980, water: 2450, flour: 490 },
    { month: "Jun", coconuts: 5500, oil: 1100, water: 2750, flour: 550 }
  ];

  const qualityMetrics = [
    { metric: "Product Purity", value: 98.5, target: 98.0, status: "excellent" },
    { metric: "Processing Efficiency", value: 94.2, target: 92.0, status: "excellent" },
    { metric: "Waste Reduction", value: 89.7, target: 88.0, status: "good" },
    { metric: "Energy Efficiency", value: 91.3, target: 90.0, status: "good" },
    { metric: "Safety Compliance", value: 99.1, target: 98.5, status: "excellent" }
  ];

  const inventoryStatus = [
    { item: "Raw Coconuts", current: 12500, target: 15000, unit: "units", status: "low" },
    { item: "Coconut Oil", current: 3200, target: 3000, unit: "liters", status: "good" },
    { item: "Coconut Water", current: 8750, target: 8000, unit: "liters", status: "good" },
    { item: "Coconut Flour", current: 1850, target: 2500, unit: "kg", status: "low" },
    { item: "Packaging Materials", current: 45000, target: 40000, unit: "units", status: "good" }
  ];

  const fleetData = [
    { vehicle: "Truck 001", status: "active", location: "Tema", capacity: "15 tons", utilization: 85 },
    { vehicle: "Truck 002", status: "maintenance", location: "Workshop", capacity: "15 tons", utilization: 0 },
    { vehicle: "Truck 003", status: "active", location: "Accra", capacity: "20 tons", utilization: 92 },
    { vehicle: "Van 001", status: "active", location: "Kumasi", capacity: "5 tons", utilization: 78 },
    { vehicle: "Van 002", status: "idle", location: "Depot", capacity: "5 tons", utilization: 0 }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "excellent": return "bg-green-100 text-green-700";
      case "good": return "bg-blue-100 text-blue-700";
      case "low": return "bg-red-100 text-red-700";
      case "active": return "bg-green-100 text-green-700";
      case "maintenance": return "bg-amber-100 text-amber-700";
      case "idle": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Operations & Supply Chain</h2>
        <p className="text-muted-foreground">Comprehensive operational management and supply chain oversight</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="logistics">Logistics</TabsTrigger>
          <TabsTrigger value="quality">Quality Control</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">29,100</p>
                  <p className="text-sm text-muted-foreground">Coconuts Processed</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+12.8%</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">5,830L</p>
                  <p className="text-sm text-muted-foreground">Oil Produced</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+15.2%</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">94.2%</p>
                  <p className="text-sm text-muted-foreground">Processing Efficiency</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+2.1%</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">98.5%</p>
                  <p className="text-sm text-muted-foreground">Quality Score</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+0.5%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inventory Status */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Inventory Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventoryStatus.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{item.item}</span>
                          <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Current: {item.current.toLocaleString()} {item.unit}</span>
                          <span>Target: {item.target.toLocaleString()} {item.unit}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div 
                            className={`h-2 rounded-full ${item.current >= item.target ? 'bg-green-500' : 'bg-red-500'}`}
                            style={{ width: `${Math.min((item.current / item.target) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fleet Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {fleetData.map((vehicle, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{vehicle.vehicle}</span>
                          <Badge className={getStatusColor(vehicle.status)}>{vehicle.status}</Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <p>Location: {vehicle.location} • Capacity: {vehicle.capacity}</p>
                          {vehicle.utilization > 0 && (
                            <p>Utilization: {vehicle.utilization}%</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="production" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Production Output</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={productionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="coconuts" fill="#9efe00" name="Raw Coconuts" />
                    <Bar dataKey="oil" fill="#4e342e" name="Coconut Oil (L)" />
                    <Bar dataKey="water" fill="#82ca9d" name="Coconut Water (L)" />
                    <Bar dataKey="flour" fill="#ffc658" name="Coconut Flour (kg)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-plant-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">29,100</p>
                  <p className="text-sm text-muted-foreground">Raw Coconuts</p>
                  <p className="text-xs text-green-600">+12% vs last month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-drop-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">5,830L</p>
                  <p className="text-sm text-muted-foreground">Coconut Oil</p>
                  <p className="text-xs text-green-600">+15% vs last month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-water-flash-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">14,550L</p>
                  <p className="text-sm text-muted-foreground">Coconut Water</p>
                  <p className="text-xs text-green-600">+10% vs last month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-cake-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">2,910kg</p>
                  <p className="text-sm text-muted-foreground">Coconut Flour</p>
                  <p className="text-xs text-green-600">+8% vs last month</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="logistics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Fleet Utilization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fleetData.filter(v => v.utilization > 0).map((vehicle, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">{vehicle.vehicle}</span>
                        <span className="text-sm">{vehicle.utilization}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${vehicle.utilization}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {vehicle.location} • {vehicle.capacity}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Shipments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">SH-2024-0156</p>
                      <p className="text-xs text-muted-foreground">Accra Distribution Center</p>
                      <p className="text-xs text-green-600">Delivered - 2 hours ago</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">15 tons</p>
                      <p className="text-xs text-muted-foreground">Mixed Products</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">SH-2024-0155</p>
                      <p className="text-xs text-muted-foreground">Kumasi Warehouse</p>
                      <p className="text-xs text-amber-600">In Transit - 4 hours remaining</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">20 tons</p>
                      <p className="text-xs text-muted-foreground">Raw Coconuts</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">SH-2024-0154</p>
                      <p className="text-xs text-muted-foreground">Tema Port Export</p>
                      <p className="text-xs text-blue-600">Processing - Documentation</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-sm">25 tons</p>
                      <p className="text-xs text-muted-foreground">Coconut Oil</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="quality" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {qualityMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="font-medium text-sm mb-2">{metric.metric}</p>
                    <p className="text-2xl font-bold text-primary mb-1">{metric.value}%</p>
                    <p className="text-xs text-muted-foreground mb-2">Target: {metric.target}%</p>
                    <Badge className={getStatusColor(metric.status)}>{metric.status}</Badge>
                    <div className="w-full bg-muted rounded-full h-2 mt-3">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(metric.value / 100) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quality Control Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/20 rounded">
                  <i className="ri-test-tube-line text-2xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">156</p>
                  <p className="text-sm text-muted-foreground">Tests Completed Today</p>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded">
                  <i className="ri-shield-check-line text-2xl text-green-600 mb-2"></i>
                  <p className="text-lg font-bold">99.2%</p>
                  <p className="text-sm text-muted-foreground">Pass Rate</p>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded">
                  <i className="ri-alert-line text-2xl text-amber-600 mb-2"></i>
                  <p className="text-lg font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Quality Alerts</p>
                </div>
                <div className="text-center p-4 bg-muted/20 rounded">
                  <i className="ri-certificate-line text-2xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Certifications Active</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OperationsPage;