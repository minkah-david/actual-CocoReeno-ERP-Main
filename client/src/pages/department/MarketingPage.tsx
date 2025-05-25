import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const MarketingPage = () => {
  // Marketing campaign data
  const campaignPerformance = [
    { month: "Jan", digital: 85000, traditional: 45000, social: 35000, events: 25000 },
    { month: "Feb", digital: 92000, traditional: 48000, social: 42000, events: 30000 },
    { month: "Mar", digital: 88000, traditional: 46000, social: 39000, events: 28000 },
    { month: "Apr", digital: 95000, traditional: 52000, social: 48000, events: 35000 },
    { month: "May", digital: 102000, traditional: 49000, social: 52000, events: 32000 },
    { month: "Jun", digital: 108000, traditional: 55000, social: 58000, events: 38000 }
  ];

  const socialMediaMetrics = [
    { platform: "Facebook", followers: 24500, engagement: 4.2, reach: 185000, posts: 45 },
    { platform: "Instagram", followers: 18200, engagement: 5.8, reach: 142000, posts: 52 },
    { platform: "LinkedIn", followers: 8500, engagement: 3.1, reach: 65000, posts: 28 },
    { platform: "TikTok", followers: 15600, engagement: 7.4, reach: 98000, posts: 38 },
    { platform: "YouTube", followers: 5200, engagement: 6.2, reach: 45000, posts: 12 }
  ];

  const activeCampaigns = [
    { id: "CM-2024-012", name: "Summer Coconut Festival", type: "Event Marketing", budget: 85000, spent: 68000, status: "Active", roi: 145 },
    { id: "CM-2024-013", name: "Health Benefits Campaign", type: "Digital", budget: 45000, spent: 42000, status: "Active", roi: 132 },
    { id: "CM-2024-014", name: "Export Market Push", type: "B2B", budget: 65000, spent: 58000, status: "Active", roi: 168 },
    { id: "CM-2024-015", name: "Retail Partnership Drive", type: "Trade Marketing", budget: 35000, spent: 28000, status: "Planning", roi: 0 }
  ];

  const brandAwareness = [
    { metric: "Brand Recognition", current: 68, target: 70, change: +5 },
    { metric: "Purchase Intent", current: 42, target: 45, change: +3 },
    { metric: "Customer Satisfaction", current: 4.6, target: 4.5, change: +0.2 },
    { metric: "Net Promoter Score", current: 58, target: 55, change: +8 }
  ];

  const formatCurrency = (value: number) => `GH₵ ${(value / 1000).toFixed(0)}K`;

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Active": return "bg-green-100 text-green-700";
      case "Planning": return "bg-blue-100 text-blue-700";
      case "Completed": return "bg-gray-100 text-gray-700";
      case "Paused": return "bg-amber-100 text-amber-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch(platform) {
      case "Facebook": return "ri-facebook-fill";
      case "Instagram": return "ri-instagram-line";
      case "LinkedIn": return "ri-linkedin-fill";
      case "TikTok": return "ri-tiktok-fill";
      case "YouTube": return "ri-youtube-fill";
      default: return "ri-global-line";
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Marketing & Branding</h2>
        <p className="text-muted-foreground">Comprehensive marketing strategy and brand management</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="digital">Digital Marketing</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">GH₵ 1.8M</p>
                  <p className="text-sm text-muted-foreground">Marketing ROI YTD</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">142% return</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">72,000</p>
                  <p className="text-sm text-muted-foreground">Total Reach</p>
                  <Badge variant="outline" className="mt-1 bg-blue-50 text-blue-700">+28% growth</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">68%</p>
                  <p className="text-sm text-muted-foreground">Brand Awareness</p>
                  <Badge variant="outline" className="mt-1 bg-green-50 text-green-700">+5% increase</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">15</p>
                  <p className="text-sm text-muted-foreground">Active Campaigns</p>
                  <Badge variant="outline" className="mt-1 bg-purple-50 text-purple-700">Multi-channel</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Campaign Performance & Brand Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance by Channel</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={campaignPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={formatCurrency} />
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                      <Bar dataKey="digital" fill="#9efe00" name="Digital" />
                      <Bar dataKey="social" fill="#4e342e" name="Social Media" />
                      <Bar dataKey="traditional" fill="#82ca9d" name="Traditional" />
                      <Bar dataKey="events" fill="#ffc658" name="Events" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Brand Awareness Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {brandAwareness.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">{metric.metric}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-bold">
                              {metric.metric.includes("Satisfaction") ? metric.current : `${metric.current}%`}
                            </span>
                            <Badge className="bg-green-100 text-green-700 text-xs">
                              +{metric.change}{metric.metric.includes("Satisfaction") ? "" : "%"}
                            </Badge>
                          </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ 
                              width: `${metric.metric.includes("Satisfaction") ? (metric.current / 5) * 100 : (metric.current / 100) * 100}%` 
                            }}
                          ></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Target: {metric.metric.includes("Satisfaction") ? metric.target : `${metric.target}%`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Active Marketing Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeCampaigns.map((campaign, index) => (
                  <div key={campaign.id} className="flex items-center justify-between p-4 bg-muted/20 rounded">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-medium text-sm">{campaign.id}</span>
                        <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                        <Badge variant="outline">{campaign.type}</Badge>
                      </div>
                      <p className="font-semibold">{campaign.name}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <span>Budget: {formatCurrency(campaign.budget)}</span>
                        <span>Spent: {formatCurrency(campaign.spent)}</span>
                        {campaign.roi > 0 && <span>ROI: {campaign.roi}%</span>}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="w-24 bg-muted rounded-full h-2 mb-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {((campaign.spent / campaign.budget) * 100).toFixed(0)}% utilized
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
                  <i className="ri-megaphone-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">15</p>
                  <p className="text-sm text-muted-foreground">Active Campaigns</p>
                  <p className="text-xs text-green-600">Across 4 channels</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-funds-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">GH₵ 230K</p>
                  <p className="text-sm text-muted-foreground">Total Budget</p>
                  <p className="text-xs text-blue-600">Q2 2024 allocation</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-trophy-line text-3xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">168%</p>
                  <p className="text-sm text-muted-foreground">Best ROI Campaign</p>
                  <p className="text-xs text-green-600">Export Market Push</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="digital" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {socialMediaMetrics.map((platform, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <i className={`${getPlatformIcon(platform.platform)} text-2xl text-primary`}></i>
                        <div>
                          <p className="font-medium">{platform.platform}</p>
                          <p className="text-xs text-muted-foreground">{platform.posts} posts this month</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Followers:</span>
                          <span className="font-medium">{platform.followers.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Engagement:</span>
                          <span className="font-medium">{platform.engagement}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Reach:</span>
                          <span className="font-medium">{(platform.reach / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 mt-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${platform.engagement * 10}%` }}
                          ></div>
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
                <CardTitle>Content Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Recipe Video Series</p>
                      <p className="text-xs text-muted-foreground">YouTube • 5 videos</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">42K views</p>
                      <p className="text-xs text-green-600">6.2% engagement</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Health Benefits Infographics</p>
                      <p className="text-xs text-muted-foreground">Instagram • 8 posts</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">28K likes</p>
                      <p className="text-xs text-green-600">5.8% engagement</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/20 rounded">
                    <div>
                      <p className="font-medium text-sm">Behind the Scenes</p>
                      <p className="text-xs text-muted-foreground">TikTok • 12 videos</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">85K views</p>
                      <p className="text-xs text-green-600">7.4% engagement</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Campaign ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-muted/20 rounded">
                    <p className="text-2xl font-bold text-primary">285%</p>
                    <p className="text-sm text-muted-foreground">Average Digital ROI</p>
                    <p className="text-xs text-green-600">Best in industry</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-center p-3 bg-muted/10 rounded">
                      <p className="font-bold">GH₵ 45K</p>
                      <p className="text-muted-foreground">Cost per Acquisition</p>
                    </div>
                    <div className="text-center p-3 bg-muted/10 rounded">
                      <p className="font-bold">3.2%</p>
                      <p className="text-muted-foreground">Conversion Rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-eye-line text-2xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">1.2M</p>
                  <p className="text-sm text-muted-foreground">Total Impressions</p>
                  <Badge className="mt-1 bg-green-100 text-green-700">+18% this month</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-mouse-line text-2xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">38.4K</p>
                  <p className="text-sm text-muted-foreground">Click-through Rate</p>
                  <Badge className="mt-1 bg-blue-100 text-blue-700">3.2% CTR</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-heart-line text-2xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">156K</p>
                  <p className="text-sm text-muted-foreground">Total Engagements</p>
                  <Badge className="mt-1 bg-purple-100 text-purple-700">5.4% rate</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <i className="ri-share-line text-2xl text-primary mb-2"></i>
                  <p className="text-lg font-bold">24.8K</p>
                  <p className="text-sm text-muted-foreground">Content Shares</p>
                  <Badge className="mt-1 bg-amber-100 text-amber-700">+25% growth</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Marketing Attribution Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Channel Performance</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Digital Marketing</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Social Media</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }}></div>
                        </div>
                        <span className="text-sm font-medium">72%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Traditional Media</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "58%" }}></div>
                        </div>
                        <span className="text-sm font-medium">58%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Events & PR</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Customer Journey Insights</h4>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-muted/20 rounded">
                      <p className="font-medium">Awareness Stage</p>
                      <p className="text-muted-foreground">Social media accounts for 68% of first touchpoints</p>
                    </div>
                    <div className="p-3 bg-muted/20 rounded">
                      <p className="font-medium">Consideration Stage</p>
                      <p className="text-muted-foreground">Website content drives 75% of engagement</p>
                    </div>
                    <div className="p-3 bg-muted/20 rounded">
                      <p className="font-medium">Conversion Stage</p>
                      <p className="text-muted-foreground">Email campaigns have 12% conversion rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingPage;