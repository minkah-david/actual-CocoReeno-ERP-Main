import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const SecurityPage = () => {
  // Security data
  const securityIncidents = [
    { month: "Jan", incidents: 2, resolved: 2, avgTime: 4.2, threats: 15, breaches: 0 },
    { month: "Feb", incidents: 1, resolved: 1, avgTime: 3.8, threats: 12, breaches: 0 },
    { month: "Mar", incidents: 3, resolved: 3, avgTime: 5.1, threats: 18, breaches: 0 },
    { month: "Apr", incidents: 0, resolved: 0, avgTime: 0, threats: 9, breaches: 0 },
    { month: "May", incidents: 1, resolved: 1, avgTime: 2.5, threats: 14, breaches: 0 },
    { month: "Jun", incidents: 2, resolved: 2, avgTime: 3.9, threats: 11, breaches: 0 }
  ];

  const assetMonitoring = [
    { location: "Tema Processing Facility", cameras: 24, sensors: 18, alarms: 6, status: "Operational", lastCheck: "2024-06-15 08:30" },
    { location: "Accra Distribution Center", cameras: 16, sensors: 12, alarms: 4, status: "Operational", lastCheck: "2024-06-15 09:15" },
    { location: "Kumasi Warehouse", cameras: 12, sensors: 8, alarms: 3, status: "Maintenance", lastCheck: "2024-06-14 16:45" },
    { location: "Head Office Complex", cameras: 20, sensors: 15, alarms: 5, status: "Operational", lastCheck: "2024-06-15 10:00" },
    { location: "Export Terminal", cameras: 8, sensors: 6, alarms: 2, status: "Operational", lastCheck: "2024-06-15 07:45" }
  ];

  const emergencyResponse = [
    { type: "Fire Emergency", responseTime: "< 3 min", lastDrill: "2024-05-20", nextDrill: "2024-08-20", personnel: 45, status: "Ready" },
    { type: "Security Breach", responseTime: "< 2 min", lastDrill: "2024-06-01", nextDrill: "2024-09-01", personnel: 28, status: "Ready" },
    { type: "Medical Emergency", responseTime: "< 5 min", lastDrill: "2024-04-15", nextDrill: "2024-07-15", personnel: 35, status: "Ready" },
    { type: "Natural Disaster", responseTime: "< 10 min", lastDrill: "2024-03-10", nextDrill: "2024-06-10", personnel: 78, status: "Due" },
    { type: "Evacuation", responseTime: "< 8 min", lastDrill: "2024-05-30", nextDrill: "2024-08-30", personnel: 78, status: "Ready" }
  ];

  const riskAssessment = [
    { area: "Physical Security", level: "Low", mitigation: "Enhanced surveillance", trend: "Stable", score: 85 },
    { area: "Asset Protection", level: "Medium", mitigation: "Upgraded monitoring", trend: "Improving", score: 78 },
    { area: "Access Control", level: "Low", mitigation: "Biometric systems", trend: "Stable", score: 92 },
    { area: "Perimeter Security", level: "Low", mitigation: "Fence upgrades", trend: "Improving", score: 88 },
    { area: "Emergency Preparedness", level: "Medium", mitigation: "Regular drills", trend: "Improving", score: 82 }
  ];

  const securityPersonnel = [
    { shift: "Day Shift (6AM-2PM)", guards: 12, supervisors: 2, coverage: "100%", efficiency: 94 },
    { shift: "Evening Shift (2PM-10PM)", guards: 10, supervisors: 2, coverage: "100%", efficiency: 91 },
    { shift: "Night Shift (10PM-6AM)", guards: 8, supervisors: 1, coverage: "100%", efficiency: 89 },
    { shift: "Roving Patrol", guards: 4, supervisors: 1, coverage: "All Sites", efficiency: 96 }
  ];

  const inventoryProtection = [
    { category: "Raw Materials", value: 2400000, protection: "High", monitoring: "24/7 CCTV", incidents: 0 },
    { category: "Finished Products", value: 1800000, protection: "High", monitoring: "Sensor Network", incidents: 1 },
    { category: "Equipment & Machinery", value: 3200000, protection: "Medium", monitoring: "Access Control", incidents: 0 },
    { category: "Packaging Materials", value: 450000, protection: "Medium", monitoring: "Periodic Checks", incidents: 0 },
    { category: "Vehicles & Fleet", value: 850000, protection: "High", monitoring: "GPS Tracking", incidents: 0 }
  ];

  const formatCurrency = (value: number) => `GH₵ ${(value / 1000000).toFixed(1)}M`;

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Operational": return "bg-green-100 text-green-700";
      case "Maintenance": return "bg-amber-100 text-amber-700";
      case "Alert": return "bg-red-100 text-red-700";
      case "Ready": return "bg-green-100 text-green-700";
      case "Due": return "bg-amber-100 text-amber-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch(level) {
      case "Low": return "bg-green-100 text-green-700";
      case "Medium": return "bg-amber-100 text-amber-700";
      case "High": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getProtectionColor = (protection: string) => {
    switch(protection) {
      case "High": return "bg-green-100 text-green-700";
      case "Medium": return "bg-amber-100 text-amber-700";
      case "Low": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getTrendColor = (trend: string) => {
    switch(trend) {
      case "Improving": return "text-green-600";
      case "Stable": return "text-blue-600";
      case "Declining": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Security & Asset Management</h2>
        <p className="text-muted-foreground">Comprehensive physical security, asset protection, and emergency response management</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="monitoring">Asset Monitoring</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Response</TabsTrigger>
          <TabsTrigger value="protection">Inventory Protection</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">99.8%</p>
                  <p className="text-sm text-muted-foreground">Security Uptime</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">5 locations</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">9</p>
                  <p className="text-sm text-muted-foreground">Security Incidents</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">100% resolved</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">GH₵ 8.7M</p>
                  <p className="text-sm text-muted-foreground">Protected Assets</p>
                  <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700">Under surveillance</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">37</p>
                  <p className="text-sm text-muted-foreground">Security Personnel</p>
                  <Badge variant="outline" className="mt-1 bg-purple-50 text-purple-700">24/7 coverage</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security Incidents & Risk Assessment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Incidents & Response (6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={securityIncidents}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="incidents" fill="#ef4444" name="Incidents" />
                      <Bar dataKey="resolved" fill="#9efe00" name="Resolved" />
                      <Bar dataKey="threats" fill="#ffc658" name="Threats Detected" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {riskAssessment.map((risk, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{risk.area}</span>
                          <Badge className={getRiskLevelColor(risk.level)}>{risk.level}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{risk.mitigation}</span>
                          <span className={getTrendColor(risk.trend)}>
                            {risk.trend === "Improving" ? "↗" : risk.trend === "Declining" ? "↘" : "→"} {risk.trend}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${risk.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Asset Monitoring Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assetMonitoring.map((site, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{site.location}</span>
                        <Badge className={getStatusColor(site.status)}>{site.status}</Badge>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <i className="ri-camera-line mr-1"></i>
                          <span>{site.cameras} cameras</span>
                        </div>
                        <div className="flex items-center">
                          <i className="ri-radar-line mr-1"></i>
                          <span>{site.sensors} sensors</span>
                        </div>
                        <div className="flex items-center">
                          <i className="ri-alarm-warning-line mr-1"></i>
                          <span>{site.alarms} alarms</span>
                        </div>
                        <div className="flex items-center">
                          <i className="ri-time-line mr-1"></i>
                          <span>Last check: {site.lastCheck}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Personnel Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {securityPersonnel.map((shift, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{shift.shift}</span>
                          <span className="text-sm font-bold">{shift.coverage}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{shift.guards} guards • {shift.supervisors} supervisors</span>
                          <span>Efficiency: {shift.efficiency}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${shift.efficiency}%` }}
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
                <CardTitle>Surveillance Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-primary/10 rounded">
                    <p className="text-2xl font-bold text-primary">80</p>
                    <p className="text-sm text-muted-foreground">Total CCTV Cameras</p>
                    <p className="text-xs text-green-600">99.5% operational</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <p className="font-bold text-blue-600">59</p>
                      <p className="text-blue-600">Motion Sensors</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded">
                      <p className="font-bold text-green-600">20</p>
                      <p className="text-green-600">Alarm Systems</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Emergency Response Preparedness</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {emergencyResponse.map((emergency, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{emergency.type}</span>
                        <Badge className={getStatusColor(emergency.status)}>{emergency.status}</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                        <div>
                          <span className="font-medium">Response Time: </span>
                          <span className="text-primary">{emergency.responseTime}</span>
                        </div>
                        <div>
                          <span className="font-medium">Personnel: </span>
                          <span>{emergency.personnel}</span>
                        </div>
                        <div>
                          <span className="font-medium">Last Drill: </span>
                          <span>{emergency.lastDrill}</span>
                        </div>
                        <div>
                          <span className="font-medium">Next Drill: </span>
                          <span className={emergency.status === "Due" ? "text-amber-600" : ""}>{emergency.nextDrill}</span>
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
                  <i className="ri-shield-check-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Emergency Protocols</p>
                  <p className="text-xs text-green-600">All personnel trained</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-time-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">< 5 min</p>
                  <p className="text-sm text-muted-foreground">Avg Response Time</p>
                  <p className="text-xs text-green-600">Industry leading</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-team-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">78</p>
                  <p className="text-sm text-muted-foreground">Trained Personnel</p>
                  <p className="text-xs text-blue-600">100% certification</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="protection" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Protection & Surveillance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inventoryProtection.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{item.category}</span>
                        <div className="flex items-center space-x-2">
                          <Badge className={getProtectionColor(item.protection)}>{item.protection} Protection</Badge>
                          <span className="text-sm font-bold">{formatCurrency(item.value)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Monitoring: {item.monitoring}</span>
                        <span className={item.incidents === 0 ? "text-green-600" : "text-amber-600"}>
                          {item.incidents} incidents this year
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Asset Protection Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded">
                    <p className="text-2xl font-bold text-green-600">GH₵ 8.7M</p>
                    <p className="text-sm text-muted-foreground">Total Protected Value</p>
                    <p className="text-xs text-green-600">Zero major losses this year</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center p-3 bg-primary/10 rounded">
                      <p className="font-bold text-primary">99.9%</p>
                      <p className="text-muted-foreground">Protection Rate</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <p className="font-bold text-blue-600">1</p>
                      <p className="text-blue-600">Minor Incidents</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Improvements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Perimeter Fence Upgrade</p>
                      <p className="text-xs text-muted-foreground">Enhanced barrier system</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Completed</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Biometric Access Control</p>
                      <p className="text-xs text-muted-foreground">Fingerprint & face recognition</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">AI Surveillance System</p>
                      <p className="text-xs text-muted-foreground">Automated threat detection</p>
                    </div>
                    <Badge className="bg-amber-100 text-amber-700">Planned</Badge>
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

export default SecurityPage;