import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { salespersonsData } from "@/lib/constants";

const SalespersonsPerformance = () => {
  // Sort salespersons by performance
  const sortedSalespersons = [...salespersonsData]
    .sort((a, b) => b.performance - a.performance)
    .slice(0, 4);

  // Generate avatar fallback from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  // Get progress bar color based on performance
  const getProgressColor = (performance: number) => {
    if (performance > 90) return "bg-green-500";
    if (performance > 75) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <Card>
      <CardContent className="p-5">
        <h3 className="font-poppins font-semibold text-lg text-foreground mb-4">
          Top Performing Salespersons
        </h3>
        
        <div className="space-y-4">
          {sortedSalespersons.map((salesperson) => (
            <div key={salesperson.id} className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-primary/10 text-primary">
                  {getInitials(salesperson.name)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium truncate">{salesperson.name}</p>
                  <p className="text-sm font-semibold">{salesperson.sales}</p>
                </div>
                
                <div className="flex items-center justify-between mb-1">
                  <div className="flex-1 mr-2">
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${getProgressColor(salesperson.performance)}`}
                        style={{ width: `${salesperson.performance}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-xs font-medium whitespace-nowrap">
                    {salesperson.performance}%
                  </span>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  {salesperson.territory} • {salesperson.clients} clients
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <button className="text-xs text-primary font-medium hover:underline w-full text-center">
            View All Salespersons
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalespersonsPerformance;