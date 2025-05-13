import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface DepartmentCardProps {
  id: number | string;
  name: string;
  description: string;
  memberCount: number;
  icon: string;
  subDepartments: string[];
}

const DepartmentCard = ({ id, name, description, memberCount, icon, subDepartments }: DepartmentCardProps) => {
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-0">
        <div className="p-5 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-poppins font-semibold text-lg text-foreground">{name}</h3>
            <span className="flex items-center text-xs font-medium text-primary">
              <i className="ri-user-line mr-1"></i> {memberCount} members
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="p-5">
          <ul className="space-y-2">
            {subDepartments.map((subDept, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-foreground">
                <i className="ri-arrow-right-s-line text-primary"></i>
                <span>{subDept}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Link href={`/departments/${id}`}>
              <Button variant="secondary" className="w-full">
                Manage Department
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DepartmentCard;
