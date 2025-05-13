import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const ArtificialIntelligence = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Artificial Intelligence</h2>
        <p className="text-muted-foreground">AI-powered tools and insights to optimize CocoReeno's operations.</p>
      </div>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="content">Content Creation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <i className="ri-line-chart-line text-primary mr-2"></i>
                  Predictive Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  AI-powered tools for forecasting market trends, demand, and production needs.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="predict-demand">Demand Prediction</Label>
                    <Switch id="predict-demand" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="predict-price">Price Optimization</Label>
                    <Switch id="predict-price" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="predict-supply">Supply Chain Optimization</Label>
                    <Switch id="predict-supply" defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Configure Models</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <i className="ri-robot-line text-primary mr-2"></i>
                  Process Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Automated workflows and processes to increase efficiency and reduce costs.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="auto-inventory">Inventory Management</Label>
                    <Switch id="auto-inventory" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="auto-quality">Quality Control</Label>
                    <Switch id="auto-quality" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="auto-scheduling">Harvest Scheduling</Label>
                    <Switch id="auto-scheduling" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Manage Automations</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <i className="ri-image-line text-primary mr-2"></i>
                  AI Content Creation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Generate marketing content, product descriptions, and visual assets.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="content-social">Social Media Content</Label>
                    <Switch id="content-social" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="content-product">Product Descriptions</Label>
                    <Switch id="content-product" defaultChecked />
                  </div>
                  <div className="flex justify-between items-center">
                    <Label htmlFor="content-visual">Visual Assets</Label>
                    <Switch id="content-visual" defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Create Content</Button>
              </CardFooter>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>AI Implementation Status</CardTitle>
              <CardDescription>Progress of AI integration across departments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Supply Chain Optimization</h4>
                    <Badge>Active</Badge>
                  </div>
                  <Progress value={92} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">AI models optimizing logistics routes and inventory levels, reducing costs by 12%</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Quality Assessment</h4>
                    <Badge>Active</Badge>
                  </div>
                  <Progress value={85} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">Computer vision systems for automated quality control of coconuts during processing</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Demand Forecasting</h4>
                    <Badge>Active</Badge>
                  </div>
                  <Progress value={78} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">Predictive models for sales forecasting by region and product category</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Customer Segmentation</h4>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                  <Progress value={45} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">AI clustering of customers for targeted marketing campaigns</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Automated Report Generation</h4>
                    <Badge variant="outline">In Progress</Badge>
                  </div>
                  <Progress value={32} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">Natural language processing for automated report creation across departments</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View AI Dashboard</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="predictions">
          <Card>
            <CardHeader>
              <CardTitle>AI Predictions</CardTitle>
              <CardDescription>Market trends and operational forecasts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                AI prediction tools and detailed insights are under development.
                <br />
                Check back soon for comprehensive predictive analytics.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="automation">
          <Card>
            <CardHeader>
              <CardTitle>AI Automation</CardTitle>
              <CardDescription>Automated processes and workflows</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                AI automation tools and detailed insights are under development.
                <br />
                Check back soon for comprehensive automation capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>AI Content Creation</CardTitle>
              <CardDescription>Generate marketing materials and content</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                AI content creation tools and capabilities are under development.
                <br />
                Check back soon for comprehensive content generation features.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ArtificialIntelligence;
