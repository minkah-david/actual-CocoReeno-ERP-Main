import { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { Card, CardContent } from "@/components/ui/card";
import { salespersonsData } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

// Map container style
const containerStyle = {
  width: '100%',
  height: '320px',
  borderRadius: '8px'
};

// Map center (Ghana)
const center = {
  lat: 5.6037,
  lng: -0.1870
};

// Map options
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true,
};

const SalespersonsTracking = () => {
  const [selectedSalesperson, setSelectedSalesperson] = useState<number | null>(null);

  // Load Google Maps API with direct API key from project environment
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyB5XVbCfPD6cV8NZnuZVohQID0pMH-tUvk' // Using API key you provided
  });

  // Define marker colors based on status
  const getMarkerIcon = (status: string) => {
    switch(status) {
      case 'active':
        return 'http://maps.google.com/mapfiles/ms/icons/green-dot.png';
      case 'idle':
        return 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
      case 'offline':
        return 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
      default:
        return 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    }
  };

  // Handle marker click
  const handleMarkerClick = (salespersonId: number) => {
    setSelectedSalesperson(salespersonId);
  };

  // Close info window
  const handleInfoWindowClose = useCallback(() => {
    setSelectedSalesperson(null);
  }, []);

  // Status counts
  const statusCounts = salespersonsData.reduce((acc, salesperson) => {
    acc[salesperson.status] = (acc[salesperson.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-poppins font-semibold text-lg text-foreground">Salespersons Tracking</h3>
          <div className="flex space-x-2">
            <Badge variant="outline" className="bg-green-100 text-green-700 border-none">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              Active: {statusCounts.active || 0}
            </Badge>
            <Badge variant="outline" className="bg-yellow-100 text-yellow-700 border-none">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span>
              Idle: {statusCounts.idle || 0}
            </Badge>
            <Badge variant="outline" className="bg-red-100 text-red-700 border-none">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
              Offline: {statusCounts.offline || 0}
            </Badge>
          </div>
        </div>
        
        <div className="mb-2 px-1 text-xs text-muted-foreground">
          Real-time location and status of field salespersons
        </div>
        
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
            options={options}
          >
            {salespersonsData.map((salesperson) => (
              <Marker
                key={salesperson.id}
                position={salesperson.location}
                icon={getMarkerIcon(salesperson.status)}
                onClick={() => handleMarkerClick(salesperson.id)}
              />
            ))}
            
            {selectedSalesperson !== null && (
              <InfoWindow
                position={salespersonsData.find(s => s.id === selectedSalesperson)?.location}
                onCloseClick={handleInfoWindowClose}
              >
                <div className="p-1">
                  {(() => {
                    const salesperson = salespersonsData.find(s => s.id === selectedSalesperson);
                    if (!salesperson) return null;
                    
                    return (
                      <>
                        <p className="font-medium text-sm">{salesperson.name}</p>
                        <p className="text-xs text-gray-500">{salesperson.territory}</p>
                        <div className="mt-1 flex items-center">
                          <Badge 
                            className={`
                              ${salesperson.status === 'active' ? 'bg-green-100 text-green-700' : 
                                salesperson.status === 'idle' ? 'bg-yellow-100 text-yellow-700' : 
                                'bg-red-100 text-red-700'} 
                              text-xs capitalize
                            `}
                          >
                            {salesperson.status}
                          </Badge>
                          <span className="mx-1 text-gray-400">•</span>
                          <span className="text-xs text-gray-600">{salesperson.clients} clients</span>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : (
          <div className="w-full h-[320px] bg-muted/20 rounded-md flex items-center justify-center">
            <p className="text-muted-foreground">Loading map...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SalespersonsTracking;