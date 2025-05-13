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
          <Card>
            <CardHeader>
              <CardTitle>Growth Strategies</CardTitle>
              <CardDescription>Expand operations and market presence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Growth strategy planning tools and detailed reports are under development.
                <br />
                Check back soon for comprehensive growth insights.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expansion">
          <Card>
            <CardHeader>
              <CardTitle>Expansion Plans</CardTitle>
              <CardDescription>Geographic and product expansion</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Expansion planning tools and detailed reports are under development.
                <br />
                Check back soon for comprehensive expansion insights.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="partnerships">
          <Card>
            <CardHeader>
              <CardTitle>Partnership Opportunities</CardTitle>
              <CardDescription>Strategic alliances and collaborations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Partnership management tools and detailed reports are under development.
                <br />
                Check back soon for comprehensive partnership insights.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Strategies;
