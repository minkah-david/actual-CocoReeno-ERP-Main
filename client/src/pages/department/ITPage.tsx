import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const ITPage = () => {
  // IT data
  const systemHealth = [
    { system: "ERP System", uptime: 99.8, performance: 94, lastUpdate: "2024-06-10", status: "Operational" },
    { system: "POS System", uptime: 99.5, performance: 92, lastUpdate: "2024-06-08", status: "Operational" },
    { system: "CRM Platform", uptime: 98.9, performance: 89, lastUpdate: "2024-06-12", status: "Operational" },
    { system: "Inventory Management", uptime: 99.2, performance: 91, lastUpdate: "2024-06-15", status: "Operational" },
    { system: "Financial System", uptime: 99.6, performance: 96, lastUpdate: "2024-06-05", status: "Operational" }
  ];

  const securityMetrics = [
    { month: "Jan", threats: 25, blocked: 24, incidents: 1, patches: 12 },
    { month: "Feb", threats: 32, blocked: 31, incidents: 1, patches: 8 },
    { month: "Mar", threats: 28, blocked: 28, incidents: 0, patches: 15 },
    { month: "Apr", threats: 41, blocked: 40, incidents: 1, patches: 10 },
    { month: "May", threats: 35, blocked: 35, incidents: 0, patches: 18 },
    { month: "Jun", threats: 29, blocked: 29, incidents: 0, patches: 14 }
  ];

  const projectPortfolio = [
    { id: "IT-2024-001", name: "AI-Powered Inventory Optimization", progress: 75, budget: 250000, team: 5, priority: "High", deadline: "2024-08-30" },
    { id: "IT-2024-002", name: "Mobile Sales App Enhancement", progress: 92, budget: 180000, team: 4, priority: "Medium", deadline: "2024-07-15" },
    { id: "IT-2024-003", name: "Cybersecurity Infrastructure Upgrade", progress: 68, budget: 320000, team: 6, priority: "High", deadline: "2024-09-20" },
    { id: "IT-2024-004", name: "Cloud Migration Phase 2", progress: 45, budget: 450000, team: 7, priority: "Critical", deadline: "2024-10-30" },
    { id: "IT-2024-005", name: "IoT Sensor Network Deployment", progress: 38, budget: 200000, team: 3, priority: "Medium", deadline: "2024-11-15" }
  ];

  const infrastructureCosts = [
    { category: "Cloud Services", monthly: 15000, annual: 180000, percentage: 35, color: "#9efe00" },
    { category: "Software Licenses", monthly: 8500, annual: 102000, percentage: 20, color: "#4e342e" },
    { category: "Hardware & Equipment", monthly: 12000, annual: 144000, percentage: 28, color: "#82ca9d" },
    { category: "Security & Compliance", monthly: 6000, annual: 72000, percentage: 14, color: "#ffc658" },
    { category: "Support & Maintenance", monthly: 1500, annual: 18000, percentage: 3, color: "#ff7c7c" }
  ];

  const helpDeskMetrics = [
    { category: "Hardware Issues", tickets: 45, resolved: 42, avgTime: "2.3 hours", satisfaction: 4.2 },
    { category: "Software Problems", tickets: 68, resolved: 65, avgTime: "1.8 hours", satisfaction: 4.5 },
    { category: "Network Issues", tickets: 23, resolved: 22, avgTime: "3.1 hours", satisfaction: 4.1 },
    { category: "Access Requests", tickets: 92, resolved: 90, avgTime: "0.5 hours", satisfaction: 4.7 },
    { category: "Training Support", tickets: 34, resolved: 34, avgTime: "1.2 hours", satisfaction: 4.6 }
  ];

  const formatCurrency = (value: number) => `GH₵ ${(value / 1000).toFixed(0)}K`;

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Operational": return "bg-green-100 text-green-700";
      case "Warning": return "bg-amber-100 text-amber-700";
      case "Critical": return "bg-red-100 text-red-700";
      case "Maintenance": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "Critical": return "bg-red-100 text-red-700";
      case "High": return "bg-amber-100 text-amber-700";
      case "Medium": return "bg-blue-100 text-blue-700";
      case "Low": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getHealthColor = (value: number) => {
    if (value >= 95) return "text-green-600";
    if (value >= 90) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Information Technology - IT & Systems</h2>
        <p className="text-muted-foreground">Comprehensive IT infrastructure management and digital transformation</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">99.4%</p>
                  <p className="text-sm text-muted-foreground">System Uptime</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">5 systems</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">262</p>
                  <p className="text-sm text-muted-foreground">Support Tickets</p>
                  <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700">96% resolved</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">GH₵ 516K</p>
                  <p className="text-sm text-muted-foreground">Annual IT Budget</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">68% utilized</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">0</p>
                  <p className="text-sm text-muted-foreground">Security Incidents</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">This month</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Health & Help Desk Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>System Health Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {systemHealth.map((system, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{system.system}</span>
                          <Badge className={getStatusColor(system.status)}>{system.status}</Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-2">
                          <span>Uptime: <span className={getHealthColor(system.uptime)}>{system.uptime}%</span></span>
                          <span>Performance: <span className={getHealthColor(system.performance)}>{system.performance}%</span></span>
                        </div>
                        <p className="text-xs text-muted-foreground">Last update: {system.lastUpdate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Help Desk Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {helpDeskMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{metric.category}</span>
                          <span className="text-sm font-bold">{metric.tickets} tickets</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                          <span>Resolved: {metric.resolved}</span>
                          <span>Avg time: {metric.avgTime}</span>
                          <span>Rating: {metric.satisfaction}/5</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${(metric.resolved / metric.tickets) * 100}%` }}
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

        <TabsContent value="infrastructure" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Infrastructure Cost Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={infrastructureCosts}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="annual"
                      >
                        {infrastructureCosts.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                  {infrastructureCosts.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span>{item.category}</span>
                      </div>
                      <span className="font-medium">{formatCurrency(item.monthly)}/month</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Infrastructure Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded">
                      <i className="ri-server-line text-3xl text-blue-600 mb-2"></i>
                      <p className="text-lg font-bold">12</p>
                      <p className="text-sm text-muted-foreground">Physical Servers</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded">
                      <i className="ri-cloud-line text-3xl text-green-600 mb-2"></i>
                      <p className="text-lg font-bold">25</p>
                      <p className="text-sm text-muted-foreground">Cloud Instances</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded">
                      <i className="ri-wifi-line text-3xl text-purple-600 mb-2"></i>
                      <p className="text-lg font-bold">8</p>
                      <p className="text-sm text-muted-foreground">Network Devices</p>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded">
                      <i className="ri-computer-line text-3xl text-amber-600 mb-2"></i>
                      <p className="text-lg font-bold">78</p>
                      <p className="text-sm text-muted-foreground">End User Devices</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Performance Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Server Performance</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">CPU Usage</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                        </div>
                        <span className="text-sm font-medium">68%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Memory Usage</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-amber-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                        </div>
                        <span className="text-sm font-medium">82%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Storage Usage</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "74%" }}></div>
                        </div>
                        <span className="text-sm font-medium">74%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Network Performance</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Bandwidth Usage</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Latency</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                        </div>
                        <span className="text-sm font-medium">12ms</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Packet Loss</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "2%" }}></div>
                        </div>
                        <span className="text-sm font-medium">0.1%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Application Health</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Response Time</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                        <span className="text-sm font-medium">1.2s</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Error Rate</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "3%" }}></div>
                        </div>
                        <span className="text-sm font-medium">0.2%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Throughput</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="text-sm font-medium">850 req/s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Metrics (6 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={securityMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="threats" fill="#ef4444" name="Threats Detected" />
                    <Bar dataKey="blocked" fill="#9efe00" name="Threats Blocked" />
                    <Bar dataKey="incidents" fill="#ffc658" name="Security Incidents" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded">
                    <i className="ri-shield-check-line text-3xl text-green-600 mb-2"></i>
                    <p className="text-lg font-bold">99.2%</p>
                    <p className="text-sm text-muted-foreground">Threat Prevention Rate</p>
                    <p className="text-xs text-green-600">190 threats blocked this month</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <p className="font-bold text-blue-600">85</p>
                      <p className="text-xs text-muted-foreground">Security Patches Applied</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <p className="font-bold text-purple-600">12</p>
                      <p className="text-xs text-muted-foreground">Vulnerability Scans</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">ISO 27001 Compliance</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">95%</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">GDPR Compliance</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">92%</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SOC 2 Type II</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                      </div>
                      <Badge className="bg-amber-100 text-amber-700">88%</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">PCI DSS</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "97%" }}></div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">97%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active IT Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectPortfolio.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium text-sm">{project.id}</span>
                        <Badge className={getPriorityColor(project.priority)}>{project.priority}</Badge>
                      </div>
                      <p className="font-semibold mb-1">{project.name}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Budget: {formatCurrency(project.budget)}</span>
                        <span>Team: {project.team} members</span>
                        <span>Deadline: {project.deadline}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="w-24 bg-muted rounded-full h-2 mb-1">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground">{project.progress}% complete</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-code-s-slash-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                  <p className="text-xs text-blue-600">Software development</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-team-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">25</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                  <p className="text-xs text-green-600">Across all projects</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-funds-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">GH₵ 1.4M</p>
                  <p className="text-sm text-muted-foreground">Total Project Budget</p>
                  <p className="text-xs text-amber-600">2024 allocation</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-calendar-check-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">63%</p>
                  <p className="text-sm text-muted-foreground">Average Progress</p>
                  <p className="text-xs text-green-600">On schedule</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ITPage;