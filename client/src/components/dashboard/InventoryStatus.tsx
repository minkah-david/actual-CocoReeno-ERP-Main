import { useInventory } from "@/hooks/useDashboardData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const InventoryStatus = () => {
  const { data: inventory, isLoading } = useInventory();

  const getLevelColor = (level: number) => {
    if (level < 25) return "bg-red-500";
    if (level < 50) return "bg-amber-500";
    return "bg-primary";
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-6 w-6" />
          </div>
          <div className="space-y-4">
            {Array(5).fill(0).map((_, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-2 w-full rounded-full" />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Skeleton className="h-10 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-poppins font-semibold text-lg text-foreground">Inventory Status</h3>
          <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
            <i className="ri-refresh-line"></i>
          </Button>
        </div>
        <div className="space-y-4">
          {inventory?.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-foreground">{item.name}</span>
                <span className="text-sm font-medium text-foreground">{item.quantity}</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div 
                  className={`h-2 ${getLevelColor(item.level)} rounded-full`}
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button className="w-full">View Detailed Report</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryStatus;
