// Navigation Menu Items
export const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: "ri-dashboard-line"
  },
  {
    title: "Departments",
    path: "/departments",
    icon: "ri-building-line",
    submenu: [
      {
        title: "Chief Executive Officer",
        path: "/departments/ceo",
        icon: "ri-user-star-line",
        submenu: [
          {
            title: "Executive Reports",
            path: "/departments/ceo/reports",
            icon: "ri-file-list-line"
          }
        ]
      },
      {
        title: "Finance & Accountability",
        path: "/departments/finance",
        icon: "ri-money-dollar-circle-line",
        submenu: [
          {
            title: "Financial Planning",
            path: "/departments/finance/planning",
            icon: "ri-line-chart-line"
          },
          {
            title: "Accounting & Bookkeeping",
            path: "/departments/finance/accounting",
            icon: "ri-book-open-line"
          },
          {
            title: "Budgeting & Cost Control",
            path: "/departments/finance/budgeting",
            icon: "ri-calculator-line"
          },
          {
            title: "Investor Relations",
            path: "/departments/finance/investors",
            icon: "ri-stock-line"
          }
        ]
      },
      {
        title: "Operations & Supply Chain",
        path: "/departments/operations",
        icon: "ri-loader-4-line",
        submenu: [
          {
            title: "Harvesting & Procurement",
            path: "/departments/operations/harvesting",
            icon: "ri-plant-line"
          },
          {
            title: "Logistics & Fleet Management",
            path: "/departments/operations/logistics",
            icon: "ri-truck-line"
          },
          {
            title: "Inventory & Warehousing",
            path: "/departments/operations/inventory",
            icon: "ri-store-line"
          },
          {
            title: "Quality Assurance & Compliance",
            path: "/departments/operations/quality",
            icon: "ri-checkbox-multiple-line"
          }
        ]
      },
      {
        title: "Sales & Distribution",
        path: "/departments/sales",
        icon: "ri-store-2-line",
        submenu: [
          {
            title: "Direct Sales (B2C)",
            path: "/departments/sales/direct",
            icon: "ri-shopping-cart-line"
          },
          {
            title: "Mobile & Field Sales",
            path: "/departments/sales/mobile",
            icon: "ri-bike-line"
          },
          {
            title: "E-Commerce Sales",
            path: "/departments/sales/ecommerce",
            icon: "ri-shopping-bag-line"
          },
          {
            title: "Customer Success (CRM)",
            path: "/departments/sales/crm",
            icon: "ri-customer-service-line"
          }
        ]
      },
      {
        title: "Marketing & Branding",
        path: "/departments/marketing",
        icon: "ri-megaphone-line"
      }
    ]
  },
  {
    title: "Business Intelligence",
    path: "/business-intelligence",
    icon: "ri-line-chart-line"
  },
  {
    title: "Strategies",
    path: "/strategies",
    icon: "ri-strategy-line"
  },
  {
    title: "AI",
    path: "/ai",
    icon: "ri-robot-line"
  },
  {
    title: "Automations & Workflows",
    path: "/automations",
    icon: "ri-settings-line"
  },
  {
    title: "Security",
    path: "/security",
    icon: "ri-shield-check-line"
  },
  {
    title: "Diagnostics",
    path: "/diagnostics",
    icon: "ri-health-book-line"
  },
  {
    title: "Communications",
    path: "/communications",
    icon: "ri-chat-3-line"
  }
];

// Sample Dashboard Stats
export const dashboardStats = [
  {
    title: "Revenue (Monthly)",
    value: "GH₵ 1.43M",
    change: "+12.8%",
    target: "75% of monthly target",
    progress: 75,
    color: "brand-green", 
    icon: "ri-money-dollar-circle-line"
  },
  {
    title: "Production (Tons)",
    value: "846",
    change: "+8.3%",
    target: "68% of monthly target",
    progress: 68,
    color: "blue-500",
    icon: "ri-leaf-line"
  },
  {
    title: "Registered Farmers",
    value: "2,419",
    change: "+5.2%",
    target: "82% of quarterly target",
    progress: 82,
    color: "amber-500",
    icon: "ri-user-line"
  },
  {
    title: "Processing Efficiency",
    value: "93.7%",
    change: "+2.1%",
    target: "Target: 90%",
    progress: 94,
    color: "purple-500",
    icon: "ri-settings-line"
  }
];

// Sample Inventory Status
export const inventoryItems = [
  {
    name: "Raw Coconuts",
    quantity: "12,500 units",
    level: 75
  },
  {
    name: "Coconut Water",
    quantity: "8,750 liters",
    level: 60
  },
  {
    name: "Coconut Oil",
    quantity: "3,200 liters",
    level: 35
  },
  {
    name: "Coconut Flour",
    quantity: "1,850 kg",
    level: 20
  },
  {
    name: "Coconut Shell Products",
    quantity: "5,300 units",
    level: 85
  }
];

// Sample Recent Activities
export const recentActivities = [
  {
    title: "Shipment #CR-9385 delivered to Tema distribution center",
    time: "Today, 10:42 AM",
    icon: "ri-truck-line",
    color: "green"
  },
  {
    title: "15 new farmers registered from Volta Region",
    time: "Today, 9:15 AM",
    icon: "ri-user-add-line",
    color: "blue"
  },
  {
    title: "Monthly quality report available for review",
    time: "Yesterday, 4:30 PM",
    icon: "ri-file-list-3-line",
    color: "amber"
  },
  {
    title: "Scheduled maintenance at Accra processing facility",
    time: "Yesterday, 2:15 PM",
    icon: "ri-calendar-check-line",
    color: "purple"
  },
  {
    title: "Low inventory alert: Coconut Flour",
    time: "Yesterday, 11:30 AM",
    icon: "ri-alert-line",
    color: "red"
  }
];

// Sample Farming Communities
export const farmingCommunities = [
  {
    name: "Keta, Volta Region",
    production: "4,320 tons",
    farmers: "872 farmers",
    change: "+12.4%",
    image: "https://pixabay.com/get/gba56287c914d064b268e28ff0dbf62b3cad35bb527a9176d53395408367af1d370dcd48124c5deb9a14b81d79913bc390985037bb337dcc28f97efe3a34cde29_1280.jpg"
  },
  {
    name: "Axim, Western Region",
    production: "3,890 tons",
    farmers: "645 farmers",
    change: "+8.7%",
    image: "https://pixabay.com/get/g82c17a0ec411b5a945e2064cf8ffa013d98b3aa344659ce9df4e4f48d6d73c155206ab63d90ed7545946800705d884fe8c251368b2ef4715f72615100ec5cbe4_1280.jpg"
  },
  {
    name: "Elmina, Central Region",
    production: "2,760 tons",
    farmers: "532 farmers",
    change: "+5.2%",
    image: "https://pixabay.com/get/g64b2c0a670a71d7e1e34c59be48cd8c2f2799d0bb11e7fc74b0d57b3282d0efa68d1067cf26ce87fdfdebfd9be8cab245b7a52ef9886fdbdf91653efff8a4be6_1280.jpg"
  }
];

// Sample Sustainability Metrics
export const sustainabilityMetrics = [
  {
    title: "Water Conservation",
    value: "4.2M",
    unit: "Liters saved",
    change: "12% increase from last year",
    icon: "ri-water-flash-line",
    color: "blue-500"
  },
  {
    title: "Waste Reduction",
    value: "860",
    unit: "Tons recycled",
    change: "8% increase from last year",
    icon: "ri-recycle-line",
    color: "green-500"
  },
  {
    title: "Carbon Footprint",
    value: "-15%",
    unit: "CO2 reduction",
    change: "5% better than target",
    icon: "ri-cloud-line",
    color: "slate-500"
  }
];

// Sample Sustainability Initiatives
export const sustainabilityInitiatives = [
  "5 community water conservation projects",
  "3 solar energy installations at processing facilities",
  "2,500 farmers trained in sustainable practices",
  "15 hectares of new coconut farms using organic methods"
];

// Sample Weather Data
export const weatherData = {
  location: "Keta, Volta Region",
  temperature: "28°C",
  condition: "Partly Cloudy",
  humidity: "78%",
  wind: "12 km/h",
  rainfall: "32mm",
  soilMoisture: "Optimal",
  advisory: "Expected rain in Western Region farms next 48 hours. Consider adjusting harvest schedule."
};

// Sample Revenue Data for Charts
export const revenueData = [
  { month: "Jan", revenue: 800000 },
  { month: "Feb", revenue: 1200000 },
  { month: "Mar", revenue: 900000 },
  { month: "Apr", revenue: 1400000 },
  { month: "May", revenue: 1300000 },
  { month: "Jun", revenue: 1600000 }
];

// Department List
export const departmentList = [
  {
    id: 1,
    name: "Finance & Accountability",
    description: "Financial planning, accounting, budgeting, and investor relations.",
    memberCount: 12,
    icon: "ri-money-dollar-circle-line",
    subDepartments: [
      "Financial Planning & Analysis",
      "Accounting & Bookkeeping",
      "Budgeting & Cost Control",
      "Investor Relations"
    ]
  },
  {
    id: 2,
    name: "Operations & Supply Chain",
    description: "Harvesting, logistics, inventory management, and quality assurance.",
    memberCount: 28,
    icon: "ri-loader-4-line",
    subDepartments: [
      "Harvesting & Procurement",
      "Logistics & Fleet Management",
      "Inventory & Warehousing",
      "Quality Assurance & Compliance"
    ]
  },
  {
    id: 3,
    name: "Sales & Distribution",
    description: "Direct sales, mobile sales, e-commerce, and customer success.",
    memberCount: 34,
    icon: "ri-store-2-line",
    subDepartments: [
      "Direct Sales (B2C)",
      "Mobile & Field Sales",
      "E-Commerce Sales",
      "Customer Success (CRM)"
    ]
  },
  {
    id: 4,
    name: "Marketing & Branding",
    description: "Brand strategy, advertising, digital marketing, and public relations.",
    memberCount: 18,
    icon: "ri-megaphone-line",
    subDepartments: [
      "Brand Strategy & Market Research",
      "Campaigns & Advertising",
      "Digital Marketing",
      "Public Relations & CSR"
    ]
  },
  {
    id: 5,
    name: "Human Resources",
    description: "Recruitment, training, compensation, and workplace management.",
    memberCount: 15,
    icon: "ri-user-settings-line",
    subDepartments: [
      "Recruitment & Onboarding",
      "Employee Training & Development",
      "Compensation & Benefits",
      "Performance Management",
      "Workplace Culture & Compliance"
    ]
  }
];

// Organogram Structure
export const organogramStructure = {
  ceo: {
    id: "ceo",
    title: "Chief Executive Officer",
    name: "Dr. Michael Kwaku",
    reports: ["coo", "cfo", "cto"]
  },
  coo: {
    id: "coo",
    title: "Chief Operating Officer",
    name: "Grace Mensah",
    reports: []
  },
  cfo: {
    id: "cfo",
    title: "Chief Financial Officer",
    name: "Samuel Osei",
    reports: []
  },
  cto: {
    id: "cto",
    title: "Chief Technology Officer",
    name: "Akua Darko",
    reports: []
  },
  departments: [
    {
      id: "finance",
      title: "Finance & Accountability",
      subDepartments: 4
    },
    {
      id: "operations",
      title: "Operations & Supply",
      subDepartments: 4
    },
    {
      id: "sales",
      title: "Sales & Distribution",
      subDepartments: 4
    },
    {
      id: "marketing",
      title: "Marketing & Branding",
      subDepartments: 4
    },
    {
      id: "hr",
      title: "Human Resources",
      subDepartments: 5
    },
    {
      id: "rd",
      title: "R&D",
      subDepartments: 3
    }
  ]
};
