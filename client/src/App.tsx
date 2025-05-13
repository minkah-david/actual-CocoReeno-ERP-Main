import { Switch, Route } from "wouter";
import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import MainLayout from "@/layouts/MainLayout";
import Dashboard from "@/pages/Dashboard";
import DepartmentsPage from "@/pages/DepartmentsPage";
import BusinessIntelligence from "@/pages/BusinessIntelligence";
import Strategies from "@/pages/Strategies";
import ArtificialIntelligence from "@/pages/ArtificialIntelligence";
import AutomationsWorkflows from "@/pages/AutomationsWorkflows";
import Security from "@/pages/Security";
import Diagnostics from "@/pages/Diagnostics";
import Communications from "@/pages/Communications";
import DepartmentDetail from "@/pages/department/DepartmentDetail";
import SubDepartmentDetail from "@/pages/department/SubDepartmentDetail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/departments" component={DepartmentsPage} />
      <Route path="/departments/:id" component={DepartmentDetail} />
      <Route path="/departments/:id/:subId" component={SubDepartmentDetail} />
      <Route path="/business-intelligence" component={BusinessIntelligence} />
      <Route path="/strategies" component={Strategies} />
      <Route path="/ai" component={ArtificialIntelligence} />
      <Route path="/automations" component={AutomationsWorkflows} />
      <Route path="/security" component={Security} />
      <Route path="/diagnostics" component={Diagnostics} />
      <Route path="/communications" component={Communications} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <MainLayout>
          <Router />
        </MainLayout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
