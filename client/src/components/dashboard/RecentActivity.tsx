import { useActivities } from "@/hooks/useDashboardData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const RecentActivity = () => {
  const { data: activities, isLoading } = useActivities();

  const getIconColor = (color: string) => {
    switch (color) {
      case 'green': return 'bg-green-100 text-green-600';
      case 'blue': return 'bg-blue-100 text-blue-600';
      case 'amber': return 'bg-amber-100 text-amber-600';
      case 'purple': return 'bg-purple-100 text-purple-600';
      case 'red': return 'bg-red-100 text-red-600';
      default: return 'bg-primary/10 text-primary';
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="space-y-4">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex items-start space-x-3 pb-4 border-b border-border">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-poppins font-semibold text-lg text-foreground">Recent Activity</h3>
          <Button variant="link" size="sm" className="text-primary">
            View All
          </Button>
        </div>
        <div className="space-y-4">
          {activities?.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 pb-4 border-b border-border">
              <div className={`h-10 w-10 rounded-full ${getIconColor(activity.color)} flex items-center justify-center flex-shrink-0`}>
                <i className={`${activity.icon}`}></i>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
