import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Building2, Server, Cloud, Shield, Network, Database, Code, Layers } from "lucide-react";

const systemArchitecture = [
  {
    layer: "Presentation Layer",
    components: ["React Frontend", "Mobile App", "Admin Dashboard"],
    status: "Operational",
    uptime: 99.8
  },
  {
    layer: "API Gateway",
    components: ["Express.js", "Authentication", "Rate Limiting"],
    status: "Operational", 
    uptime: 99.9
  },
  {
    layer: "Business Logic",
    components: ["Core Services", "Processing Engine", "Analytics"],
    status: "Operational",
    uptime: 99.7
  },
  {
    layer: "Data Layer",
    components: ["PostgreSQL", "Redis Cache", "File Storage"],
    status: "Operational",
    uptime: 99.9
  }
];

const infrastructure = [
  {
    component: "Web Servers",
    capacity: "4 instances",
    utilization: 65,
    status: "Healthy"
  },
  {
    component: "Database Cluster",
    capacity: "Primary + 2 Replicas", 
    utilization: 45,
    status: "Healthy"
  },
  {
    component: "Cache Layer",
    capacity: "8GB Redis",
    utilization: 32,
    status: "Healthy"
  },
  {
    component: "Load Balancer",
    capacity: "10k req/sec",
    utilization: 28,
    status: "Healthy"
  }
];

const securityArchitecture = [
  {
    component: "Firewall",
    type: "Network Security",
    status: "Active",
    lastUpdate: "2 hours ago"
  },
  {
    component: "SSL/TLS",
    type: "Data Encryption",
    status: "Active",
    lastUpdate: "1 day ago"
  },
  {
    component: "OAuth 2.0",
    type: "Authentication",
    status: "Active", 
    lastUpdate: "30 minutes ago"
  },
  {
    component: "RBAC",
    type: "Authorization",
    status: "Active",
    lastUpdate: "5 minutes ago"
  }
];

export default function Architectures() {
  const [activeView, setActiveView] = useState("system");

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">System Architecture</h1>
        <p className="text-muted-foreground">
          Complete overview of CocoReeno Enterprise system architecture, infrastructure, and technical components
        </p>
      </div>

      {/* Architecture Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => setActiveView("system")}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">System Architecture</p>
                <p className="text-2xl font-bold">4 Layers</p>
              </div>
              <Layers className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => setActiveView("infrastructure")}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Infrastructure</p>
                <p className="text-2xl font-bold">12 Services</p>
              </div>
              <Server className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => setActiveView("security")}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Security</p>
                <p className="text-2xl font-bold">8 Controls</p>
              </div>
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-colors hover:bg-muted/50" onClick={() => setActiveView("network")}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Network</p>
                <p className="text-2xl font-bold">99.9%</p>
              </div>
              <Network className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Architecture View */}
      {activeView === "system" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                System Architecture Layers
              </CardTitle>
              <CardDescription>Multi-tier architecture ensuring scalability and maintainability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemArchitecture.map((layer, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{layer.layer}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant={layer.status === "Operational" ? "default" : "destructive"}>
                          {layer.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{layer.uptime}% uptime</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {layer.components.map((component, compIndex) => (
                        <Badge key={compIndex} variant="outline">
                          {component}
                        </Badge>
                      ))}
                    </div>
                    <Progress value={layer.uptime} className="mt-3 h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Infrastructure View */}
      {activeView === "infrastructure" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5" />
                Infrastructure Components
              </CardTitle>
              <CardDescription>Current infrastructure utilization and capacity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {infrastructure.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{item.component}</h3>
                      <Badge variant={item.status === "Healthy" ? "default" : "destructive"}>
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.capacity}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Utilization</span>
                        <span>{item.utilization}%</span>
                      </div>
                      <Progress value={item.utilization} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Security Architecture View */}
      {activeView === "security" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Architecture
              </CardTitle>
              <CardDescription>Security controls and protection mechanisms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {securityArchitecture.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{item.component}</h3>
                      <Badge variant={item.status === "Active" ? "default" : "destructive"}>
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.type}</p>
                    <p className="text-xs text-muted-foreground">Last updated: {item.lastUpdate}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Network Architecture View */}
      {activeView === "network" && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="w-5 h-5" />
                Network Architecture
              </CardTitle>
              <CardDescription>Network topology and connectivity status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Network Segments</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>DMZ Network</span>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Internal LAN</span>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Management Network</span>
                      <Badge>Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Storage Network</span>
                      <Badge>Active</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Connectivity Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Internet Gateway</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>VPN Connections</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">3/3 Active</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>CDN Status</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Operational</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>DNS Resolution</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Normal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}