import { useQuery } from "@tanstack/react-query";
import { departmentList, organogramStructure } from "@/lib/constants";

export function useDepartments() {
  return useQuery({
    queryKey: ['/api/departments'],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return the sample data
      return departmentList;
    }
  });
}

export function useDepartment(id: string | number) {
  return useQuery({
    queryKey: [`/api/departments/${id}`],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return a sample department
      const dept = departmentList.find(d => d.id.toString() === id.toString());
      if (!dept) {
        throw new Error("Department not found");
      }
      return dept;
    },
    enabled: !!id
  });
}

export function useSubDepartments(id: string | number) {
  return useQuery({
    queryKey: [`/api/departments/${id}/subdepartments`],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll find the department and return its subdepartments
      const dept = departmentList.find(d => d.id.toString() === id.toString());
      if (!dept) {
        throw new Error("Department not found");
      }
      
      // Convert the string array into objects
      return dept.subDepartments.map((name, index) => ({
        id: `${id}-${index + 1}`,
        name,
        parentId: id,
        memberCount: Math.floor(Math.random() * 10) + 1
      }));
    },
    enabled: !!id
  });
}

export function useOrganogram() {
  return useQuery({
    queryKey: ['/api/organogram'],
    queryFn: async () => {
      // This will use the default query function, which will call the API
      // In development, we'll return the sample organogram structure
      return organogramStructure;
    }
  });
}
