import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Activity, Database, Server, Cpu, HardDrive, Wifi, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const performanceData = [
  { time: '08:00', cpu: 42, memory: 38, disk: 12 },
  { time: '09:00', cpu: 53, memory: 42, disk: 14 },
  { time: '10:00', cpu: 78, memory: 55, disk: 15 },
  { time: '11:00', cpu: 62, memory: 60, disk: 16 },
  { time: '12:00', cpu: 48, memory: 50, disk: 15 },
  { time: '13:00', cpu: 55, memory: 52, disk: 14 },
  { time: '14:00', cpu: 70, memory: 58, disk: 16 },
];

const Diagnostics = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">System Diagnostics</h2>
        <p className="text-muted-foreground">Monitor and troubleshoot system performance and health.</p>
      </div>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
          <TabsTrigger value="health">Health Checks</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-green-50">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-medium text-base mb-1">System Status</h3>
                  <p className="text-green-600 font-medium">Healthy</p>
                  <p className="text-xs text-muted-foreground mt-2">All systems operational</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                    <Cpu className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-base mb-1">CPU Usage</h3>
                  <p className="text-foreground font-medium">42%</p>
                  <div className="w-full mt-2">
                    <Progress value={42} className="h-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Memory Usage</h3>
                  <p className="text-foreground font-medium">58%</p>
                  <div className="w-full mt-2">
                    <Progress value={58} className="h-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                    <HardDrive className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-medium text-base mb-1">Disk Usage</h3>
                  <p className="text-foreground font-medium">65%</p>
                  <div className="w-full mt-2">
                    <Progress value={65} className="h-1" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>System Performance</CardTitle>
              <CardDescription>Resource utilization over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={performanceData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 10,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="cpu" name="CPU %" stroke="#4D3319" strokeWidth={2} />
                    <Line type="monotone" dataKey="memory" name="Memory %" stroke="#A8CF45" strokeWidth={2} />
                    <Line type="monotone" dataKey="disk" name="Disk I/O %" stroke="#F59E0B" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Status</CardTitle>
                <CardDescription>Current state of essential services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <Server className="h-5 w-5 text-primary" />
                      <span className="font-medium">Database Server</span>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">Operational</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <Server className="h-5 w-5 text-primary" />
                      <span className="font-medium">Web Application Server</span>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">Operational</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-5 w-5 text-primary" />
                      <span className="font-medium">Monitoring System</span>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">Operational</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <Wifi className="h-5 w-5 text-primary" />
                      <span className="font-medium">Network Services</span>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-50">Operational</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                    <div className="flex items-center space-x-3">
                      <Database className="h-5 w-5 text-primary" />
                      <span className="font-medium">Backup Service</span>
                    </div>
                    <Badge variant="outline" className="bg-amber-50 text-amber-600 hover:bg-amber-50">Degraded</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Restart Services</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent System Events</CardTitle>
                <CardDescription>Latest logs and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">High CPU usage detected</p>
                      <p className="text-xs text-muted-foreground">Today, 11:32 AM</p>
                      <p className="text-xs text-muted-foreground mt-1">CPU usage exceeded 80% for 5 minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Backup service failed</p>
                      <p className="text-xs text-muted-foreground">Today, 03:45 AM</p>
                      <p className="text-xs text-muted-foreground mt-1">Scheduled backup job failed to complete</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">System update completed</p>
                      <p className="text-xs text-muted-foreground">Yesterday, 08:12 PM</p>
                      <p className="text-xs text-muted-foreground mt-1">System updated to version 2.4.1</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Disk space warning</p>
                      <p className="text-xs text-muted-foreground">Yesterday, 02:30 PM</p>
                      <p className="text-xs text-muted-foreground mt-1">Storage volume approaching 75% capacity</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Events</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance Monitoring</CardTitle>
              <CardDescription>Detailed system performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Performance monitoring tools and detailed metrics are under development.
                <br />
                Check back soon for comprehensive performance monitoring capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>System Logs</CardTitle>
              <CardDescription>View and analyze system logs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Log management tools and analysis features are under development.
                <br />
                Check back soon for comprehensive logging capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="health">
          <Card>
            <CardHeader>
              <CardTitle>Health Checks</CardTitle>
              <CardDescription>Run and view system health checks</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Health check tools and diagnostic features are under development.
                <br />
                Check back soon for comprehensive health monitoring capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Diagnostics;
