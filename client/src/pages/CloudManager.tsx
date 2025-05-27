import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database, Shield, Activity, HardDrive, Cpu, Network } from "lucide-react";

const cloudServices = [
  { name: "Web Servers", status: "Running", instances: 4, cpu: 68, memory: 45, cost: "₵420" },
  { name: "Database Cluster", status: "Running", instances: 3, cpu: 32, memory: 78, cost: "₵680" },
  { name: "File Storage", status: "Running", instances: 2, cpu: 15, memory: 25, cost: "₵280" },
  { name: "Load Balancer", status: "Running", instances: 2, cpu: 28, memory: 35, cost: "₵180" }
];

const storageUsage = [
  { type: "Documents", used: "2.4TB", total: "5TB", percentage: 48 },
  { type: "Images", used: "1.8TB", total: "3TB", percentage: 60 },
  { type: "Videos", used: "0.9TB", total: "2TB", percentage: 45 },
  { type: "Database", used: "1.2TB", total: "4TB", percentage: 30 }
];

export default function CloudManager() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Cloud Manager</h1>
        <p className="text-muted-foreground">
          Comprehensive cloud infrastructure management and monitoring dashboard
        </p>
      </div>

      {/* Cloud Overview */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Instances</p>
                <p className="text-2xl font-bold">18</p>
                <p className="text-xs text-green-600">All operational</p>
              </div>
              <Server className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Cost</p>
                <p className="text-2xl font-bold">₵1,560</p>
                <p className="text-xs text-blue-600">-8% this month</p>
              </div>
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Uptime</p>
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-xs text-green-600">Last 30 days</p>
              </div>
              <Activity className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Data Transfer</p>
                <p className="text-2xl font-bold">4.2TB</p>
                <p className="text-xs text-purple-600">This month</p>
              </div>
              <Network className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cloud Services */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Cloud Services Status</CardTitle>
          <CardDescription>Real-time monitoring of all cloud infrastructure components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cloudServices.map((service, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-primary" />
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.instances} instances</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={service.status === "Running" ? "default" : "destructive"}>
                      {service.status}
                    </Badge>
                    <span className="text-sm font-medium text-green-600">{service.cost}/month</span>
                  </div>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center gap-1">
                        <Cpu className="w-3 h-3" />
                        CPU Usage
                      </span>
                      <span>{service.cpu}%</span>
                    </div>
                    <Progress value={service.cpu} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="flex items-center gap-1">
                        <HardDrive className="w-3 h-3" />
                        Memory Usage
                      </span>
                      <span>{service.memory}%</span>
                    </div>
                    <Progress value={service.memory} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Storage Management */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Storage Usage</CardTitle>
            <CardDescription>Cloud storage utilization across different data types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {storageUsage.map((storage, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      {storage.type}
                    </span>
                    <span>{storage.used} / {storage.total}</span>
                  </div>
                  <Progress value={storage.percentage} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">{storage.percentage}% utilized</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security & Backup</CardTitle>
            <CardDescription>Cloud security status and backup operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>SSL Certificates</span>
                </div>
                <Badge>Valid</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  <span>Daily Backups</span>
                </div>
                <Badge>Completed</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Firewall Status</span>
                </div>
                <Badge>Active</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-orange-600" />
                  <span>Monitoring</span>
                </div>
                <Badge>Running</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common cloud management operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button variant="outline" className="h-20 flex flex-col">
              <Server className="w-6 h-6 mb-2" />
              Scale Instances
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <Database className="w-6 h-6 mb-2" />
              Backup Now
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <Activity className="w-6 h-6 mb-2" />
              View Logs
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <Shield className="w-6 h-6 mb-2" />
              Security Scan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}