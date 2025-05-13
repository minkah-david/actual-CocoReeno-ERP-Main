import { useOrganogram } from "@/hooks/useDepartments";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Organogram from "@/components/ui/organogram";

const OrganogramChart = () => {
  const { data: organogram, isLoading } = useOrganogram();

  if (isLoading) {
    return (
      <Card className="mb-8">
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-40" />
            <div className="flex space-x-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-8">
            <Skeleton className="h-16 w-64 rounded-lg" />
            <Skeleton className="h-8 w-0.5" />
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="h-16 w-48 rounded-lg" />
              <Skeleton className="h-16 w-48 rounded-lg" />
              <Skeleton className="h-16 w-48 rounded-lg" />
            </div>
            <Skeleton className="h-8 w-3/4" />
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="h-16 w-48 rounded-lg" />
              <Skeleton className="h-16 w-48 rounded-lg" />
              <Skeleton className="h-16 w-48 rounded-lg" />
              <Skeleton className="h-16 w-48 rounded-lg" />
              <Skeleton className="h-16 w-48 rounded-lg" />
              <Skeleton className="h-16 w-48 rounded-lg" />
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Skeleton className="h-10 w-48" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-poppins font-semibold text-lg text-foreground">Company Organogram</h3>
          <div className="flex space-x-2">
            <Button size="sm">View All</Button>
            <Button size="sm" variant="outline">Export</Button>
          </div>
        </div>
        
        <Organogram data={organogram} />
        
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="flex items-center gap-2">
            <i className="ri-fullscreen-line"></i> Expand Full Organogram
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganogramChart;
