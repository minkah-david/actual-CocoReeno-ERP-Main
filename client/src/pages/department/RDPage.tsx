import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const RDPage = () => {
  // R&D data
  const researchProjects = [
    { id: "RD-2024-001", name: "Enhanced Coconut Water Preservation", category: "Edibles", progress: 78, budget: 120000, team: 4, status: "In Progress" },
    { id: "RD-2024-002", name: "Coconut Oil Antioxidant Properties", category: "Health", progress: 92, budget: 85000, team: 3, status: "Testing" },
    { id: "RD-2024-003", name: "Biodegradable Packaging from Husks", category: "Inedibles", progress: 45, budget: 150000, team: 5, status: "Development" },
    { id: "RD-2024-004", name: "Probiotic Coconut Yogurt", category: "Health", progress: 62, budget: 95000, team: 3, status: "In Progress" },
    { id: "RD-2024-005", name: "Coconut Fiber Insulation Material", category: "Inedibles", progress: 34, budget: 110000, team: 4, status: "Research" }
  ];

  const productDevelopment = [
    { month: "Jan", edibles: 3, health: 2, inedibles: 1, completed: 1 },
    { month: "Feb", edibles: 4, health: 3, inedibles: 2, completed: 2 },
    { month: "Mar", edibles: 3, health: 2, inedibles: 1, completed: 1 },
    { month: "Apr", edibles: 5, health: 4, inedibles: 3, completed: 3 },
    { month: "May", edibles: 4, health: 3, inedibles: 2, completed: 2 },
    { month: "Jun", edibles: 6, health: 4, inedibles: 3, completed: 4 }
  ];

  const budgetAllocation = [
    { category: "Edibles Research", amount: 450000, percentage: 35, color: "#9efe00" },
    { category: "Health & Wellness", amount: 390000, percentage: 30, color: "#4e342e" },
    { category: "Inedibles Innovation", amount: 325000, percentage: 25, color: "#82ca9d" },
    { category: "Equipment & Lab", amount: 130000, percentage: 10, color: "#ffc658" }
  ];

  const innovations = [
    { name: "CocoFresh Natural Preservative", impact: "Extended shelf life by 40%", category: "Edibles", stage: "Patent Filed" },
    { name: "CocoPure Health Supplement", impact: "95% bioavailability improvement", category: "Health", stage: "Clinical Trials" },
    { name: "EcoShell Building Material", impact: "50% stronger than traditional fiber", category: "Inedibles", stage: "Prototype" },
    { name: "CocoBoost Energy Drink", impact: "Natural caffeine alternative", category: "Health", stage: "Market Testing" }
  ];

  const formatCurrency = (value: number) => `GH₵ ${(value / 1000).toFixed(0)}K`;

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Research": return "bg-blue-100 text-blue-700";
      case "Development": return "bg-amber-100 text-amber-700";
      case "In Progress": return "bg-purple-100 text-purple-700";
      case "Testing": return "bg-green-100 text-green-700";
      case "Completed": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStageColor = (stage: string) => {
    switch(stage) {
      case "Patent Filed": return "bg-green-100 text-green-700";
      case "Clinical Trials": return "bg-blue-100 text-blue-700";
      case "Prototype": return "bg-amber-100 text-amber-700";
      case "Market Testing": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Research & Development</h2>
        <p className="text-muted-foreground">Innovation and product development across edibles, health, and sustainable materials</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Active Projects</TabsTrigger>
          <TabsTrigger value="innovations">Innovations</TabsTrigger>
          <TabsTrigger value="budget">Budget & Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">15</p>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                  <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700">3 categories</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">GH₵ 1.3M</p>
                  <p className="text-sm text-muted-foreground">R&D Budget YTD</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">68% utilized</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">8</p>
                  <p className="text-sm text-muted-foreground">Patents Filed</p>
                  <Badge variant="outline" className="mt-1 bg-purple-50 text-purple-700">This year</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">Research Team</p>
                  <Badge variant="outline" className="mt-1 bg-amber-50 text-amber-700">PhD & Masters</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Development Trends & Budget Allocation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Development Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={productDevelopment}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="edibles" fill="#9efe00" name="Edibles" />
                      <Bar dataKey="health" fill="#4e342e" name="Health & Wellness" />
                      <Bar dataKey="inedibles" fill="#82ca9d" name="Inedibles" />
                      <Bar dataKey="completed" fill="#ffc658" name="Completed" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>R&D Budget Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={budgetAllocation}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="amount"
                      >
                        {budgetAllocation.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2 text-xs">
                  {budgetAllocation.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span>{item.category}</span>
                      </div>
                      <span className="font-medium">{item.percentage}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Research Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {researchProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium text-sm">{project.id}</span>
                        <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                        <Badge variant="outline">{project.category}</Badge>
                      </div>
                      <p className="font-semibold mb-1">{project.name}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Budget: {formatCurrency(project.budget)}</span>
                        <span>Team: {project.team} researchers</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-flask-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">7</p>
                  <p className="text-sm text-muted-foreground">Edibles Projects</p>
                  <p className="text-xs text-green-600">Flesh & Water focus</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-heart-pulse-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Health & Wellness</p>
                  <p className="text-xs text-blue-600">Nutritional benefits</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-recycle-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Inedibles Innovation</p>
                  <p className="text-xs text-amber-600">Husk & Shell utilization</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="innovations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Breakthrough Innovations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {innovations.map((innovation, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-semibold">{innovation.name}</span>
                        <Badge className={getStageColor(innovation.stage)}>{innovation.stage}</Badge>
                        <Badge variant="outline">{innovation.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Impact: {innovation.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Innovation Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded">
                    <span className="text-sm">Concept Development</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                      <span className="text-sm font-medium">12 ideas</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded">
                    <span className="text-sm">Prototyping</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                      <span className="text-sm font-medium">8 prototypes</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded">
                    <span className="text-sm">Testing Phase</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                      <span className="text-sm font-medium">5 products</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/20 rounded">
                    <span className="text-sm">Market Ready</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                      <span className="text-sm font-medium">3 products</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Research Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-green-50 rounded">
                    <i className="ri-award-line text-2xl text-green-600 mb-1"></i>
                    <p className="font-semibold text-sm">Best Innovation Award</p>
                    <p className="text-xs text-muted-foreground">Ghana Food Industry 2024</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <i className="ri-microscope-line text-2xl text-blue-600 mb-1"></i>
                    <p className="font-semibold text-sm">3 Research Papers</p>
                    <p className="text-xs text-muted-foreground">Published in peer-reviewed journals</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded">
                    <i className="ri-lightbulb-line text-2xl text-purple-600 mb-1"></i>
                    <p className="font-semibold text-sm">8 Patents Filed</p>
                    <p className="text-xs text-muted-foreground">Intellectual property portfolio</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="budget" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">GH₵ 1.3M</p>
                  <p className="text-sm text-muted-foreground">Total R&D Budget</p>
                  <p className="text-xs text-muted-foreground">Annual allocation</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">68%</p>
                  <p className="text-sm text-muted-foreground">Budget Utilized</p>
                  <p className="text-xs text-green-600">On track for year-end</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">GH₵ 450K</p>
                  <p className="text-sm text-muted-foreground">Equipment Investment</p>
                  <p className="text-xs text-blue-600">Lab upgrades</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">285%</p>
                  <p className="text-sm text-muted-foreground">ROI on Research</p>
                  <p className="text-xs text-green-600">From commercialized products</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Resource Allocation & Equipment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Lab Equipment Status</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                      <div>
                        <p className="font-medium text-sm">Spectrophotometer</p>
                        <p className="text-xs text-muted-foreground">Chemical analysis</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Operational</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                      <div>
                        <p className="font-medium text-sm">Pilot Production Line</p>
                        <p className="text-xs text-muted-foreground">Product testing</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Operational</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                      <div>
                        <p className="font-medium text-sm">Texture Analyzer</p>
                        <p className="text-xs text-muted-foreground">Quality testing</p>
                      </div>
                      <Badge className="bg-amber-100 text-amber-700">Maintenance</Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Research Team Allocation</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Edibles Research</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "58%" }}></div>
                        </div>
                        <span className="text-sm font-medium">7 researchers</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Health & Wellness</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "33%" }}></div>
                        </div>
                        <span className="text-sm font-medium">4 researchers</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Inedibles Innovation</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                        <span className="text-sm font-medium">3 researchers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RDPage;