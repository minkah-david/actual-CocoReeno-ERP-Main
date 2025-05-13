import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Shield, ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const Security = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Security</h2>
        <p className="text-muted-foreground">Cybersecurity monitoring, threat detection, and system protection.</p>
      </div>
      
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="threats">Threats</TabsTrigger>
          <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">Security Status: Good</h3>
                  <p className="text-sm text-muted-foreground">Your system security is currently at a good level. No critical issues detected.</p>
                </div>
                <div className="ml-auto">
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="h-4 w-4 mr-2 text-primary" />
                    Security Score
                  </CardTitle>
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Good</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mt-4 mb-2 flex justify-center">
                  <div className="relative h-32 w-32">
                    <svg className="h-full w-full" viewBox="0 0 100 100">
                      <circle
                        className="text-muted stroke-current"
                        strokeWidth="10"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-green-500 stroke-current"
                        strokeWidth="10"
                        strokeLinecap="round"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        strokeDasharray="251.2"
                        strokeDashoffset="50.24"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">80%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mt-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Data Protection</span>
                      <span className="text-green-600">92%</span>
                    </div>
                    <Progress value={92} className="h-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Network Security</span>
                      <span className="text-green-600">85%</span>
                    </div>
                    <Progress value={85} className="h-1" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Access Control</span>
                      <span className="text-amber-600">68%</span>
                    </div>
                    <Progress value={68} className="h-1" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Improve Score</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2 text-primary" />
                    Threat Summary
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Critical</p>
                        <p className="text-xs text-muted-foreground">Threats</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold">0</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Medium</p>
                        <p className="text-xs text-muted-foreground">Threats</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold">3</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Low</p>
                        <p className="text-xs text-muted-foreground">Threats</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold">12</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Last scan completed:</p>
                  <p className="text-sm font-medium">Today, 08:45 AM</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Run New Scan</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg flex items-center">
                    <ShieldCheck className="h-4 w-4 mr-2 text-primary" />
                    Recent Activity
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">User authentication update</p>
                      <p className="text-xs text-muted-foreground">Today, 09:12 AM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <XCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Failed login attempt</p>
                      <p className="text-xs text-muted-foreground">Yesterday, 06:32 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Security patch installed</p>
                      <p className="text-xs text-muted-foreground">Yesterday, 02:45 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Firewall rules updated</p>
                      <p className="text-xs text-muted-foreground">Jul 15, 2023, 11:30 AM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Activity</Button>
              </CardFooter>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Recommended Actions</CardTitle>
              <CardDescription>Steps to improve your security posture</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-lg border">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Update User Access Policies</h4>
                    <p className="text-sm text-muted-foreground mb-2">Some user accounts have excessive permissions that could pose security risks.</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">Medium Priority</Badge>
                      <span className="text-xs text-muted-foreground">Estimated time: 45 minutes</span>
                    </div>
                  </div>
                  <Button size="sm">Fix Now</Button>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-lg border">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Enable Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground mb-2">Some administrator accounts are not using 2FA, increasing vulnerability to unauthorized access.</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">Medium Priority</Badge>
                      <span className="text-xs text-muted-foreground">Estimated time: 30 minutes</span>
                    </div>
                  </div>
                  <Button size="sm">Fix Now</Button>
                </div>
                
                <div className="flex items-start space-x-4 p-4 rounded-lg border">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Schedule Regular Security Training</h4>
                    <p className="text-sm text-muted-foreground mb-2">Regular security awareness training for all staff can significantly reduce risks.</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">Low Priority</Badge>
                      <span className="text-xs text-muted-foreground">Estimated time: 2 hours setup</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Schedule</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Dismiss All</Button>
              <Button>Fix All Issues</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="threats">
          <Card>
            <CardHeader>
              <CardTitle>Threat Detection</CardTitle>
              <CardDescription>Monitor and manage security threats</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Threat detection tools and detailed reports are under development.
                <br />
                Check back soon for comprehensive threat monitoring capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="vulnerabilities">
          <Card>
            <CardHeader>
              <CardTitle>Vulnerability Assessment</CardTitle>
              <CardDescription>Identify and address system vulnerabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Vulnerability assessment tools and reports are under development.
                <br />
                Check back soon for comprehensive vulnerability management capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="compliance">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Management</CardTitle>
              <CardDescription>Ensure adherence to security standards and regulations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Compliance management tools and reports are under development.
                <br />
                Check back soon for comprehensive compliance monitoring capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Security;
