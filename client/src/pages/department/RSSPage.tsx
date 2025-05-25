import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const RSSPage = () => {
  // RSS data
  const sustainabilityMetrics = [
    { month: "Jan", carbonReduction: 15, waterSaved: 2400, wasteRecycled: 850, farmersTrained: 45 },
    { month: "Feb", carbonReduction: 18, waterSaved: 2800, wasteRecycled: 920, farmersTrained: 52 },
    { month: "Mar", carbonReduction: 16, waterSaved: 2600, wasteRecycled: 880, farmersTrained: 48 },
    { month: "Apr", carbonReduction: 22, waterSaved: 3200, wasteRecycled: 1050, farmersTrained: 68 },
    { month: "May", carbonReduction: 20, waterSaved: 3100, wasteRecycled: 980, farmersTrained: 62 },
    { month: "Jun", carbonReduction: 25, waterSaved: 3600, wasteRecycled: 1180, farmersTrained: 78 }
  ];

  const communityProjects = [
    { id: "CP-2024-001", name: "Solar Water Pumping System", location: "Keta, Volta Region", beneficiaries: 450, budget: 85000, progress: 78, category: "Infrastructure" },
    { id: "CP-2024-002", name: "Women's Cooperative Training", location: "Axim, Western Region", beneficiaries: 120, budget: 35000, progress: 92, category: "Empowerment" },
    { id: "CP-2024-003", name: "Youth Agricultural Skills Program", location: "Elmina, Central Region", beneficiaries: 280, budget: 65000, progress: 65, category: "Training" },
    { id: "CP-2024-004", name: "Climate-Smart Farming Initiative", location: "Kumasi, Ashanti Region", beneficiaries: 340, budget: 95000, progress: 54, category: "Agriculture" },
    { id: "CP-2024-005", name: "Microfinance Support Program", location: "Tamale, Northern Region", beneficiaries: 200, budget: 45000, progress: 88, category: "Finance" }
  ];

  const impactAreas = [
    { area: "Farmer Empowerment", projects: 8, beneficiaries: 1240, budget: 320000, color: "#9efe00" },
    { area: "Climate Action", projects: 6, beneficiaries: 850, budget: 280000, color: "#4e342e" },
    { area: "Social Inclusion", projects: 5, beneficiaries: 670, budget: 180000, color: "#82ca9d" },
    { area: "Community Development", projects: 7, beneficiaries: 920, budget: 250000, color: "#ffc658" }
  ];

  const genderInclusionData = [
    { metric: "Women in Leadership", current: 42, target: 50, category: "Leadership" },
    { metric: "Youth Participation", current: 68, target: 65, category: "Youth" },
    { metric: "Female Farmers Trained", current: 378, target: 400, category: "Training" },
    { metric: "Women-Led Cooperatives", current: 15, target: 20, category: "Cooperatives" }
  ];

  const carbonFootprintData = [
    { source: "Transportation", current: 2800, target: 2500, reduction: 12 },
    { source: "Energy Consumption", current: 1950, target: 1800, reduction: 8 },
    { source: "Waste Management", current: 1200, target: 1000, reduction: 18 },
    { source: "Water Usage", current: 850, target: 750, reduction: 15 }
  ];

  const formatCurrency = (value: number) => `GH₵ ${(value / 1000).toFixed(0)}K`;

  const getProjectStatusColor = (progress: number) => {
    if (progress >= 90) return "bg-green-100 text-green-700";
    if (progress >= 70) return "bg-blue-100 text-blue-700";
    if (progress >= 50) return "bg-amber-100 text-amber-700";
    return "bg-red-100 text-red-700";
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Infrastructure": return "bg-blue-100 text-blue-700";
      case "Empowerment": return "bg-purple-100 text-purple-700";
      case "Training": return "bg-green-100 text-green-700";
      case "Agriculture": return "bg-amber-100 text-amber-700";
      case "Finance": return "bg-primary/10 text-primary";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Rural Development, Sustainability & Social Equity</h2>
        <p className="text-muted-foreground">Empowering communities through sustainable development and inclusive growth</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Community Projects</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          <TabsTrigger value="inclusion">Social Inclusion</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">3,680</p>
                  <p className="text-sm text-muted-foreground">People Benefited</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">26 projects</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">GH₵ 1.03M</p>
                  <p className="text-sm text-muted-foreground">Community Investment</p>
                  <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700">YTD budget</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">-18%</p>
                  <p className="text-sm text-muted-foreground">Carbon Reduction</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">vs 2023</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">353</p>
                  <p className="text-sm text-muted-foreground">Farmers Trained</p>
                  <Badge variant="outline" className="mt-1 bg-purple-50 text-purple-700">Climate-smart</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Areas & Monthly Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Impact Areas Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={impactAreas}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="budget"
                      >
                        {impactAreas.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                  {impactAreas.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span>{item.area}</span>
                      </div>
                      <span className="font-medium">{item.projects} projects</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Sustainability Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sustainabilityMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="carbonReduction" 
                        stroke="#9efe00" 
                        strokeWidth={3}
                        name="Carbon Reduction (tons)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="farmersTrained" 
                        stroke="#4e342e" 
                        strokeWidth={3}
                        name="Farmers Trained"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Community Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium text-sm">{project.id}</span>
                        <Badge className={getProjectStatusColor(project.progress)}>
                          {project.progress >= 90 ? "Near Complete" : 
                           project.progress >= 70 ? "On Track" : 
                           project.progress >= 50 ? "In Progress" : "At Risk"}
                        </Badge>
                        <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                      </div>
                      <p className="font-semibold mb-1">{project.name}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>📍 {project.location}</span>
                        <span>👥 {project.beneficiaries} beneficiaries</span>
                        <span>💰 {formatCurrency(project.budget)}</span>
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
                  <i className="ri-community-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">26</p>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                  <p className="text-xs text-green-600">5 regions covered</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-group-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">3,680</p>
                  <p className="text-sm text-muted-foreground">Total Beneficiaries</p>
                  <p className="text-xs text-blue-600">Direct impact</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-hand-heart-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Partner Organizations</p>
                  <p className="text-xs text-purple-600">Local collaborations</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-award-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">8</p>
                  <p className="text-sm text-muted-foreground">Completed Projects</p>
                  <p className="text-xs text-green-600">This year</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sustainability" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Footprint Reduction by Source</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {carbonFootprintData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{item.source}</span>
                        <Badge className="bg-green-100 text-green-700">-{item.reduction}%</Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>Current: {item.current} tons CO₂</span>
                        <span>Target: {item.target} tons CO₂</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(item.target / item.current) * 100}%` }}
                        ></div>
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
                <CardTitle>Environmental Impact Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded">
                    <i className="ri-water-flash-line text-3xl text-blue-600 mb-2"></i>
                    <p className="text-lg font-bold">18,800L</p>
                    <p className="text-sm text-muted-foreground">Water Saved (YTD)</p>
                    <p className="text-xs text-green-600">Through efficient irrigation</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded">
                    <i className="ri-recycle-line text-3xl text-green-600 mb-2"></i>
                    <p className="text-lg font-bold">6.2 tons</p>
                    <p className="text-sm text-muted-foreground">Waste Recycled</p>
                    <p className="text-xs text-green-600">Converted to useful products</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded">
                    <i className="ri-plant-line text-3xl text-amber-600 mb-2"></i>
                    <p className="text-lg font-bold">45 hectares</p>
                    <p className="text-sm text-muted-foreground">Reforested Land</p>
                    <p className="text-xs text-green-600">Native species planted</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Climate-Smart Agriculture Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Drought-Resistant Varieties</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Water-Efficient Irrigation</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }}></div>
                      </div>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Organic Farming Practices</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "68%" }}></div>
                      </div>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Integrated Pest Management</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inclusion" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Gender, Youth & Social Inclusion Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {genderInclusionData.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{metric.metric}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold">{metric.current}</span>
                          <Badge className={metric.current >= metric.target ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}>
                            {metric.current >= metric.target ? "Target Met" : "In Progress"}
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div 
                          className={`h-2 rounded-full ${metric.current >= metric.target ? 'bg-green-500' : 'bg-primary'}`}
                          style={{ width: `${Math.min((metric.current / metric.target) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Target: {metric.target} • Category: {metric.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Social Impact Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Women's Leadership Training</p>
                      <p className="text-xs text-muted-foreground">18 villages • 245 women</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Completed</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Youth Agricultural Innovation</p>
                      <p className="text-xs text-muted-foreground">12 villages • 180 youth</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">Ongoing</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Financial Literacy Program</p>
                      <p className="text-xs text-muted-foreground">22 villages • 420 participants</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Completed</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inclusion Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-purple-50 rounded">
                    <p className="text-2xl font-bold text-purple-600">62%</p>
                    <p className="text-sm text-muted-foreground">Women Participation</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <p className="text-2xl font-bold text-blue-600">38%</p>
                    <p className="text-sm text-muted-foreground">Youth Engagement</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded">
                    <p className="text-2xl font-bold text-green-600">15</p>
                    <p className="text-sm text-muted-foreground">Women-Led Cooperatives</p>
                  </div>
                  <div className="text-center p-3 bg-amber-50 rounded">
                    <p className="text-2xl font-bold text-amber-600">28</p>
                    <p className="text-sm text-muted-foreground">Youth-Led Initiatives</p>
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

export default RSSPage;