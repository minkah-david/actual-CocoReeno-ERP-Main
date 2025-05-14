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
        title: "Finance",
        path: "/departments/finance",
        icon: "ri-money-dollar-circle-line",
        submenu: [
          {
            title: "Financial Planning & Analysis",
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
            title: "Investor Relations & Capital Strategy",
            path: "/departments/finance/investors",
            icon: "ri-stock-line"
          }
        ]
      },
      {
        title: "Operations",
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
        title: "Sales",
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
            title: "Sales Support & Customer Success",
            path: "/departments/sales/crm",
            icon: "ri-customer-service-line"
          }
        ]
      },
      {
        title: "Marketing",
        path: "/departments/marketing",
        icon: "ri-megaphone-line",
        submenu: [
          {
            title: "Brand Strategy & Market Research",
            path: "/departments/marketing/brand",
            icon: "ri-mark-pen-line"
          },
          {
            title: "Campaigns & Advertising",
            path: "/departments/marketing/campaigns",
            icon: "ri-advertisement-line"
          },
          {
            title: "Digital Marketing",
            path: "/departments/marketing/digital",
            icon: "ri-global-line",
            submenu: [
              {
                title: "Social Media",
                path: "/departments/marketing/digital/social",
                icon: "ri-chat-smile-line"
              },
              {
                title: "Paid Ads",
                path: "/departments/marketing/digital/ads",
                icon: "ri-money-cny-box-line"
              },
              {
                title: "AI Content Creation",
                path: "/departments/marketing/digital/ai-content",
                icon: "ri-ai-generate"
              }
            ]
          },
          {
            title: "Public Relations & CSR",
            path: "/departments/marketing/pr",
            icon: "ri-award-line"
          }
        ]
      },
      {
        title: "HR",
        path: "/departments/hr",
        icon: "ri-user-settings-line",
        submenu: [
          {
            title: "Recruitment & Onboarding",
            path: "/departments/hr/recruitment",
            icon: "ri-user-add-line"
          },
          {
            title: "Employee Training & Development",
            path: "/departments/hr/training",
            icon: "ri-graduation-cap-line"
          },
          {
            title: "Compensation & Benefits",
            path: "/departments/hr/compensation",
            icon: "ri-wallet-line"
          },
          {
            title: "Performance Management",
            path: "/departments/hr/performance",
            icon: "ri-bar-chart-line"
          },
          {
            title: "Workplace Culture & Compliance",
            path: "/departments/hr/culture",
            icon: "ri-group-line"
          }
        ]
      },
      {
        title: "R&D",
        path: "/departments/rd",
        icon: "ri-flask-line",
        submenu: [
          {
            title: "Edibles (Flesh & Water)",
            path: "/departments/rd/edibles",
            icon: "ri-restaurant-line"
          },
          {
            title: "Health & Wellness",
            path: "/departments/rd/health",
            icon: "ri-heart-pulse-line"
          },
          {
            title: "Inedibles (Husk & Shell)",
            path: "/departments/rd/inedibles",
            icon: "ri-recycle-line"
          }
        ]
      },
      {
        title: "RSS",
        path: "/departments/rss",
        icon: "ri-seed-line",
        submenu: [
          {
            title: "Rural Farmer Empowerment",
            path: "/departments/rss/empowerment",
            icon: "ri-hand-heart-line"
          },
          {
            title: "Climate-Smart Agriculture",
            path: "/departments/rss/climate",
            icon: "ri-sun-cloudy-line"
          },
          {
            title: "Community Livelihood Projects",
            path: "/departments/rss/community",
            icon: "ri-community-line"
          },
          {
            title: "Carbon Footprint Reduction",
            path: "/departments/rss/carbon",
            icon: "ri-leaf-line"
          },
          {
            title: "Gender, Youth & Social Inclusion",
            path: "/departments/rss/inclusion",
            icon: "ri-group-line"
          }
        ]
      },
      {
        title: "Legal",
        path: "/departments/legal",
        icon: "ri-scales-line",
        submenu: [
          {
            title: "Contract Drafting & Management",
            path: "/departments/legal/contracts",
            icon: "ri-draft-line"
          },
          {
            title: "Intellectual Property Protection",
            path: "/departments/legal/ip",
            icon: "ri-copyright-line"
          },
          {
            title: "Regulatory Licensing & Permits",
            path: "/departments/legal/licensing",
            icon: "ri-safe-line"
          },
          {
            title: "Legal Risk & Dispute Management",
            path: "/departments/legal/disputes",
            icon: "ri-alarm-warning-line"
          }
        ]
      },
      {
        title: "IT",
        path: "/departments/it",
        icon: "ri-computer-line",
        submenu: [
          {
            title: "Tech Support",
            path: "/departments/it/support",
            icon: "ri-customer-service-line"
          },
          {
            title: "Software Development",
            path: "/departments/it/software",
            icon: "ri-code-s-slash-line"
          },
          {
            title: "System Upgrades & Automation",
            path: "/departments/it/systems",
            icon: "ri-settings-line"
          },
          {
            title: "Cybersecurity & Infrastructure",
            path: "/departments/it/security",
            icon: "ri-shield-keyhole-line"
          },
          {
            title: "AI Deployment",
            path: "/departments/it/ai",
            icon: "ri-robot-line"
          }
        ]
      },
      {
        title: "Audit",
        path: "/departments/audit",
        icon: "ri-file-search-line",
        submenu: [
          {
            title: "Financial Audit Reviews",
            path: "/departments/audit/financial",
            icon: "ri-bank-line"
          },
          {
            title: "Operational Process Audits",
            path: "/departments/audit/operational",
            icon: "ri-flow-chart"
          },
          {
            title: "Performance Metrics & Goal Alignment",
            path: "/departments/audit/performance",
            icon: "ri-bar-chart-grouped-line"
          },
          {
            title: "Policy Compliance & Internal Controls",
            path: "/departments/audit/compliance",
            icon: "ri-checkbox-multiple-line"
          }
        ]
      },
      {
        title: "Security",
        path: "/departments/physical-security",
        icon: "ri-shield-line",
        submenu: [
          {
            title: "Physical Site Security",
            path: "/departments/physical-security/site",
            icon: "ri-building-line"
          },
          {
            title: "Asset Monitoring & Infrastructure",
            path: "/departments/physical-security/assets",
            icon: "ri-radar-line"
          },
          {
            title: "Inventory Protection & Surveillance",
            path: "/departments/physical-security/inventory",
            icon: "ri-cctv-line"
          },
          {
            title: "Emergency Response & Risk Mitigation",
            path: "/departments/physical-security/emergency",
            icon: "ri-alarm-warning-line"
          }
        ]
      }
    ]
  },
  {
    title: "BI",
    path: "/business-intelligence",
    icon: "ri-line-chart-line"
  },
  {
    title: "Architectures",
    path: "/architectures",
    icon: "ri-layout-masonry-line"
  },
  {
    title: "Strategies",
    path: "/strategies",
    icon: "ri-strategy-line"
  },
  {
    title: "AI & Automations",
    path: "/ai",
    icon: "ri-robot-line",
    submenu: [
      {
        title: "AI",
        path: "/ai/intelligence",
        icon: "ri-brain-line"
      },
      {
        title: "Automations & Workflows",
        path: "/ai/automations",
        icon: "ri-settings-5-line"
      }
    ]
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
    title: "Cloud Manager",
    path: "/cloud-manager",
    icon: "ri-cloud-line"
  },
  {
    title: "Communications",
    path: "/communications",
    icon: "ri-chat-3-line",
    submenu: [
      {
        title: "Communications",
        path: "/communications",
        icon: "ri-message-3-line"
      },
      {
        title: "Projects Management",
        path: "/communications/projects",
        icon: "ri-task-line"
      }
    ]
  },
  {
    title: "User Management",
    path: "/user-management",
    icon: "ri-user-settings-line"
  },
  {
    title: "System Settings",
    path: "/system-settings",
    icon: "ri-settings-line"
  },
  {
    title: "Help & Support",
    path: "/support",
    icon: "ri-question-line"
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

// Sample Revenue and Expenditure Data for Charts
export const revenueData = [
  { month: "Jan", revenue: 800000, expenditure: 640000, profit: 160000 },
  { month: "Feb", revenue: 1200000, expenditure: 820000, profit: 380000 },
  { month: "Mar", revenue: 900000, expenditure: 750000, profit: 150000 },
  { month: "Apr", revenue: 1400000, expenditure: 950000, profit: 450000 },
  { month: "May", revenue: 1300000, expenditure: 880000, profit: 420000 },
  { month: "Jun", revenue: 1600000, expenditure: 1050000, profit: 550000 }
];

// Sample Salespersons Data
export const salespersonsData = [
  { 
    id: 1, 
    name: "Kofi Mensah", 
    location: { lat: 5.6037, lng: 0.1870 }, // Tema
    status: "active",
    performance: 92,
    sales: "GH₵ 42,500",
    clients: 18,
    territory: "Greater Accra - East"
  },
  { 
    id: 2, 
    name: "Ama Owusu", 
    location: { lat: 5.6142, lng: -0.2073 }, // Accra
    status: "active",
    performance: 88,
    sales: "GH₵ 38,900",
    clients: 15,
    territory: "Greater Accra - Central" 
  },
  { 
    id: 3, 
    name: "Kwame Asante", 
    location: { lat: 6.6885, lng: -1.6244 }, // Kumasi
    status: "idle",
    performance: 78,
    sales: "GH₵ 28,700",
    clients: 12,
    territory: "Ashanti Region" 
  },
  { 
    id: 4, 
    name: "Efua Dadzie", 
    location: { lat: 5.9032, lng: -0.9520 }, // Koforidua
    status: "offline",
    performance: 82,
    sales: "GH₵ 32,100",
    clients: 14,
    territory: "Eastern Region" 
  },
  { 
    id: 5, 
    name: "Kwesi Adams", 
    location: { lat: 5.1053, lng: -1.2466 }, // Cape Coast
    status: "active",
    performance: 95,
    sales: "GH₵ 45,800",
    clients: 20,
    territory: "Central Region" 
  }
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
      "Investor Relations & Capital Strategy"
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
      "Sales Support & Customer Success"
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
    name: "Human Resource & Administration",
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
  },
  {
    id: 6,
    name: "Research & Development",
    description: "Product development, innovation, and research initiatives.",
    memberCount: 9,
    icon: "ri-flask-line",
    subDepartments: [
      "Edibles (Flesh & Water)",
      "Health & Wellness",
      "Inedibles (Husk & Shell)"
    ]
  },
  {
    id: 7,
    name: "Rural Development, Sustainability & Social Equity",
    description: "Sustainability initiatives, rural development, and social programs.",
    memberCount: 11,
    icon: "ri-seed-line",
    subDepartments: [
      "Rural Farmer Empowerment Programmes",
      "Climate-Smart Agriculture Integration",
      "Community Livelihood Projects",
      "Carbon Footprint Reduction Initiatives",
      "Gender, Youth & Social Inclusion"
    ]
  },
  {
    id: 8,
    name: "Legal & Regulatory Affairs",
    description: "Legal compliance, contracts, and regulatory management.",
    memberCount: 7,
    icon: "ri-scales-line",
    subDepartments: [
      "Contract Drafting & Management",
      "Intellectual Property Protection",
      "Regulatory Licensing & Permits",
      "Legal Risk & Dispute Management"
    ]
  },
  {
    id: 9,
    name: "Information Technology",
    description: "IT systems, software development, and technical support.",
    memberCount: 14,
    icon: "ri-computer-line",
    subDepartments: [
      "Tech Support",
      "Software Development",
      "System Upgrades & Automation",
      "Cybersecurity & Infrastructure Security",
      "AI Deployment"
    ]
  },
  {
    id: 10,
    name: "Audit & Compliance",
    description: "Auditing, process review, and compliance management.",
    memberCount: 5,
    icon: "ri-file-search-line",
    subDepartments: [
      "Financial Audit Reviews",
      "Operational Process Audits",
      "Performance Metrics & Goal Alignment",
      "Policy Compliance & Internal Controls"
    ]
  },
  {
    id: 11,
    name: "Security & Asset Management",
    description: "Physical security, asset protection, and emergency response.",
    memberCount: 8,
    icon: "ri-shield-line",
    subDepartments: [
      "Physical Site Security",
      "Asset Monitoring & Infrastructure Control",
      "Inventory Protection & Surveillance",
      "Emergency Response & Risk Mitigation"
    ]
  }
];

// Organogram Structure
export const organogramStructure = {
  ceo: {
    id: "ceo",
    title: "Chief Executive Officer",
    name: "Dr. Michael Kwaku",
    reports: ["coo", "cfo", "cto", "cmo", "chro"]
  },
  coo: {
    id: "coo",
    title: "Chief Operating Officer",
    name: "Grace Mensah",
    reports: ["operations", "sales", "security"]
  },
  cfo: {
    id: "cfo",
    title: "Chief Financial Officer",
    name: "Samuel Osei",
    reports: ["finance", "audit"]
  },
  cto: {
    id: "cto",
    title: "Chief Technology Officer",
    name: "Akua Darko",
    reports: ["it", "ai"]
  },
  cmo: {
    id: "cmo",
    title: "Chief Marketing Officer",
    name: "Kwame Darko",
    reports: ["marketing"]
  },
  chro: {
    id: "chro",
    title: "Chief Human Resources Officer",
    name: "Efua Mensah",
    reports: ["hr"]
  },
  departments: [
    {
      id: "finance",
      title: "Finance & Accountability",
      subDepartments: 4
    },
    {
      id: "operations",
      title: "Operations & Supply Chain",
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
      title: "Human Resource & Administration",
      subDepartments: 5
    },
    {
      id: "rd",
      title: "Research & Development",
      subDepartments: 3
    },
    {
      id: "rss",
      title: "Rural Development, Sustainability & Social Equity",
      subDepartments: 5
    },
    {
      id: "legal",
      title: "Legal & Regulatory Affairs",
      subDepartments: 4
    },
    {
      id: "it",
      title: "Information Technology",
      subDepartments: 5
    },
    {
      id: "audit",
      title: "Audit & Compliance",
      subDepartments: 4
    },
    {
      id: "security",
      title: "Security & Asset Management",
      subDepartments: 4
    }
  ]
};
