import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const FinancePage = () => {
  // Sample financial data
  const budgetData = [
    { department: "Operations", allocated: 2500000, spent: 2200000, remaining: 300000 },
    { department: "Sales", allocated: 1800000, spent: 1650000, remaining: 150000 },
    { department: "Marketing", allocated: 1200000, spent: 1100000, remaining: 100000 },
    { department: "R&D", allocated: 800000, spent: 720000, remaining: 80000 },
    { department: "HR", allocated: 600000, spent: 550000, remaining: 50000 }
  ];

  const expenseBreakdown = [
    { name: "Raw Materials", value: 3200000, color: "#9efe00" },
    { name: "Labor", value: 1800000, color: "#4e342e" },
    { name: "Operations", value: 1200000, color: "#82ca9d" },
    { name: "Marketing", value: 800000, color: "#ffc658" },
    { name: "Administration", value: 600000, color: "#ff7c7c" }
  ];

  const cashFlowData = [
    { month: "Jan", inflow: 4500000, outflow: 3800000, net: 700000 },
    { month: "Feb", inflow: 5200000, outflow: 4100000, net: 1100000 },
    { month: "Mar", inflow: 4800000, outflow: 3900000, net: 900000 },
    { month: "Apr", inflow: 5800000, outflow: 4300000, net: 1500000 },
    { month: "May", inflow: 5400000, outflow: 4200000, net: 1200000 },
    { month: "Jun", inflow: 6200000, outflow: 4500000, net: 1700000 }
  ];

  const formatCurrency = (value: number) => `GH₵ ${(value / 1000000).toFixed(1)}M`;

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Finance & Accountability</h2>
        <p className="text-muted-foreground">Comprehensive financial management and accountability oversight</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="budgets">Budget Control</TabsTrigger>
          <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
          <TabsTrigger value="reports">Financial Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">GH₵ 32.4M</p>
                  <p className="text-sm text-muted-foreground">Total Revenue YTD</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+15.3%</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">GH₵ 25.8M</p>
                  <p className="text-sm text-muted-foreground">Total Expenses YTD</p>
                  <Badge variant="outline" className="mt-1 bg-amber-50 text-amber-700">+8.2%</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">GH₵ 6.6M</p>
                  <p className="text-sm text-muted-foreground">Net Profit YTD</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+20.4%</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">20.4%</p>
                  <p className="text-sm text-muted-foreground">Profit Margin</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+2.1%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Expense Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={expenseBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {expenseBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  {expenseBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span>{item.name}: {formatCurrency(item.value)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Supplier Payment - Tema Farms</p>
                      <p className="text-xs text-muted-foreground">June 15, 2024</p>
                    </div>
                    <span className="text-red-600 font-medium">-GH₵ 450,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Customer Payment - Accra Distribution</p>
                      <p className="text-xs text-muted-foreground">June 14, 2024</p>
                    </div>
                    <span className="text-green-600 font-medium">+GH₵ 680,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Equipment Purchase - Processing Unit</p>
                      <p className="text-xs text-muted-foreground">June 13, 2024</p>
                    </div>
                    <span className="text-red-600 font-medium">-GH₵ 1,200,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Export Revenue - International Sales</p>
                      <p className="text-xs text-muted-foreground">June 12, 2024</p>
                    </div>
                    <span className="text-green-600 font-medium">+GH₵ 920,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="budgets" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Departmental Budget vs Actual Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={budgetData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis tickFormatter={formatCurrency} />
                    <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    <Bar dataKey="allocated" fill="#9efe00" name="Allocated" />
                    <Bar dataKey="spent" fill="#4e342e" name="Spent" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {budgetData.map((dept, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">{dept.department}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Allocated:</span>
                      <span className="font-medium">{formatCurrency(dept.allocated)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Spent:</span>
                      <span className="font-medium">{formatCurrency(dept.spent)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remaining:</span>
                      <span className="font-medium text-primary">{formatCurrency(dept.remaining)}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(dept.spent / dept.allocated) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {((dept.spent / dept.allocated) * 100).toFixed(1)}% utilized
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cashflow" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Cash Flow Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cashFlowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={formatCurrency} />
                    <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    <Bar dataKey="inflow" fill="#9efe00" name="Cash Inflow" />
                    <Bar dataKey="outflow" fill="#ef4444" name="Cash Outflow" />
                    <Bar dataKey="net" fill="#4e342e" name="Net Cash Flow" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded">
                    <i className="ri-file-chart-line text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Monthly P&L Statement</h3>
                    <p className="text-sm text-muted-foreground">Detailed profit & loss analysis</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded">
                    <i className="ri-pie-chart-line text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Balance Sheet</h3>
                    <p className="text-sm text-muted-foreground">Assets, liabilities & equity</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded">
                    <i className="ri-money-dollar-circle-line text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Cash Flow Statement</h3>
                    <p className="text-sm text-muted-foreground">Operating, investing & financing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded">
                    <i className="ri-calculator-line text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Budget vs Actual</h3>
                    <p className="text-sm text-muted-foreground">Variance analysis report</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded">
                    <i className="ri-stock-line text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Investor Reports</h3>
                    <p className="text-sm text-muted-foreground">Quarterly investor updates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded">
                    <i className="ri-tax-line text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Tax Compliance</h3>
                    <p className="text-sm text-muted-foreground">Tax filings & compliance status</p>
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

export default FinancePage;