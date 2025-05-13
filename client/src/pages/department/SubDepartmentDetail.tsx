import { useState } from "react";
import { useParams, Link } from "wouter";
import { useDepartment } from "@/hooks/useDepartments";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { PlusCircle, Users, FileText, Settings, ChevronRight, ChevronLeft, BarChart4, Calendar, ClipboardList } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SubDepartmentDetail = () => {
  const { id, subId } = useParams();
  const { data: department, isLoading } = useDepartment(id);
  const [activeTab, setActiveTab] = useState("overview");

  // In a real application, we would fetch the specific subdepartment data
  // For now, we'll generate some sample data based on the parent department
  const getSubDepartmentName = () => {
    if (!department) return "";
    
    const index = parseInt(subId.split('-')[1]) - 1;
    return department.subDepartments[index];
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Skeleton className="h-8 w-64" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <Skeleton className="h-7 w-48 mb-2" />
                <Skeleton className="h-4 w-72" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <Skeleton className="h-24 w-24 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-64" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-full mt-2" />
                <Skeleton className="h-4 w-3/4 mt-2" />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-32" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-12" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-72" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array(6).fill(0).map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <Skeleton className="h-6 w-32 mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3 mt-1" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!department) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">Department not found</h2>
          <p className="text-muted-foreground mb-6">The department you're looking for doesn't exist or has been moved.</p>
          <Link href="/departments">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Departments
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const subDepartmentName = getSubDepartmentName();
  
  if (!subDepartmentName) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">Subdepartment not found</h2>
          <p className="text-muted-foreground mb-6">The subdepartment you're looking for doesn't exist or has been moved.</p>
          <Link href={`/departments/${id}`}>
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to {department.name}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Generate member count for the subdepartment
  const memberCount = Math.floor(Math.random() * 8) + 3;
  
  // Generate projects for the subdepartment
  const projects = [
    {
      name: `${subDepartmentName} Strategy Development`,
      progress: 68,
      status: "In Progress",
      dueDate: "Aug 15, 2023"
    },
    {
      name: `${subDepartmentName} Process Optimization`,
      progress: 42,
      status: "In Progress",
      dueDate: "Sep 5, 2023"
    },
    {
      name: `${subDepartmentName} Quarterly Review`,
      progress: 100,
      status: "Completed",
      dueDate: "Jul 1, 2023"
    }
  ];
  
  // Generate KPIs for the subdepartment
  const kpis = [
    {
      name: "Operational Efficiency",
      value: `${Math.floor(Math.random() * 20) + 80}%`,
      change: `+${Math.floor(Math.random() * 5) + 1}%`,
      trend: "up"
    },
    {
      name: "Task Completion Rate",
      value: `${Math.floor(Math.random() * 15) + 75}%`,
      change: `+${Math.floor(Math.random() * 8) + 1}%`,
      trend: "up"
    },
    {
      name: "Resource Utilization",
      value: `${Math.floor(Math.random() * 20) + 60}%`,
      change: `+${Math.floor(Math.random() * 10)}%`,
      trend: "neutral"
    }
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center">
          <Link href={`/departments/${id}`}>
            <Button variant="outline" size="icon" className="mr-4">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center">
              <h2 className="font-poppins font-semibold text-2xl text-foreground">{subDepartmentName}</h2>
              <span className="mx-2 text-muted-foreground">•</span>
              <Badge variant="outline">{department.name}</Badge>
            </div>
            <p className="text-muted-foreground">Managing all aspects of {subDepartmentName.toLowerCase()} within CocoReeno</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Team Member
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Subdepartment Overview</CardTitle>
              <CardDescription>Details and information about {subDepartmentName}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                <div className="rounded-full bg-primary/10 text-primary h-24 w-24 flex items-center justify-center text-4xl flex-shrink-0">
                  <i className="ri-building-line"></i>
                </div>
                <div>
                  <h3 className="text-xl font-medium">{subDepartmentName}</h3>
                  <p className="text-muted-foreground mb-2">
                    <span className="inline-flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {memberCount} team members
                    </span>
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Reporting to</Badge>
                    <span className="font-medium">{department.head}</span>
                  </div>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p className="mb-4">
                  The {subDepartmentName} subdepartment is responsible for managing all aspects of 
                  {subDepartmentName.toLowerCase()} within the {department.name} department at CocoReeno.
                </p>
                <p>
                  This team focuses on delivering high-quality {subDepartmentName.toLowerCase()} services, 
                  ensuring efficient operations and strategic alignment with company goals. The team consists of 
                  {memberCount} professionals with diverse expertise in their respective fields.
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-4">Key Performance Indicators</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {kpis.map((kpi, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <h5 className="text-sm font-medium mb-1">{kpi.name}</h5>
                        <div className="flex items-baseline justify-between">
                          <span className="text-2xl font-bold">{kpi.value}</span>
                          <span className={`text-xs ${kpi.trend === 'up' ? 'text-green-600' : kpi.trend === 'down' ? 'text-red-600' : 'text-muted-foreground'}`}>
                            {kpi.trend === 'up' && <i className="ri-arrow-up-line mr-1"></i>}
                            {kpi.trend === 'down' && <i className="ri-arrow-down-line mr-1"></i>}
                            {kpi.change}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Subdepartment Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Team Members</span>
                <span className="font-medium">{memberCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Projects</span>
                <span className="font-medium">{projects.filter(p => p.status === "In Progress").length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Completed Projects</span>
                <span className="font-medium">{projects.filter(p => p.status === "Completed").length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Budget Utilization</span>
                <span className="font-medium">{Math.floor(Math.random() * 30) + 60}%</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                View Full Report
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Project Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.filter(p => p.status === "In Progress").map((project, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{project.name}</span>
                    <span className="text-xs text-muted-foreground">{project.dueDate}</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted-foreground">Progress</span>
                    <span className="text-xs font-medium">{project.progress}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Team Members</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>People working in {subDepartmentName}</CardDescription>
                </div>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Member
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array(memberCount).fill(0).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={`https://ui-avatars.com/api/?name=${subDepartmentName.charAt(0)}${i}&background=random`} />
                          <AvatarFallback>{subDepartmentName.charAt(0)}{i}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">
                            {["John Doe", "Jane Smith", "Kofi Mensah", "Ama Darko", "Kwame Asante", "Efua Mensah", 
                              "Samuel Osei", "Grace Amoah", "David Ansah", "Sarah Boateng"][i % 10]}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {["Manager", "Senior Specialist", "Specialist", "Analyst", "Coordinator", "Associate", 
                              "Assistant", "Team Lead", "Consultant", "Director"][i % 10]}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="projects" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Projects</CardTitle>
                  <CardDescription>Ongoing and completed initiatives</CardDescription>
                </div>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {projects.map((project, i) => (
                  <div key={i} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-medium">{project.name}</h4>
                          <Badge 
                            variant="outline" 
                            className={`ml-2 ${
                              project.status === "Completed" 
                                ? "bg-green-50 text-green-700" 
                                : "bg-blue-50 text-blue-700"
                            }`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          Due: {project.dueDate}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-muted-foreground">Progress</span>
                        <span className="text-xs font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tasks">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Tasks & Assignments</CardTitle>
                  <CardDescription>Ongoing work and responsibilities</CardDescription>
                </div>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Task
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="rounded-full bg-muted h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <ClipboardList className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">Task Management Coming Soon</h3>
                <p className="text-muted-foreground mb-6">We're working on adding task management capabilities.</p>
                <Button variant="outline">Check Back Later</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Reports & Analytics</CardTitle>
                  <CardDescription>Performance data and insights</CardDescription>
                </div>
                <Button>
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="rounded-full bg-muted h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart4 className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">Reports Module Coming Soon</h3>
                <p className="text-muted-foreground mb-6">We're working on adding comprehensive reporting capabilities.</p>
                <Button variant="outline">Check Back Later</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SubDepartmentDetail;
