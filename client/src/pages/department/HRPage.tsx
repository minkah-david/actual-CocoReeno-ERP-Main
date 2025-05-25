import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const HRPage = () => {
  // HR data
  const employeeData = [
    { department: "Operations", employees: 28, openPositions: 3, turnover: 8.5 },
    { department: "Sales", employees: 15, openPositions: 2, turnover: 12.3 },
    { department: "Marketing", employees: 12, openPositions: 1, turnover: 6.7 },
    { department: "Finance", employees: 8, openPositions: 1, turnover: 4.2 },
    { department: "R&D", employees: 10, openPositions: 2, turnover: 15.6 },
    { department: "HR", employees: 5, openPositions: 0, turnover: 0.0 }
  ];

  const performanceMetrics = [
    { month: "Jan", satisfaction: 4.2, performance: 87, training: 75, retention: 92 },
    { month: "Feb", satisfaction: 4.3, performance: 89, training: 78, retention: 91 },
    { month: "Mar", satisfaction: 4.1, performance: 86, training: 72, retention: 93 },
    { month: "Apr", satisfaction: 4.4, performance: 91, training: 85, retention: 94 },
    { month: "May", satisfaction: 4.5, performance: 92, training: 88, retention: 95 },
    { month: "Jun", satisfaction: 4.6, performance: 94, training: 92, retention: 96 }
  ];

  const upcomingReviews = [
    { id: 1, name: "Kwame Asante", department: "Sales", position: "Senior Sales Rep", reviewDate: "2024-06-25", type: "Performance Review" },
    { id: 2, name: "Ama Owusu", department: "Marketing", position: "Marketing Specialist", reviewDate: "2024-06-28", type: "Quarterly Check-in" },
    { id: 3, name: "Kofi Mensah", department: "Operations", position: "Production Manager", reviewDate: "2024-07-02", type: "Performance Review" },
    { id: 4, name: "Efua Dadzie", department: "Finance", position: "Financial Analyst", reviewDate: "2024-07-05", type: "Annual Review" }
  ];

  const trainingPrograms = [
    { id: 1, name: "Leadership Development", participants: 15, duration: "8 weeks", completion: 78, status: "Ongoing" },
    { id: 2, name: "Digital Skills Training", participants: 32, duration: "4 weeks", completion: 100, status: "Completed" },
    { id: 3, name: "Safety & Compliance", participants: 78, duration: "2 weeks", completion: 94, status: "Ongoing" },
    { id: 4, name: "Customer Service Excellence", participants: 18, duration: "3 weeks", completion: 56, status: "Ongoing" }
  ];

  const benefitsUtilization = [
    { benefit: "Health Insurance", utilization: 98, employees: 76 },
    { benefit: "Retirement Plan", utilization: 85, employees: 66 },
    { benefit: "Training Budget", utilization: 72, employees: 56 },
    { benefit: "Wellness Program", utilization: 64, employees: 50 },
    { benefit: "Flexible Hours", utilization: 89, employees: 69 }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(part => part[0]).join('').toUpperCase();
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Ongoing": return "bg-blue-100 text-blue-700";
      case "Completed": return "bg-green-100 text-green-700";
      case "Scheduled": return "bg-amber-100 text-amber-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getReviewTypeColor = (type: string) => {
    switch(type) {
      case "Performance Review": return "bg-purple-100 text-purple-700";
      case "Annual Review": return "bg-primary/10 text-primary";
      case "Quarterly Check-in": return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Human Resource & Administration</h2>
        <p className="text-muted-foreground">Comprehensive human resource management and organizational development</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">78</p>
                  <p className="text-sm text-muted-foreground">Total Employees</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+5 this quarter</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">9</p>
                  <p className="text-sm text-muted-foreground">Open Positions</p>
                  <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700">Recruiting</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">4.6</p>
                  <p className="text-sm text-muted-foreground">Employee Satisfaction</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+0.4 improvement</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">94%</p>
                  <p className="text-sm text-muted-foreground">Retention Rate</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">Above industry avg</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Department Breakdown & Upcoming Reviews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Department Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {employeeData.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{dept.department}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-bold">{dept.employees}</span>
                            <span className="text-xs text-muted-foreground">employees</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Open positions: {dept.openPositions}</span>
                          <span>Turnover: {dept.turnover}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div 
                            className={`h-2 rounded-full ${dept.turnover > 10 ? 'bg-red-500' : dept.turnover > 5 ? 'bg-amber-500' : 'bg-green-500'}`}
                            style={{ width: `${100 - dept.turnover}%` }}
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
                <CardTitle>Upcoming Performance Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingReviews.map((review) => (
                    <div key={review.id} className="flex items-center space-x-3 p-3 bg-muted/20 rounded">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {getInitials(review.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{review.name}</span>
                          <Badge className={getReviewTypeColor(review.type)} variant="outline">
                            {review.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{review.position} • {review.department}</p>
                        <p className="text-xs text-primary font-medium">Due: {review.reviewDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends (6 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceMetrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="#9efe00" 
                      strokeWidth={3}
                      name="Satisfaction (1-5 scale)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="performance" 
                      stroke="#4e342e" 
                      strokeWidth={3}
                      name="Performance Score (%)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="retention" 
                      stroke="#82ca9d" 
                      strokeWidth={3}
                      name="Retention Rate (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-star-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">94%</p>
                  <p className="text-sm text-muted-foreground">Overall Performance</p>
                  <p className="text-xs text-green-600">+2% from last quarter</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-heart-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">4.6/5</p>
                  <p className="text-sm text-muted-foreground">Employee Satisfaction</p>
                  <p className="text-xs text-green-600">Highest ever recorded</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-trophy-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Top Performers</p>
                  <p className="text-xs text-blue-600">Eligible for promotion</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-team-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">96%</p>
                  <p className="text-sm text-muted-foreground">Retention Rate</p>
                  <p className="text-xs text-green-600">Industry leading</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="training" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Training Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trainingPrograms.map((program) => (
                  <div key={program.id} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium text-sm">{program.name}</span>
                        <Badge className={getStatusColor(program.status)}>{program.status}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{program.participants} participants</span>
                        <span>Duration: {program.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="w-24 bg-muted rounded-full h-2 mb-1">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${program.completion}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground">{program.completion}% complete</p>
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
                  <i className="ri-graduation-cap-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">143</p>
                  <p className="text-sm text-muted-foreground">Total Participants</p>
                  <p className="text-xs text-blue-600">Across 4 programs</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-time-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">17</p>
                  <p className="text-sm text-muted-foreground">Training Hours/Employee</p>
                  <p className="text-xs text-green-600">Above industry standard</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-medal-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">89%</p>
                  <p className="text-sm text-muted-foreground">Completion Rate</p>
                  <p className="text-xs text-green-600">High engagement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="benefits" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Benefits Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {benefitsUtilization.map((benefit, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{benefit.benefit}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold">{benefit.employees}</span>
                          <span className="text-xs text-muted-foreground">employees</span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${benefit.utilization}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {benefit.utilization}% utilization rate
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
                <CardTitle>Benefits Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/20 rounded">
                    <p className="text-2xl font-bold text-primary">GH₵ 450K</p>
                    <p className="text-sm text-muted-foreground">Annual Benefits Cost</p>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded">
                    <p className="text-2xl font-bold text-foreground">85%</p>
                    <p className="text-sm text-muted-foreground">Average Utilization</p>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded">
                    <p className="text-2xl font-bold text-primary">5</p>
                    <p className="text-sm text-muted-foreground">Benefits Programs</p>
                  </div>
                  <div className="text-center p-4 bg-muted/20 rounded">
                    <p className="text-2xl font-bold text-foreground">98%</p>
                    <p className="text-sm text-muted-foreground">Employee Enrolled</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Employee Satisfaction by Benefit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Health Insurance</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                      <span className="text-sm font-medium">4.8/5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Flexible Hours</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <span className="text-sm font-medium">4.6/5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Training Budget</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                      </div>
                      <span className="text-sm font-medium">4.4/5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Retirement Plan</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <span className="text-sm font-medium">4.3/5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Wellness Program</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                      <span className="text-sm font-medium">3.9/5</span>
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

export default HRPage;