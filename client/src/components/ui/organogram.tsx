import { Card } from "@/components/ui/card";

interface OrganogramNode {
  id: string;
  title: string;
  name?: string;
  reports?: string[];
  subDepartments?: number;
}

interface OrganogramProps {
  data: {
    ceo: OrganogramNode;
    coo: OrganogramNode;
    cfo: OrganogramNode;
    cto: OrganogramNode;
    departments: OrganogramNode[];
  };
}

const Organogram: React.FC<OrganogramProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center">
      {/* CEO Level */}
      <div className="mb-6">
        <Card className="w-64 p-3 bg-secondary text-secondary-foreground rounded-lg text-center">
          <h4 className="font-medium">{data.ceo.title}</h4>
          <p className="text-xs opacity-80">{data.ceo.name}</p>
        </Card>
      </div>
      
      {/* Connector Line */}
      <div className="h-8 w-0.5 bg-border"></div>
      
      {/* C-Level */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="w-48 p-3 bg-primary text-primary-foreground rounded-lg text-center">
          <h4 className="font-medium">{data.coo.title}</h4>
          <p className="text-xs opacity-80">{data.coo.name}</p>
        </Card>
        <Card className="w-48 p-3 bg-primary text-primary-foreground rounded-lg text-center">
          <h4 className="font-medium">{data.cfo.title}</h4>
          <p className="text-xs opacity-80">{data.cfo.name}</p>
        </Card>
        <Card className="w-48 p-3 bg-primary text-primary-foreground rounded-lg text-center">
          <h4 className="font-medium">{data.cto.title}</h4>
          <p className="text-xs opacity-80">{data.cto.name}</p>
        </Card>
      </div>
      
      {/* Connector Lines */}
      <div className="h-8 w-3/4 border-t border-l border-r border-border"></div>
      
      {/* Department Heads */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {data.departments.map((dept, index) => (
          <Card 
            key={index} 
            className="w-48 p-3 bg-secondary bg-opacity-80 text-secondary-foreground rounded-lg text-center"
          >
            <h4 className="font-medium">{dept.title}</h4>
            <p className="text-xs opacity-80">{dept.subDepartments} Sub-departments</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Organogram;
