import { useQuery } from "@tanstack/react-query";
import { dashboardStats, inventoryItems, recentActivities, farmingCommunities, 
  sustainabilityMetrics, sustainabilityInitiatives, weatherData, revenueData } from "@/lib/constants";

export function useStats() {
  return useQuery({
    queryKey: ['/api/stats?type=revenue'],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return the sample data
      return dashboardStats;
    }
  });
}

export function useInventory() {
  return useQuery({
    queryKey: ['/api/inventory'],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return the sample data
      return inventoryItems;
    }
  });
}

export function useActivities() {
  return useQuery({
    queryKey: ['/api/activities'],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return the sample data
      return recentActivities;
    }
  });
}

export function useFarmingCommunities() {
  return useQuery({
    queryKey: ['/api/farming-communities'],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return the sample data
      return farmingCommunities;
    }
  });
}

export function useSustainabilityMetrics() {
  return useQuery({
    queryKey: ['/api/sustainability/metrics'],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return the sample data
      return sustainabilityMetrics;
    }
  });
}

export function useSustainabilityInitiatives() {
  return useQuery({
    queryKey: ['/api/sustainability/initiatives'],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return the sample data
      return sustainabilityInitiatives;
    }
  });
}

export function useWeather(location: string = "Keta, Volta Region") {
  return useQuery({
    queryKey: [`/api/weather?location=${encodeURIComponent(location)}`],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return the sample data
      return weatherData;
    }
  });
}

export function useRevenueData() {
  return useQuery({
    queryKey: ['/api/revenue-data'],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return the sample data
      return revenueData;
    }
  });
}
