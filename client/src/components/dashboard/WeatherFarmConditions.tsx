import { useWeather } from "@/hooks/useDashboardData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const WeatherFarmConditions = () => {
  const { data: weather, isLoading } = useWeather();

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-6 w-6" />
          </div>
          
          <div className="mb-4 text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
            <Skeleton className="mx-auto h-10 w-10 rounded-full mb-2" />
            <Skeleton className="mx-auto h-6 w-16 mb-1" />
            <Skeleton className="mx-auto h-4 w-32 mb-1" />
            <Skeleton className="mx-auto h-3 w-48" />
          </div>
          
          <div className="space-y-3 mb-4">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="flex justify-between items-center p-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-4 w-12" />
              </div>
            ))}
          </div>
          
          <Skeleton className="h-24 w-full rounded-lg" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-poppins font-semibold text-lg text-foreground">Weather & Farm Conditions</h3>
          <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
            <i className="ri-refresh-line"></i>
          </Button>
        </div>
        
        <div className="mb-4 text-center p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg">
          <div className="flex justify-center mb-2">
            <i className="ri-sun-line text-4xl text-amber-500"></i>
          </div>
          <h4 className="text-lg font-bold text-foreground">{weather?.temperature}</h4>
          <p className="text-sm text-foreground/80">{weather?.condition}</p>
          <p className="text-xs text-muted-foreground">{weather?.location}</p>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50">
            <div className="flex items-center space-x-2">
              <i className="ri-drop-line text-blue-500"></i>
              <span className="text-sm text-foreground">Humidity</span>
            </div>
            <span className="text-sm font-medium text-foreground">{weather?.humidity}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50">
            <div className="flex items-center space-x-2">
              <i className="ri-windy-line text-teal-500"></i>
              <span className="text-sm text-foreground">Wind</span>
            </div>
            <span className="text-sm font-medium text-foreground">{weather?.wind}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50">
            <div className="flex items-center space-x-2">
              <i className="ri-rainy-line text-indigo-500"></i>
              <span className="text-sm text-foreground">Rainfall (Last 7 days)</span>
            </div>
            <span className="text-sm font-medium text-foreground">{weather?.rainfall}</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-lg hover:bg-muted/50">
            <div className="flex items-center space-x-2">
              <i className="ri-sun-line text-amber-500"></i>
              <span className="text-sm text-foreground">Soil Moisture</span>
            </div>
            <span className="text-sm font-medium text-foreground">{weather?.soilMoisture}</span>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <i className="ri-alert-line text-amber-500 mt-0.5"></i>
            <div>
              <p className="text-sm font-medium text-foreground">Weather Advisory</p>
              <p className="text-xs text-foreground/80">{weather?.advisory}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherFarmConditions;
