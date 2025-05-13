import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const AutomationsWorkflows = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Automations & Workflows</h2>
        <p className="text-muted-foreground">Streamline operations with automated processes and workflow management.</p>
      </div>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Active Workflows</CardTitle>
                  <Badge>12</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Supply Chain Notifications</span>
                    <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">Running</Badge>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Inventory Alerts</span>
                    <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">Running</Badge>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Farmer Payment Processing</span>
                    <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">Running</Badge>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Quality Control Reports</span>
                    <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">Running</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Pending Workflows</CardTitle>
                  <Badge>4</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Customer Feedback Collection</span>
                    <Badge variant="outline" className="bg-amber-50 text-amber-600 hover:bg-amber-50">Pending</Badge>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Sales Performance Analysis</span>
                    <Badge variant="outline" className="bg-amber-50 text-amber-600 hover:bg-amber-50">Pending</Badge>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Equipment Maintenance Alerts</span>
                    <Badge variant="outline" className="bg-amber-50 text-amber-600 hover:bg-amber-50">Pending</Badge>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Sustainability Metrics Tracking</span>
                    <Badge variant="outline" className="bg-amber-50 text-amber-600 hover:bg-amber-50">Pending</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">Available Templates</CardTitle>
                  <Badge>8</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Supply Chain Optimization</span>
                    <Button variant="ghost" size="sm" className="h-7 px-2">Use</Button>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Production Scheduling</span>
                    <Button variant="ghost" size="sm" className="h-7 px-2">Use</Button>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Sales Reporting</span>
                    <Button variant="ghost" size="sm" className="h-7 px-2">Use</Button>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-sm">Farmer Communication</span>
                    <Button variant="ghost" size="sm" className="h-7 px-2">Use</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Library</Button>
              </CardFooter>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Workflow Performance</CardTitle>
              <CardDescription>Efficiency metrics for automated processes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-1">Time Saved</h4>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-foreground">142</span>
                      <span className="text-muted-foreground text-sm ml-1">hours/month</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      <span className="text-green-600">↑ 12%</span> from previous month
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-1">Error Reduction</h4>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-foreground">86%</span>
                      <span className="text-muted-foreground text-sm ml-1">accuracy</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      <span className="text-green-600">↑ 8%</span> from previous month
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-1">Cost Savings</h4>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-foreground">GH₵ 65K</span>
                      <span className="text-muted-foreground text-sm ml-1">/month</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      <span className="text-green-600">↑ 15%</span> from previous month
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Top Performing Workflows</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-medium">Inventory Management</h5>
                          <p className="text-sm text-muted-foreground">Automated stock level monitoring and reordering</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">High ROI</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Time saved: 48 hrs/month</span>
                        <span>Error reduction: 92%</span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h5 className="font-medium">Farmer Payment Processing</h5>
                          <p className="text-sm text-muted-foreground">Automated payment calculation and disbursement</p>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">High ROI</Badge>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Time saved: 36 hrs/month</span>
                        <span>Error reduction: 95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create New Workflow</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="workflows">
          <Card>
            <CardHeader>
              <CardTitle>Workflow Management</CardTitle>
              <CardDescription>Create and manage automated workflows</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Workflow management tools and creation interface are under development.
                <br />
                Check back soon for comprehensive workflow management capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>System Integrations</CardTitle>
              <CardDescription>Connect with external systems and services</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Integration management tools are under development.
                <br />
                Check back soon for comprehensive integration capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Automation Reports</CardTitle>
              <CardDescription>Performance metrics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Automation reporting tools are under development.
                <br />
                Check back soon for comprehensive reporting capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AutomationsWorkflows;
