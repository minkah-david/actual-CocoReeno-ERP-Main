import { useSustainabilityMetrics, useSustainabilityInitiatives } from "@/hooks/useDashboardData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const SustainabilityImpact = () => {
  const { data: metrics, isLoading: metricsLoading } = useSustainabilityMetrics();
  const { data: initiatives, isLoading: initiativesLoading } = useSustainabilityInitiatives();
  const isLoading = metricsLoading || initiativesLoading;

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-40" />
            <div className="flex space-x-2">
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-8 w-20" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {Array(3).fill(0).map((_, i) => (
              <div key={i} className="bg-muted rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-8 w-16 mb-1" />
                <Skeleton className="h-3 w-24 mb-1" />
                <Skeleton className="h-3 w-48" />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <div className="bg-primary/10 rounded-lg p-4">
              <Skeleton className="h-5 w-40 mb-4" />
              <div className="space-y-2">
                {Array(4).fill(0).map((_, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <Skeleton className="h-4 w-4 mt-0.5" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-poppins font-semibold text-lg text-foreground">Sustainability Impact</h3>
          <div className="flex space-x-2">
            <Button size="sm" variant="default">This Year</Button>
            <Button size="sm" variant="outline">Last Year</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {metrics?.map((metric, index) => (
            <div key={index} className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <i className={`${metric.icon} text-${metric.color} text-xl`}></i>
                <span className="text-sm font-medium text-foreground">{metric.title}</span>
              </div>
              <h4 className="text-xl font-bold text-foreground">{metric.value}</h4>
              <p className="text-xs text-muted-foreground">{metric.unit}</p>
              <span className="text-xs text-green-600 font-medium">{metric.change}</span>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80" 
            alt="Sustainable Coconut Farming" 
            className="rounded-lg h-48 w-full object-cover" 
          />
          <div className="bg-primary/10 rounded-lg p-4">
            <h4 className="font-poppins font-semibold text-foreground mb-2">Sustainability Initiatives</h4>
            <ul className="space-y-2">
              {initiatives?.map((initiative, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <i className="ri-checkbox-circle-line text-primary mt-0.5"></i>
                  <span className="text-sm text-foreground">{initiative}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SustainabilityImpact;
