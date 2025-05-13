import { useFarmingCommunities } from "@/hooks/useDashboardData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const TopFarmingCommunities = () => {
  const { data: communities, isLoading } = useFarmingCommunities();

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="space-y-4">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="flex items-center space-x-3 pb-4 border-b border-border">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Skeleton className="h-48 w-full rounded-lg mt-4" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-poppins font-semibold text-lg text-foreground">Top Farming Communities</h3>
          <Button variant="link" size="sm" className="text-primary">
            View Map
          </Button>
        </div>
        <div className="space-y-4">
          {communities?.map((community, index) => (
            <div key={index} className="flex items-center space-x-3 pb-4 border-b border-border">
              <img 
                src={community.image} 
                alt={community.name} 
                className="h-12 w-12 object-cover rounded-lg" 
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-foreground">{community.name}</p>
                  <p className="text-sm font-medium text-foreground">{community.production}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">{community.farmers}</p>
                  <span className="text-xs text-green-600">{community.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Map preview */}
        <div className="rounded-lg overflow-hidden h-48 relative mt-4">
          <img 
            src="https://pixabay.com/get/gadbd4120fc9ae08d5363d687694c99e96695d5fc73286bef6166598b9f226cb6c5a3bfdedccaee6c93b5d79743069ee2cd35cde23617e840b26b45056a5d64db_1280.jpg" 
            alt="Ghana Map" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
            <Button>Open Interactive Map</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopFarmingCommunities;
