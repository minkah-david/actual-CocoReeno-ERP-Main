import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Strategies = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Strategies</h2>
        <p className="text-muted-foreground">Strategic planning and execution for CocoReeno's growth and development.</p>
      </div>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="growth">Growth</TabsTrigger>
          <TabsTrigger value="expansion">Expansion</TabsTrigger>
          <TabsTrigger value="partnerships">Partnerships</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Strategic Roadmap 2023-2025</CardTitle>
              <CardDescription>Key initiatives and milestones for the next 2 years</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <h4 className="font-medium text-base">Increase Production Capacity</h4>
                      <Badge variant="outline" className="ml-2">Q3 2023</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">85% Complete</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">Expanding processing facilities in Western and Volta regions to increase production by 40%</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <h4 className="font-medium text-base">Farmer Network Expansion</h4>
                      <Badge variant="outline" className="ml-2">Q1 2024</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">62% Complete</span>
                  </div>
                  <Progress value={62} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">Growing our farmer network to 3,000 registered farmers across five regions</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <h4 className="font-medium text-base">E-Commerce Platform Launch</h4>
                      <Badge variant="outline" className="ml-2">Q2 2024</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">40% Complete</span>
                  </div>
                  <Progress value={40} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">Building a dedicated online sales platform targeting both B2B and B2C consumers</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <h4 className="font-medium text-base">Export Market Entry</h4>
                      <Badge variant="outline" className="ml-2">Q4 2024</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">15% Complete</span>
                  </div>
                  <Progress value={15} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">Establishing distribution channels into European and North American markets</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <h4 className="font-medium text-base">Carbon Neutral Operations</h4>
                      <Badge variant="outline" className="ml-2">Q2 2025</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">10% Complete</span>
                  </div>
                  <Progress value={10} className="h-2" />
                  <p className="text-sm text-muted-foreground mt-2">Implementing sustainable practices to achieve carbon neutrality in all operations</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Detailed Strategic Plan</Button>
            </CardFooter>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>G-CEDI Project Status</CardTitle>
                <CardDescription>Ghana Coconut Enterprises Development Initiative</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <i className="ri-plant-line text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Implementation Phase 2</h4>
                    <p className="text-sm text-muted-foreground">Modernizing the coconut value chain</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Farmer Training</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Processing Technology</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Supply Chain Integration</span>
                      <span>43%</span>
                    </div>
                    <Progress value={43} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Market Expansion</span>
                      <span>52%</span>
                    </div>
                    <Progress value={52} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Project Dashboard</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
                <CardDescription>Strategic KPIs for business growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Revenue Growth</h4>
                      <span className="text-green-500 font-medium">+15.7%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Target: +12% annual growth</p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Farmer Income Increase</h4>
                      <span className="text-green-500 font-medium">+8.4%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Target: +10% within three years</p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Post-Harvest Loss Reduction</h4>
                      <span className="text-green-500 font-medium">-11.2%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Target: -15% within three years</p>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Carbon Emission Reduction</h4>
                      <span className="text-green-500 font-medium">-9.3%</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Target: -10% annually</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Download Full KPI Report</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="growth">
          <div className="space-y-6">
            {/* Growth Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">Revenue Growth</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">+18.2%</h3>
                    <p className="text-xs text-green-600">Year over year</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">Market Share</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">14.5%</h3>
                    <p className="text-xs text-blue-600">Ghana cocoa market</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">Farmer Network</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">2,850</h3>
                    <p className="text-xs text-purple-600">Active farmers</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">Processing Capacity</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">1,200T</h3>
                    <p className="text-xs text-orange-600">Monthly capacity</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Growth Initiatives */}
            <Card>
              <CardHeader>
                <CardTitle>Active Growth Initiatives</CardTitle>
                <CardDescription>Key projects driving business expansion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Value-Added Product Development</h4>
                      <Badge>In Progress</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Developing premium coconut oil and flour products for export markets</p>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Digital Farmer Platform</h4>
                      <Badge variant="secondary">Planning</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Mobile app for farmer training, market prices, and direct communication</p>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">Processing Facility Expansion</h4>
                      <Badge>Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Adding two new processing centers in Central and Eastern regions</p>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="expansion">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Expansion Targets</CardTitle>
                  <CardDescription>Priority markets for geographic expansion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">West Africa Region</h4>
                        <Badge variant="outline">High Priority</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Côte d'Ivoire, Nigeria, Senegal</p>
                      <div className="text-sm">
                        <span className="text-green-600 font-medium">Potential: ₵2.8M annually</span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">European Markets</h4>
                        <Badge variant="outline">Medium Priority</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Germany, Netherlands, UK</p>
                      <div className="text-sm">
                        <span className="text-green-600 font-medium">Potential: ₵4.2M annually</span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">North America</h4>
                        <Badge variant="secondary">Future Phase</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">USA, Canada</p>
                      <div className="text-sm">
                        <span className="text-green-600 font-medium">Potential: ₵3.5M annually</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expansion Timeline</CardTitle>
                  <CardDescription>Phased expansion roadmap</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="font-semibold">Phase 1: Regional Expansion</p>
                        <p className="text-sm text-muted-foreground">Q2 2024 - West Africa markets</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="font-semibold">Phase 2: European Entry</p>
                        <p className="text-sm text-muted-foreground">Q4 2024 - EU market certification</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div>
                        <p className="font-semibold">Phase 3: North American Market</p>
                        <p className="text-sm text-muted-foreground">Q2 2025 - Strategic partnerships</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Product Line Expansion</CardTitle>
                <CardDescription>New product development and market introduction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Premium Coconut Oil</h4>
                    <p className="text-sm text-muted-foreground mb-3">Cold-pressed, organic coconut oil for health-conscious consumers</p>
                    <div className="flex justify-between text-sm">
                      <span>Launch Timeline</span>
                      <span className="font-medium">Q3 2024</span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Coconut-Based Snacks</h4>
                    <p className="text-sm text-muted-foreground mb-3">Healthy snack products targeting urban markets</p>
                    <div className="flex justify-between text-sm">
                      <span>Launch Timeline</span>
                      <span className="font-medium">Q1 2025</span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Cosmetic Grade Products</h4>
                    <p className="text-sm text-muted-foreground mb-3">Beauty and skincare product line</p>
                    <div className="flex justify-between text-sm">
                      <span>Launch Timeline</span>
                      <span className="font-medium">Q3 2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="partnerships">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="border-l-4 border-green-500">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">Active Partnerships</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">12</h3>
                    <p className="text-xs text-green-600">Across all sectors</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">₵18.4M</h3>
                    <p className="text-xs text-blue-600">Combined portfolio</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-purple-500">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">In Negotiation</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">5</h3>
                    <p className="text-xs text-purple-600">High potential</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-orange-500">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                    <h3 className="text-2xl font-bold text-foreground mt-1">84%</h3>
                    <p className="text-xs text-orange-600">Above industry</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Strategic Partnership Portfolio</CardTitle>
                <CardDescription>Key partnerships driving business growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-semibold">AgriTech Ghana Limited</h4>
                        <p className="text-sm text-muted-foreground">Technology & Equipment Partnership</p>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Value: </span>
                        <span className="font-medium text-green-600">₵3.2M</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration: </span>
                        <span className="font-medium">3 years</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Started: </span>
                        <span className="font-medium">Jan 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-semibold">European Organic Traders</h4>
                        <p className="text-sm text-muted-foreground">Distribution & Export Partnership</p>
                      </div>
                      <Badge variant="secondary">Negotiation</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Value: </span>
                        <span className="font-medium text-green-600">₵5.8M</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration: </span>
                        <span className="font-medium">5 years</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Expected: </span>
                        <span className="font-medium">Q2 2024</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h4 className="font-semibold">Ghana Development Bank</h4>
                        <p className="text-sm text-muted-foreground">Financial Services Partnership</p>
                      </div>
                      <Badge>Active</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Value: </span>
                        <span className="font-medium text-green-600">₵2.1M</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration: </span>
                        <span className="font-medium">2 years</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Started: </span>
                        <span className="font-medium">Sep 2023</span>
                      </div>
                    </div>
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

export default Strategies;
