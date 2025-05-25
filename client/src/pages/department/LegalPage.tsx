import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const LegalPage = () => {
  // Legal data
  const contractMetrics = [
    { month: "Jan", newContracts: 12, renewals: 8, disputes: 2, compliance: 95 },
    { month: "Feb", newContracts: 15, renewals: 6, disputes: 1, compliance: 97 },
    { month: "Mar", newContracts: 10, renewals: 12, disputes: 3, compliance: 94 },
    { month: "Apr", newContracts: 18, renewals: 9, disputes: 1, compliance: 98 },
    { month: "May", newContracts: 14, renewals: 7, disputes: 2, compliance: 96 },
    { month: "Jun", newContracts: 16, renewals: 11, disputes: 1, compliance: 99 }
  ];

  const activeContracts = [
    { id: "CT-2024-045", party: "GlobalTrade Export Ltd", type: "Supply Agreement", value: 2400000, status: "Active", renewal: "2024-12-15" },
    { id: "CT-2024-046", party: "Tema Distribution Hub", type: "Distribution Agreement", value: 1850000, status: "Under Review", renewal: "2024-08-30" },
    { id: "CT-2024-047", party: "MaxMart Retail Chain", type: "Retail Partnership", value: 3200000, status: "Active", renewal: "2025-01-20" },
    { id: "CT-2024-048", party: "Farmers Cooperative Union", type: "Procurement Agreement", value: 1650000, status: "Negotiation", renewal: "2024-10-10" },
    { id: "CT-2024-049", party: "EcoPackaging Solutions", type: "Service Agreement", value: 450000, status: "Active", renewal: "2024-09-05" }
  ];

  const legalRisks = [
    { category: "Contract Disputes", level: "Low", cases: 3, mitigation: "Active mediation", trend: "Stable" },
    { category: "Regulatory Compliance", level: "Medium", cases: 2, mitigation: "Policy updates", trend: "Improving" },
    { category: "Intellectual Property", level: "Low", cases: 1, mitigation: "Patent filings", trend: "Stable" },
    { category: "Employment Law", level: "Low", cases: 0, mitigation: "Regular training", trend: "Stable" },
    { category: "Environmental Regulations", level: "Medium", cases: 1, mitigation: "Compliance audit", trend: "Improving" }
  ];

  const intellectualProperty = [
    { type: "Patents", count: 8, pending: 3, approved: 5, rejected: 0 },
    { type: "Trademarks", count: 12, pending: 2, approved: 10, rejected: 0 },
    { type: "Copyrights", count: 15, pending: 1, approved: 14, rejected: 0 },
    { type: "Trade Secrets", count: 6, pending: 0, approved: 6, rejected: 0 }
  ];

  const complianceAreas = [
    { area: "Food Safety Standards", compliance: 98, lastAudit: "2024-05-15", nextAudit: "2024-11-15" },
    { area: "Environmental Regulations", compliance: 94, lastAudit: "2024-04-20", nextAudit: "2024-10-20" },
    { area: "Labor Standards", compliance: 97, lastAudit: "2024-03-10", nextAudit: "2024-09-10" },
    { area: "Export Compliance", compliance: 99, lastAudit: "2024-06-01", nextAudit: "2024-12-01" },
    { area: "Data Protection", compliance: 96, lastAudit: "2024-05-30", nextAudit: "2024-11-30" }
  ];

  const formatCurrency = (value: number) => `GH₵ ${(value / 1000000).toFixed(1)}M`;

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Active": return "bg-green-100 text-green-700";
      case "Under Review": return "bg-amber-100 text-amber-700";
      case "Negotiation": return "bg-blue-100 text-blue-700";
      case "Expired": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch(level) {
      case "Low": return "bg-green-100 text-green-700";
      case "Medium": return "bg-amber-100 text-amber-700";
      case "High": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getTrendColor = (trend: string) => {
    switch(trend) {
      case "Improving": return "text-green-600";
      case "Stable": return "text-blue-600";
      case "Declining": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Legal & Regulatory Affairs</h2>
        <p className="text-muted-foreground">Comprehensive legal management and regulatory compliance oversight</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="contracts">Contracts</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="ip">Intellectual Property</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">85</p>
                  <p className="text-sm text-muted-foreground">Active Contracts</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">GH₵ 9.55M value</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">97%</p>
                  <p className="text-sm text-muted-foreground">Compliance Rate</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">Above target</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">10</p>
                  <p className="text-sm text-muted-foreground">IP Assets</p>
                  <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700">6 pending</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">7</p>
                  <p className="text-sm text-muted-foreground">Legal Cases</p>
                  <Badge variant="outline" className="mt-1 bg-amber-50 text-amber-700">2 active</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contract Activity & Risk Assessment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contract Activity (6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={contractMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="newContracts" fill="#9efe00" name="New Contracts" />
                      <Bar dataKey="renewals" fill="#4e342e" name="Renewals" />
                      <Bar dataKey="disputes" fill="#ef4444" name="Disputes" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Legal Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {legalRisks.map((risk, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{risk.category}</span>
                          <Badge className={getRiskLevelColor(risk.level)}>{risk.level}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{risk.cases} cases • {risk.mitigation}</span>
                          <span className={getTrendColor(risk.trend)}>
                            {risk.trend === "Improving" ? "↗" : risk.trend === "Declining" ? "↘" : "→"} {risk.trend}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contracts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Contracts Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeContracts.map((contract) => (
                  <div key={contract.id} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium text-sm">{contract.id}</span>
                        <Badge className={getStatusColor(contract.status)}>{contract.status}</Badge>
                        <Badge variant="outline">{contract.type}</Badge>
                      </div>
                      <p className="font-semibold mb-1">{contract.party}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Value: {formatCurrency(contract.value)}</span>
                        <span>Renewal: {contract.renewal}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-contract-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">85</p>
                  <p className="text-sm text-muted-foreground">Total Active Contracts</p>
                  <p className="text-xs text-green-600">15 new this quarter</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-money-dollar-circle-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">GH₵ 9.55M</p>
                  <p className="text-sm text-muted-foreground">Total Contract Value</p>
                  <p className="text-xs text-blue-600">Portfolio worth</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-calendar-check-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Upcoming Renewals</p>
                  <p className="text-xs text-amber-600">Next 3 months</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Compliance Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceAreas.map((area, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{area.area}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold">{area.compliance}%</span>
                          <Badge className={area.compliance >= 95 ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}>
                            {area.compliance >= 95 ? "Compliant" : "Needs Review"}
                          </Badge>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div 
                          className={`h-2 rounded-full ${area.compliance >= 95 ? 'bg-green-500' : 'bg-amber-500'}`}
                          style={{ width: `${area.compliance}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mt-1">
                        <span>Last audit: {area.lastAudit}</span>
                        <span>Next audit: {area.nextAudit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-green-50 rounded">
                    <i className="ri-shield-check-line text-2xl text-green-600 mb-1"></i>
                    <p className="font-semibold text-sm">ISO 22000 Certification</p>
                    <p className="text-xs text-muted-foreground">Food Safety Management</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <i className="ri-leaf-line text-2xl text-blue-600 mb-1"></i>
                    <p className="font-semibold text-sm">Organic Certification</p>
                    <p className="text-xs text-muted-foreground">EU & USDA Standards</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded">
                    <i className="ri-award-line text-2xl text-purple-600 mb-1"></i>
                    <p className="font-semibold text-sm">Fair Trade Certified</p>
                    <p className="text-xs text-muted-foreground">Ethical sourcing standards</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regulatory Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">FDA Export Guidelines Update</p>
                      <p className="text-xs text-muted-foreground">Effective July 1, 2024</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">Implemented</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Ghana EPA Waste Management</p>
                      <p className="text-xs text-muted-foreground">New reporting requirements</p>
                    </div>
                    <Badge className="bg-amber-100 text-amber-700">In Progress</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Labor Law Amendment</p>
                      <p className="text-xs text-muted-foreground">Updated safety protocols</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Compliant</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ip" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property Portfolio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {intellectualProperty.map((ip, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="text-center">
                        <h3 className="font-medium text-sm mb-2">{ip.type}</h3>
                        <p className="text-2xl font-bold text-primary mb-2">{ip.count}</p>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>Approved:</span>
                            <span className="font-medium text-green-600">{ip.approved}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pending:</span>
                            <span className="font-medium text-amber-600">{ip.pending}</span>
                          </div>
                          {ip.rejected > 0 && (
                            <div className="flex justify-between">
                              <span>Rejected:</span>
                              <span className="font-medium text-red-600">{ip.rejected}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent IP Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">CocoFresh Preservation Method</p>
                      <p className="text-xs text-muted-foreground">Patent Application • Filed May 2024</p>
                    </div>
                    <Badge className="bg-amber-100 text-amber-700">Pending</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">EcoShell Trademark</p>
                      <p className="text-xs text-muted-foreground">Trademark • Filed April 2024</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Approved</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">CocoPure Formula</p>
                      <p className="text-xs text-muted-foreground">Trade Secret • Registered June 2024</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Protected</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>IP Protection Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-primary/10 rounded">
                    <p className="text-lg font-bold text-primary">41</p>
                    <p className="text-sm text-muted-foreground">Total IP Assets</p>
                    <p className="text-xs text-green-600">Valued at GH₵ 2.8M</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center p-3 bg-muted/10 rounded">
                      <p className="font-bold">8</p>
                      <p className="text-muted-foreground">Patents Filed</p>
                    </div>
                    <div className="text-center p-3 bg-muted/10 rounded">
                      <p className="font-bold">3</p>
                      <p className="text-muted-foreground">Licenses Granted</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LegalPage;