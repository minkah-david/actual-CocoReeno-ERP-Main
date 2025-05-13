import { useDepartments } from "@/hooks/useDepartments";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PlusIcon } from "lucide-react";
import OrganogramChart from "@/components/departments/OrganogramChart";
import DepartmentCard from "@/components/departments/DepartmentCard";

const DepartmentsPage = () => {
  const { data: departments, isLoading } = useDepartments();

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Departments</h2>
        <p className="text-muted-foreground">Manage and navigate CocoReeno's organizational structure.</p>
      </div>
      
      {/* Organogram visualization */}
      <OrganogramChart />
      
      {/* Department cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          // Skeleton loaders for department cards
          Array(6).fill(0).map((_, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <div className="p-5 border-b border-border">
                  <div className="flex items-center justify-between mb-2">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4 mt-1" />
                </div>
                <div className="p-5">
                  <div className="space-y-2">
                    {Array(4).fill(0).map((_, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-40" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <>
            {departments?.map((department) => (
              <DepartmentCard
                key={department.id}
                id={department.id}
                name={department.name}
                description={department.description}
                memberCount={department.memberCount}
                icon={department.icon}
                subDepartments={department.subDepartments}
              />
            ))}
            
            {/* Add New Department */}
            <Card className="border-2 border-dashed border-border h-full">
              <CardContent className="p-5 flex flex-col items-center justify-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-4">
                  <PlusIcon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-foreground mb-2">Add New Department</h3>
                <p className="text-sm text-muted-foreground mb-4">Create a new department to expand the company structure.</p>
                <Button>Create Department</Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default DepartmentsPage;
