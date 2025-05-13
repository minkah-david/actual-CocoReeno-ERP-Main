import { useStats } from "@/hooks/useDashboardData";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardStats = () => {
  const { data: stats, isLoading } = useStats();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {Array(4).fill(0).map((_, i) => (
          <Card key={i} className="stat-card">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-8 w-24" />
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
              <Skeleton className="h-2 w-full rounded-full mb-2" />
              <Skeleton className="h-4 w-24" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats?.map((stat, index) => (
        <Card key={index} className={`stat-card border-l-4 border-${stat.color}`}>
          <CardContent className="p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
              </div>
              <span className="flex items-center text-green-500 text-sm font-medium">
                <i className="ri-arrow-up-line mr-1"></i>
                {stat.change}
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full">
              <div 
                className={`h-2 bg-${stat.color} rounded-full`} 
                style={{ width: `${stat.progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{stat.target}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
