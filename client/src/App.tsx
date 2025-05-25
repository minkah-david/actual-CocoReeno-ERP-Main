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

// Import all department pages
import FinancePage from "@/pages/department/FinancePage";
import OperationsPage from "@/pages/department/OperationsPage";
import SalesPage from "@/pages/department/SalesPage";
import MarketingPage from "@/pages/department/MarketingPage";
import HRPage from "@/pages/department/HRPage";
import RDPage from "@/pages/department/RDPage";
import RSSPage from "@/pages/department/RSSPage";
import LegalPage from "@/pages/department/LegalPage";
import ITPage from "@/pages/department/ITPage";
import AuditPage from "@/pages/department/AuditPage";
import SecurityPage from "@/pages/department/SecurityPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/departments" component={DepartmentsPage} />
      
      {/* Specific Department Pages */}
      <Route path="/departments/finance" component={FinancePage} />
      <Route path="/departments/operations" component={OperationsPage} />
      <Route path="/departments/sales" component={SalesPage} />
      <Route path="/departments/marketing" component={MarketingPage} />
      <Route path="/departments/hr" component={HRPage} />
      <Route path="/departments/rd" component={RDPage} />
      <Route path="/departments/rss" component={RSSPage} />
      <Route path="/departments/legal" component={LegalPage} />
      <Route path="/departments/it" component={ITPage} />
      <Route path="/departments/audit" component={AuditPage} />
      <Route path="/departments/physical-security" component={SecurityPage} />
      
      {/* Generic Department Routes */}
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
