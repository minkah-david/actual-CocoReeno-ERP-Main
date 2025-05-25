import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const AuditPage = () => {
  // Audit data
  const auditSchedule = [
    { id: "AUD-2024-001", department: "Finance", type: "Financial Audit", status: "Completed", score: 94, findings: 3, priority: "High", dueDate: "2024-06-30" },
    { id: "AUD-2024-002", department: "Operations", type: "Process Audit", status: "In Progress", score: 0, findings: 0, priority: "Medium", dueDate: "2024-07-15" },
    { id: "AUD-2024-003", department: "Sales", type: "Performance Audit", status: "Scheduled", score: 0, findings: 0, priority: "Medium", dueDate: "2024-07-30" },
    { id: "AUD-2024-004", department: "IT", type: "Compliance Audit", status: "In Progress", score: 0, findings: 0, priority: "High", dueDate: "2024-08-10" },
    { id: "AUD-2024-005", department: "HR", type: "Policy Compliance", status: "Scheduled", score: 0, findings: 0, priority: "Low", dueDate: "2024-08-20" }
  ];

  const complianceMetrics = [
    { month: "Jan", financial: 95, operational: 92, policy: 89, performance: 88 },
    { month: "Feb", financial: 96, operational: 94, policy: 91, performance: 90 },
    { month: "Mar", financial: 94, operational: 93, policy: 88, performance: 89 },
    { month: "Apr", financial: 97, operational: 95, policy: 93, performance: 92 },
    { month: "May", financial: 96, operational: 96, policy: 92, performance: 91 },
    { month: "Jun", financial: 98, operational: 97, policy: 94, performance: 93 }
  ];

  const findingsBreakdown = [
    { category: "Financial Controls", high: 2, medium: 5, low: 8, resolved: 12, color: "#9efe00" },
    { category: "Operational Efficiency", high: 1, medium: 7, low: 12, resolved: 15, color: "#4e342e" },
    { category: "Policy Compliance", high: 3, medium: 6, low: 9, resolved: 14, color: "#82ca9d" },
    { category: "Performance Management", high: 0, medium: 4, low: 11, resolved: 13, color: "#ffc658" }
  ];

  const riskAssessment = [
    { area: "Financial Reporting", riskLevel: "Medium", impact: "High", likelihood: "Low", mitigation: "Enhanced controls", status: "Monitored" },
    { area: "Data Security", riskLevel: "High", impact: "Critical", likelihood: "Medium", mitigation: "Security upgrade", status: "Active" },
    { area: "Regulatory Compliance", riskLevel: "Low", impact: "Medium", likelihood: "Low", mitigation: "Regular training", status: "Controlled" },
    { area: "Operational Processes", riskLevel: "Medium", impact: "Medium", likelihood: "Medium", mitigation: "Process review", status: "Monitored" },
    { area: "Vendor Management", riskLevel: "Low", impact: "Low", likelihood: "Medium", mitigation: "Contract review", status: "Controlled" }
  ];

  const performanceMetrics = [
    { department: "Finance", target: 95, actual: 98, variance: 3, trend: "improving" },
    { department: "Operations", target: 90, actual: 97, variance: 7, trend: "improving" },
    { department: "Sales", target: 85, actual: 82, variance: -3, trend: "declining" },
    { department: "Marketing", target: 88, actual: 91, variance: 3, trend: "stable" },
    { department: "HR", target: 92, actual: 94, variance: 2, trend: "improving" },
    { department: "IT", target: 95, actual: 96, variance: 1, trend: "stable" }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Completed": return "bg-green-100 text-green-700";
      case "In Progress": return "bg-blue-100 text-blue-700";
      case "Scheduled": return "bg-amber-100 text-amber-700";
      case "Overdue": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case "High": return "bg-red-100 text-red-700";
      case "Medium": return "bg-amber-100 text-amber-700";
      case "Low": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch(level) {
      case "High": return "bg-red-100 text-red-700";
      case "Medium": return "bg-amber-100 text-amber-700";
      case "Low": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getTrendColor = (trend: string) => {
    switch(trend) {
      case "improving": return "text-green-600";
      case "stable": return "text-blue-600";
      case "declining": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch(trend) {
      case "improving": return "↗";
      case "stable": return "→";
      case "declining": return "↘";
      default: return "→";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Audit & Compliance</h2>
        <p className="text-muted-foreground">Comprehensive audit management and compliance monitoring across all operations</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="audits">Active Audits</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Overall Compliance</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">Above target</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">23</p>
                  <p className="text-sm text-muted-foreground">Active Findings</p>
                  <Badge variant="outline" className="mt-1 bg-amber-50 text-amber-700">6 high priority</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">12</p>
                  <p className="text-sm text-muted-foreground">Audits Completed</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">This year</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">4</p>
                  <p className="text-sm text-muted-foreground">Risk Areas</p>
                  <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700">Monitored</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compliance Trends & Risk Assessment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Trends (6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={complianceMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[80, 100]} />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="financial" 
                        stroke="#9efe00" 
                        strokeWidth={3}
                        name="Financial Compliance"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="operational" 
                        stroke="#4e342e" 
                        strokeWidth={3}
                        name="Operational Compliance"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="policy" 
                        stroke="#82ca9d" 
                        strokeWidth={3}
                        name="Policy Compliance"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Assessment Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {riskAssessment.map((risk, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{risk.area}</span>
                          <Badge className={getRiskLevelColor(risk.riskLevel)}>{risk.riskLevel}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>Impact: {risk.impact} • Likelihood: {risk.likelihood}</span>
                          <span>{risk.mitigation}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audits" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Audit Schedule & Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditSchedule.map((audit) => (
                  <div key={audit.id} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium text-sm">{audit.id}</span>
                        <Badge className={getStatusColor(audit.status)}>{audit.status}</Badge>
                        <Badge className={getPriorityColor(audit.priority)}>{audit.priority}</Badge>
                        <Badge variant="outline">{audit.type}</Badge>
                      </div>
                      <p className="font-semibold mb-1">{audit.department} Department</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Due: {audit.dueDate}</span>
                        {audit.score > 0 && <span>Score: {audit.score}%</span>}
                        {audit.findings > 0 && <span>Findings: {audit.findings}</span>}
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
                <CardTitle>Audit Findings by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {findingsBreakdown.map((category, index) => (
                    <div key={index} className="p-3 bg-muted/20 rounded">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{category.category}</span>
                        <span className="text-sm text-green-600">{category.resolved} resolved</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center p-2 bg-red-50 rounded">
                          <p className="font-bold text-red-600">{category.high}</p>
                          <p className="text-red-600">High</p>
                        </div>
                        <div className="text-center p-2 bg-amber-50 rounded">
                          <p className="font-bold text-amber-600">{category.medium}</p>
                          <p className="text-amber-600">Medium</p>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded">
                          <p className="font-bold text-green-600">{category.low}</p>
                          <p className="text-green-600">Low</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audit Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-primary/10 rounded">
                    <p className="text-2xl font-bold text-primary">93%</p>
                    <p className="text-sm text-muted-foreground">Average Audit Score</p>
                    <p className="text-xs text-green-600">Above industry benchmark</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center p-3 bg-green-50 rounded">
                      <p className="font-bold text-green-600">54</p>
                      <p className="text-green-600">Findings Resolved</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded">
                      <p className="font-bold text-blue-600">2.1</p>
                      <p className="text-blue-600">Avg Days to Resolve</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <i className="ri-bank-line text-3xl text-primary mb-2"></i>
                      <p className="text-lg font-bold">98%</p>
                      <p className="text-sm text-muted-foreground">Financial Compliance</p>
                      <Badge className="mt-1 bg-green-100 text-green-700">Excellent</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <i className="ri-settings-line text-3xl text-primary mb-2"></i>
                      <p className="text-lg font-bold">97%</p>
                      <p className="text-sm text-muted-foreground">Operational Compliance</p>
                      <Badge className="mt-1 bg-green-100 text-green-700">Excellent</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <i className="ri-file-list-line text-3xl text-primary mb-2"></i>
                      <p className="text-lg font-bold">94%</p>
                      <p className="text-sm text-muted-foreground">Policy Compliance</p>
                      <Badge className="mt-1 bg-green-100 text-green-700">Good</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <i className="ri-shield-check-line text-3xl text-primary mb-2"></i>
                      <p className="text-lg font-bold">96%</p>
                      <p className="text-sm text-muted-foreground">Security Compliance</p>
                      <Badge className="mt-1 bg-green-100 text-green-700">Excellent</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Ghana FDA Regulations</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">98%</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Environmental Protection</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">95%</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Labor Law Compliance</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "97%" }}></div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">97%</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Export Regulations</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "99%" }}></div>
                      </div>
                      <Badge className="bg-green-100 text-green-700">99%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Internal Controls Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-center p-3 bg-green-50 rounded">
                    <i className="ri-checkbox-circle-line text-2xl text-green-600 mb-1"></i>
                    <p className="font-semibold text-sm">Financial Controls</p>
                    <p className="text-xs text-muted-foreground">Strong segregation of duties</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <i className="ri-flow-chart text-2xl text-blue-600 mb-1"></i>
                    <p className="font-semibold text-sm">Process Controls</p>
                    <p className="text-xs text-muted-foreground">Documented procedures</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded">
                    <i className="ri-user-settings-line text-2xl text-purple-600 mb-1"></i>
                    <p className="font-semibold text-sm">Access Controls</p>
                    <p className="text-xs text-muted-foreground">Role-based permissions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Performance vs Targets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {performanceMetrics.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{dept.department}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-bold">{dept.actual}%</span>
                          <span className={`text-xs ${dept.variance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {dept.variance >= 0 ? '+' : ''}{dept.variance}%
                          </span>
                          <span className={getTrendColor(dept.trend)}>
                            {getTrendIcon(dept.trend)}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-2">
                        <div 
                          className={`h-2 rounded-full ${dept.actual >= dept.target ? 'bg-green-500' : 'bg-amber-500'}`}
                          style={{ width: `${Math.min(dept.actual, 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Target: {dept.target}% • Trend: {dept.trend}
                      </p>
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
                  <i className="ri-bar-chart-grouped-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">91%</p>
                  <p className="text-sm text-muted-foreground">Avg Performance Score</p>
                  <p className="text-xs text-green-600">Above target of 88%</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-arrow-up-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Departments Improving</p>
                  <p className="text-xs text-green-600">Out of 6 total</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-target-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">4</p>
                  <p className="text-sm text-muted-foreground">Targets Exceeded</p>
                  <p className="text-xs text-green-600">67% success rate</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuditPage;