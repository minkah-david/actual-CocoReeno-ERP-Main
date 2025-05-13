import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle, Send, Paperclip, Phone, Video, Users, Search, Filter } from "lucide-react";

const Communications = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-2xl text-foreground">Communications</h2>
        <p className="text-muted-foreground">Internal messaging, announcements, and collaboration tools.</p>
      </div>
      
      <Tabs defaultValue="messages" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
        </TabsList>
        
        <TabsContent value="messages" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
            {/* Contacts Sidebar */}
            <Card className="lg:col-span-1 overflow-hidden flex flex-col">
              <CardHeader className="px-4 py-3 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Messages</CardTitle>
                  <Button size="icon" variant="ghost">
                    <PlusCircle className="h-5 w-5" />
                  </Button>
                </div>
                <div className="relative mt-2">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search contacts..." className="pl-8" />
                </div>
              </CardHeader>
              <div className="flex-1 overflow-auto">
                <div className="px-2 py-2">
                  <div className="bg-primary/10 p-2 rounded-lg mb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                        <AvatarFallback>KA</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium truncate">Kofi Annan</h4>
                          <span className="text-xs text-muted-foreground">12:42</span>
                        </div>
                        <p className="text-sm text-primary truncate">Need the monthly report by EOD</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2 rounded-lg hover:bg-muted/50 mb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
                        <AvatarFallback>AM</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium truncate">Ama Mensah</h4>
                          <span className="text-xs text-muted-foreground">10:31</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">Updated the supply chain docs</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2 rounded-lg hover:bg-muted/50 mb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36" />
                        <AvatarFallback>JO</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium truncate">John Owusu</h4>
                          <span className="text-xs text-muted-foreground">09:15</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">Quality check completed for batch #CR-392</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2 rounded-lg hover:bg-muted/50 mb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1607746882042-944635dfe10e" />
                        <AvatarFallback>KD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium truncate">Kwame Darko</h4>
                          <span className="text-xs text-muted-foreground">Yesterday</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">Farmer meeting scheduled for next week</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2 rounded-lg hover:bg-muted/50 mb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956" />
                        <AvatarFallback>EA</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium truncate">Efua Amoah</h4>
                          <span className="text-xs text-muted-foreground">Yesterday</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">Let's review the marketing campaign</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Chat Area */}
            <Card className="lg:col-span-2 overflow-hidden flex flex-col">
              <CardHeader className="px-6 py-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                      <AvatarFallback>KA</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Kofi Annan</CardTitle>
                      <CardDescription>Finance Director • Online</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="ghost">
                      <Phone className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Video className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Search className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <div className="flex-1 overflow-auto p-6 space-y-4">
                <div className="flex items-end gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                    <AvatarFallback>KA</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg bg-muted p-3 max-w-[80%]">
                    <p className="text-sm">Hi Dr. Michael, do you have the monthly performance report ready? The board meeting is tomorrow and we need to finalize the presentation.</p>
                    <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                  </div>
                </div>
                
                <div className="flex items-end justify-end gap-3">
                  <div className="rounded-lg bg-primary text-primary-foreground p-3 max-w-[80%]">
                    <p className="text-sm">Good morning Kofi. I'm just finishing it up now. There are some impressive numbers from the Western Region this month.</p>
                    <p className="text-xs text-primary-foreground/70 mt-1">10:35 AM</p>
                  </div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61" />
                    <AvatarFallback>ME</AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="flex items-end gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                    <AvatarFallback>KA</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg bg-muted p-3 max-w-[80%]">
                    <p className="text-sm">That's great to hear! Can you send it over by 2pm? I'd like to review it before distributing to the board members.</p>
                    <p className="text-xs text-muted-foreground mt-1">10:38 AM</p>
                  </div>
                </div>
                
                <div className="flex items-end justify-end gap-3">
                  <div className="rounded-lg bg-primary text-primary-foreground p-3 max-w-[80%]">
                    <p className="text-sm">Absolutely, I'll have it in your inbox by 2pm. Would you like me to include the sustainability metrics as well?</p>
                    <p className="text-xs text-primary-foreground/70 mt-1">10:42 AM</p>
                  </div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61" />
                    <AvatarFallback>ME</AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="flex items-end gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                    <AvatarFallback>KA</AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg bg-muted p-3 max-w-[80%]">
                    <p className="text-sm">Yes, please include those. The board has been particularly interested in our sustainability initiatives lately.</p>
                    <p className="text-xs text-muted-foreground mt-1">10:45 AM</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t">
                <div className="flex items-end gap-2">
                  <Button size="icon" variant="ghost">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Textarea 
                    placeholder="Type your message..." 
                    className="resize-none min-h-10"
                    rows={1}
                  />
                  <Button size="icon">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="announcements">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Company Announcements</CardTitle>
                  <CardDescription>Important updates and communications</CardDescription>
                </div>
                <Button>New Announcement</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61" />
                        <AvatarFallback>MK</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Q3 Performance Review</h3>
                        <p className="text-sm text-muted-foreground">By Dr. Michael Kwaku • July 15, 2023</p>
                      </div>
                    </div>
                    <Badge>Company-wide</Badge>
                  </div>
                  <p className="text-sm mb-4">Dear team, I'm pleased to announce that we've exceeded our Q3 targets by 15%. This is a testament to everyone's hard work and dedication. Special recognition goes to the Sales team for their exceptional performance in the Western Region, and to the Operations team for reducing waste by 12%.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>142 views</span>
                      <span>•</span>
                      <span>38 comments</span>
                    </div>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
                        <AvatarFallback>GM</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">New Production Facility Opening</h3>
                        <p className="text-sm text-muted-foreground">By Grace Mensah • July 10, 2023</p>
                      </div>
                    </div>
                    <Badge>Company-wide</Badge>
                  </div>
                  <p className="text-sm mb-4">We're excited to announce the opening of our new processing facility in the Volta Region. This expansion will increase our production capacity by 40% and create over 50 new jobs. The facility will be operational from August 1st, and will incorporate state-of-the-art sustainable technologies.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>156 views</span>
                      <span>•</span>
                      <span>42 comments</span>
                    </div>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" />
                        <AvatarFallback>SO</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">Financial Year 2023-2024 Budget Approval</h3>
                        <p className="text-sm text-muted-foreground">By Samuel Osei • July 5, 2023</p>
                      </div>
                    </div>
                    <Badge>Department Heads</Badge>
                  </div>
                  <p className="text-sm mb-4">The board has approved the budget for the 2023-2024 financial year. Department heads can now proceed with their planned initiatives. Please schedule a meeting with the Finance team to discuss the allocation and implementation timeline for your respective departments.</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>68 views</span>
                      <span>•</span>
                      <span>15 comments</span>
                    </div>
                    <Button variant="outline" size="sm">Read More</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="outline">View All Announcements</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="meetings">
          <Card>
            <CardHeader>
              <CardTitle>Meetings & Calls</CardTitle>
              <CardDescription>Schedule and manage meetings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Meeting scheduling and management tools are under development.
                <br />
                Check back soon for comprehensive meeting capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="teams">
          <Card>
            <CardHeader>
              <CardTitle>Teams & Collaboration</CardTitle>
              <CardDescription>Manage team workspaces and collaboration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center p-8 text-muted-foreground">
                Team management and collaboration tools are under development.
                <br />
                Check back soon for comprehensive team management capabilities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Communications;
