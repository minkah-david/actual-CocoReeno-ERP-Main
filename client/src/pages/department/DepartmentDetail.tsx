import { useState } from "react";
import { useParams, Link } from "wouter";
import { useDepartment, useSubDepartments } from "@/hooks/useDepartments";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { PlusCircle, Users, FileText, Settings, ChevronRight, ChevronLeft } from "lucide-react";

const DepartmentDetail = () => {
  const { id } = useParams();
  const { data: department, isLoading } = useDepartment(id);
  const { data: subDepartments, isLoading: isLoadingSubDepartments } = useSubDepartments(id);
  const [activeTab, setActiveTab] = useState("overview");

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

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex items-center">
          <Link href="/departments">
            <Button variant="outline" size="icon" className="mr-4">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h2 className="font-poppins font-semibold text-2xl text-foreground">{department.name}</h2>
            <p className="text-muted-foreground">{department.description}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Edit Department
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Subdepartment
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Department Overview</CardTitle>
              <CardDescription>Details and information about {department.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                <div className="rounded-full bg-primary/10 text-primary h-24 w-24 flex items-center justify-center text-4xl flex-shrink-0">
                  <i className={`${department.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-medium">{department.name}</h3>
                  <p className="text-muted-foreground mb-2">
                    <span className="inline-flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {department.memberCount} team members
                    </span>
                  </p>
                  {department.head && (
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Department Head</Badge>
                      <span className="font-medium">{department.head}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p className="mb-4">{department.description}</p>
                <p>
                  This department is responsible for managing all aspects of {department.name.toLowerCase()} at CocoReeno, 
                  ensuring efficient operations and strategic alignment with company goals. The team consists of {department.memberCount} professionals 
                  with diverse expertise in their respective fields.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Department Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Team Members</span>
                <span className="font-medium">{department.memberCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Sub-departments</span>
                <span className="font-medium">{department.subDepartments?.length || 0}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Projects</span>
                <span className="font-medium">{Math.floor(Math.random() * 10) + 3}</span>
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
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Subdepartments</TabsTrigger>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subdepartments</CardTitle>
              <CardDescription>Organizational units within {department.name}</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoadingSubDepartments ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array(4).fill(0).map((_, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <Skeleton className="h-6 w-32 mb-2" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3 mt-1" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : subDepartments && subDepartments.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subDepartments.map((subDept) => (
                    <Link key={subDept.id} href={`/departments/${id}/${subDept.id}`}>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">{subDept.name}</h4>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            <Users className="h-3 w-3 inline mr-1" />
                            {subDept.memberCount} members
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                  
                  <Card className="border-2 border-dashed border-border cursor-pointer hover:bg-muted/50 transition-colors">
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full py-8">
                      <PlusCircle className="h-10 w-10 text-muted-foreground mb-2" />
                      <h4 className="font-medium">Add New Subdepartment</h4>
                      <p className="text-sm text-muted-foreground">Create a new organizational unit</p>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="rounded-full bg-muted h-16 w-16 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No Subdepartments</h3>
                  <p className="text-muted-foreground mb-6">This department doesn't have any subdepartments yet.</p>
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Subdepartment
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="members">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Employees working in {department.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Array(department.memberCount > 6 ? 6 : department.memberCount).fill(0).map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={`https://ui-avatars.com/api/?name=${department.name.charAt(0)}${i}&background=random`} />
                          <AvatarFallback>{department.name.charAt(0)}{i}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{["John Doe", "Jane Smith", "Kofi Mensah", "Ama Darko", "Kwame Asante", "Efua Mensah"][i % 6]}</h4>
                          <p className="text-sm text-muted-foreground">{["Manager", "Senior Specialist", "Specialist", "Analyst", "Coordinator", "Associate"][i % 6]}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {department.memberCount > 6 && (
                  <Card>
                    <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full py-8">
                      <Button variant="outline">
                        View All {department.memberCount} Members
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Ongoing and upcoming initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="rounded-full bg-muted h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">Projects Module Coming Soon</h3>
                <p className="text-muted-foreground mb-6">We're working on adding project management capabilities.</p>
                <Button variant="outline">Check Back Later</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="budget">
          <Card>
            <CardHeader>
              <CardTitle>Budget & Finance</CardTitle>
              <CardDescription>Financial resources and allocation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <div className="rounded-full bg-muted h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">Budget Module Coming Soon</h3>
                <p className="text-muted-foreground mb-6">We're working on adding budget management capabilities.</p>
                <Button variant="outline">Check Back Later</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DepartmentDetail;
