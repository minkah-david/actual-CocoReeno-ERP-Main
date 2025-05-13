import {
  users, departments, stats, activities, farmingCommunities, inventory,
  weather, sustainability, sustainabilityInitiatives,
  type User, type InsertUser, type Department, type InsertDepartment,
  type Stat, type InsertStat, type Activity, type InsertActivity,
  type FarmingCommunity, type InsertFarmingCommunity, type Inventory, type InsertInventory,
  type Weather, type InsertWeather, type Sustainability, type InsertSustainability,
  type SustainabilityInitiative, type InsertSustainabilityInitiative
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Department methods
  getDepartment(id: number): Promise<Department | undefined>;
  getDepartments(): Promise<Department[]>;
  getSubDepartments(parentId: number): Promise<Department[]>;
  createDepartment(department: InsertDepartment): Promise<Department>;
  updateDepartment(id: number, department: Partial<Department>): Promise<Department | undefined>;
  
  // Stats methods
  getStats(type: string): Promise<Stat[]>;
  getStat(id: number): Promise<Stat | undefined>;
  createStat(stat: InsertStat): Promise<Stat>;
  
  // Activity methods
  getActivities(): Promise<Activity[]>;
  createActivity(activity: InsertActivity): Promise<Activity>;
  
  // Farming Communities methods
  getFarmingCommunities(): Promise<FarmingCommunity[]>;
  createFarmingCommunity(community: InsertFarmingCommunity): Promise<FarmingCommunity>;
  
  // Inventory methods
  getInventory(): Promise<Inventory[]>;
  createInventoryItem(item: InsertInventory): Promise<Inventory>;
  
  // Weather methods
  getWeather(location: string): Promise<Weather | undefined>;
  createWeather(weatherData: InsertWeather): Promise<Weather>;
  
  // Sustainability methods
  getSustainabilityMetrics(): Promise<Sustainability[]>;
  createSustainabilityMetric(metric: InsertSustainability): Promise<Sustainability>;
  
  // Sustainability Initiatives methods
  getSustainabilityInitiatives(): Promise<SustainabilityInitiative[]>;
  createSustainabilityInitiative(initiative: InsertSustainabilityInitiative): Promise<SustainabilityInitiative>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private departments: Map<number, Department>;
  private stats: Map<number, Stat>;
  private activities: Map<number, Activity>;
  private farmingCommunities: Map<number, FarmingCommunity>;
  private inventoryItems: Map<number, Inventory>;
  private weatherData: Map<number, Weather>;
  private sustainabilityMetrics: Map<number, Sustainability>;
  private sustainabilityInitiatives: Map<number, SustainabilityInitiative>;
  
  currentUserId: number;
  currentDepartmentId: number;
  currentStatId: number;
  currentActivityId: number;
  currentFarmingCommunityId: number;
  currentInventoryId: number;
  currentWeatherId: number;
  currentSustainabilityId: number;
  currentSustainabilityInitiativeId: number;

  constructor() {
    this.users = new Map();
    this.departments = new Map();
    this.stats = new Map();
    this.activities = new Map();
    this.farmingCommunities = new Map();
    this.inventoryItems = new Map();
    this.weatherData = new Map();
    this.sustainabilityMetrics = new Map();
    this.sustainabilityInitiatives = new Map();
    
    this.currentUserId = 1;
    this.currentDepartmentId = 1;
    this.currentStatId = 1;
    this.currentActivityId = 1;
    this.currentFarmingCommunityId = 1;
    this.currentInventoryId = 1;
    this.currentWeatherId = 1;
    this.currentSustainabilityId = 1;
    this.currentSustainabilityInitiativeId = 1;
    
    // Seed initial data
    this.seedData();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Department methods
  async getDepartment(id: number): Promise<Department | undefined> {
    return this.departments.get(id);
  }
  
  async getDepartments(): Promise<Department[]> {
    return Array.from(this.departments.values());
  }
  
  async getSubDepartments(parentId: number): Promise<Department[]> {
    return Array.from(this.departments.values()).filter(
      (dept) => dept.parentId === parentId
    );
  }
  
  async createDepartment(department: InsertDepartment): Promise<Department> {
    const id = this.currentDepartmentId++;
    const newDepartment: Department = { ...department, id };
    this.departments.set(id, newDepartment);
    return newDepartment;
  }
  
  async updateDepartment(id: number, departmentUpdate: Partial<Department>): Promise<Department | undefined> {
    const department = await this.getDepartment(id);
    
    if (!department) {
      return undefined;
    }
    
    const updatedDepartment = { ...department, ...departmentUpdate };
    this.departments.set(id, updatedDepartment);
    
    return updatedDepartment;
  }
  
  // Stats methods
  async getStats(type: string): Promise<Stat[]> {
    return Array.from(this.stats.values()).filter(
      (stat) => stat.type === type
    );
  }
  
  async getStat(id: number): Promise<Stat | undefined> {
    return this.stats.get(id);
  }
  
  async createStat(stat: InsertStat): Promise<Stat> {
    const id = this.currentStatId++;
    const newStat: Stat = { ...stat, id };
    this.stats.set(id, newStat);
    return newStat;
  }
  
  // Activity methods
  async getActivities(): Promise<Activity[]> {
    return Array.from(this.activities.values());
  }
  
  async createActivity(activity: InsertActivity): Promise<Activity> {
    const id = this.currentActivityId++;
    const newActivity: Activity = { ...activity, id };
    this.activities.set(id, newActivity);
    return newActivity;
  }
  
  // Farming Communities methods
  async getFarmingCommunities(): Promise<FarmingCommunity[]> {
    return Array.from(this.farmingCommunities.values());
  }
  
  async createFarmingCommunity(community: InsertFarmingCommunity): Promise<FarmingCommunity> {
    const id = this.currentFarmingCommunityId++;
    const newCommunity: FarmingCommunity = { ...community, id };
    this.farmingCommunities.set(id, newCommunity);
    return newCommunity;
  }
  
  // Inventory methods
  async getInventory(): Promise<Inventory[]> {
    return Array.from(this.inventoryItems.values());
  }
  
  async createInventoryItem(item: InsertInventory): Promise<Inventory> {
    const id = this.currentInventoryId++;
    const newItem: Inventory = { ...item, id };
    this.inventoryItems.set(id, newItem);
    return newItem;
  }
  
  // Weather methods
  async getWeather(location: string): Promise<Weather | undefined> {
    return Array.from(this.weatherData.values()).find(
      (weather) => weather.location === location
    );
  }
  
  async createWeather(weatherData: InsertWeather): Promise<Weather> {
    const id = this.currentWeatherId++;
    const newWeather: Weather = { ...weatherData, id };
    this.weatherData.set(id, newWeather);
    return newWeather;
  }
  
  // Sustainability methods
  async getSustainabilityMetrics(): Promise<Sustainability[]> {
    return Array.from(this.sustainabilityMetrics.values());
  }
  
  async createSustainabilityMetric(metric: InsertSustainability): Promise<Sustainability> {
    const id = this.currentSustainabilityId++;
    const newMetric: Sustainability = { ...metric, id };
    this.sustainabilityMetrics.set(id, newMetric);
    return newMetric;
  }
  
  // Sustainability Initiatives methods
  async getSustainabilityInitiatives(): Promise<SustainabilityInitiative[]> {
    return Array.from(this.sustainabilityInitiatives.values());
  }
  
  async createSustainabilityInitiative(initiative: InsertSustainabilityInitiative): Promise<SustainabilityInitiative> {
    const id = this.currentSustainabilityInitiativeId++;
    const newInitiative: SustainabilityInitiative = { ...initiative, id };
    this.sustainabilityInitiatives.set(id, newInitiative);
    return newInitiative;
  }
  
  private seedData() {
    // Seed a default user
    this.createUser({
      username: "admin",
      password: "password",
      fullName: "Dr. Michael Kwaku",
      email: "michael@cocoreeno.com",
      role: "admin",
      position: "CEO & Founder",
      department: "Executive",
      profileImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61"
    });
    
    // Seed departments based on organogram
    // Main departments (Level 0)
    const ceoId = this.seedDepartment("Chief Executive Officer (CEO)", "Leadership and strategic direction for CocoReeno", null, 0, "Dr. Michael Kwaku", 1, "ri-user-star-line");
    const cooId = this.seedDepartment("Chief Operating Officer (COO)", "Oversees day-to-day operations and execution", null, 0, "Grace Mensah", 1, "ri-user-star-line");
    
    // Level 1 departments
    const financeId = this.seedDepartment("Finance & Accountability", "Financial planning, accounting, budgeting, and investor relations", null, 1, "Samuel Osei", 12, "ri-money-dollar-circle-line");
    const operationsId = this.seedDepartment("Operations & Supply Chain", "Harvesting, logistics, inventory management, and quality assurance", null, 1, "Kofi Mensah", 28, "ri-loader-4-line");
    const salesId = this.seedDepartment("Sales & Distribution", "Direct sales, mobile sales, e-commerce, and customer success", null, 1, "Abena Owusu", 34, "ri-store-2-line");
    const marketingId = this.seedDepartment("Marketing & Branding", "Brand strategy, advertising, digital marketing, and public relations", null, 1, "Ama Sarpong", 18, "ri-megaphone-line");
    const hrId = this.seedDepartment("Human Resource & Administration", "Recruitment, training, compensation, and workplace management", null, 1, "John Boateng", 15, "ri-user-settings-line");
    const rndId = this.seedDepartment("Research & Development (R&D)", "Innovation in coconut products and processing techniques", null, 1, "Dr. Kwame Nkrumah", 10, "ri-flask-line");
    const ruralId = this.seedDepartment("Rural Development, Sustainability & Social Equity", "Empowering rural communities and ensuring sustainable practices", null, 1, "Efua Mensah", 8, "ri-plant-line");
    const legalId = this.seedDepartment("Legal & Regulatory Affairs", "Legal compliance, contracts, and intellectual property", null, 1, "Akosua Frimpong", 5, "ri-scales-3-line");
    const itId = this.seedDepartment("Information Technology (IT & Systems)", "Technology infrastructure, software development, and cybersecurity", null, 1, "Kwabena Adjei", 12, "ri-code-s-slash-line");
    const auditId = this.seedDepartment("Audit & Compliance", "Ensuring adherence to standards and protocols", null, 1, "Daniel Ofori", 6, "ri-file-list-3-line");
    const securityId = this.seedDepartment("Security & Asset Management", "Physical security and asset protection", null, 1, "James Annan", 14, "ri-shield-line");
    
    // Finance sub-departments
    this.seedDepartment("Financial Planning & Analysis", "Projections, Forecasting", financeId, 2, "Kofi Johnson", 4, "ri-line-chart-line");
    this.seedDepartment("Accounting & Bookkeeping", "Financial record-keeping and reporting", financeId, 2, "Sarah Mensah", 3, "ri-book-open-line");
    this.seedDepartment("Budgeting & Cost Control", "Managing company finances and expenses", financeId, 2, "Peter Kwakye", 2, "ri-calculator-line");
    this.seedDepartment("Investor Relations & Capital Strategy", "Managing investor relationships and fundraising", financeId, 2, "Grace Ampofo", 3, "ri-stock-line");
    
    // Operations sub-departments
    this.seedDepartment("Harvesting & Procurement", "Sourcing and harvesting coconuts", operationsId, 2, "Kwesi Obeng", 10, "ri-plant-line");
    this.seedDepartment("Logistics & Fleet Management", "Transportation and distribution", operationsId, 2, "Kwame Asante", 8, "ri-truck-line");
    this.seedDepartment("Inventory & Warehousing", "Storage and stock management", operationsId, 2, "Esi Bonsu", 6, "ri-store-line");
    this.seedDepartment("Quality Assurance & Compliance", "Ensuring product quality and regulatory compliance", operationsId, 2, "Akua Darko", 4, "ri-checkbox-multiple-line");
    
    // Sales sub-departments
    this.seedDepartment("Direct Sales (B2C)", "Street carts, kiosks", salesId, 2, "Yaw Mensah", 12, "ri-shopping-cart-line");
    this.seedDepartment("Mobile & Field Sales", "Direct-to-consumer mobile sales", salesId, 2, "Abena Owusu", 15, "ri-bike-line");
    this.seedDepartment("E-Commerce Sales", "Online sales and distribution", salesId, 2, "Kwabena Takyi", 4, "ri-shopping-bag-line");
    this.seedDepartment("Sales Support & Customer Success", "CRM and after-sales service", salesId, 2, "Maame Adwoa", 3, "ri-customer-service-line");
    
    // Marketing sub-departments
    this.seedDepartment("Brand Strategy & Market Research", "Marketing strategy and consumer insights", marketingId, 2, "Adwoa Kumi", 5, "ri-focus-3-line");
    this.seedDepartment("Campaigns & Advertising", "Marketing campaigns and promotions", marketingId, 2, "Fiifi Amoako", 4, "ri-advertisement-line");
    this.seedDepartment("Digital Marketing", "Online marketing and social media", marketingId, 2, "Akosua Mansa", 6, "ri-global-line");
    this.seedDepartment("Public Relations & CSR", "Corporate communication and social responsibility", marketingId, 2, "Kojo Ansah", 3, "ri-earth-line");
    
    // Seed dashboard stats
    this.seedStat("Revenue (Monthly)", "GH₵ 1.43M", "12.8%", "75% of monthly target", 75, "revenue", "ri-money-dollar-circle-line", "brand-green");
    this.seedStat("Production (Tons)", "846", "8.3%", "68% of monthly target", 68, "production", "ri-leaf-line", "blue-500");
    this.seedStat("Registered Farmers", "2,419", "5.2%", "82% of quarterly target", 82, "farmers", "ri-user-line", "amber-500");
    this.seedStat("Processing Efficiency", "93.7%", "2.1%", "Target: 90%", 94, "efficiency", "ri-settings-line", "purple-500");
    
    // Seed activities
    this.seedActivity("Shipment #CR-9385 delivered to Tema distribution center", "Logistics update", "delivery", "ri-truck-line");
    this.seedActivity("15 new farmers registered from Volta Region", "Farmer registration", "registration", "ri-user-add-line");
    this.seedActivity("Monthly quality report available for review", "Quality assurance", "report", "ri-file-list-3-line");
    this.seedActivity("Scheduled maintenance at Accra processing facility", "Maintenance", "event", "ri-calendar-check-line");
    this.seedActivity("Low inventory alert: Coconut Flour", "Inventory alert", "alert", "ri-alert-line");
    
    // Seed farming communities
    this.seedFarmingCommunity("Keta", "Volta Region", "4,320 tons", 872, "+12.4%", "https://pixabay.com/get/gba56287c914d064b268e28ff0dbf62b3cad35bb527a9176d53395408367af1d370dcd48124c5deb9a14b81d79913bc390985037bb337dcc28f97efe3a34cde29_1280.jpg");
    this.seedFarmingCommunity("Axim", "Western Region", "3,890 tons", 645, "+8.7%", "https://pixabay.com/get/g82c17a0ec411b5a945e2064cf8ffa013d98b3aa344659ce9df4e4f48d6d73c155206ab63d90ed7545946800705d884fe8c251368b2ef4715f72615100ec5cbe4_1280.jpg");
    this.seedFarmingCommunity("Elmina", "Central Region", "2,760 tons", 532, "+5.2%", "https://pixabay.com/get/g64b2c0a670a71d7e1e34c59be48cd8c2f2799d0bb11e7fc74b0d57b3282d0efa68d1067cf26ce87fdfdebfd9be8cab245b7a52ef9886fdbdf91653efff8a4be6_1280.jpg");
    
    // Seed inventory
    this.seedInventory("Raw Coconuts", "12,500", "units", 75);
    this.seedInventory("Coconut Water", "8,750", "liters", 60);
    this.seedInventory("Coconut Oil", "3,200", "liters", 35);
    this.seedInventory("Coconut Flour", "1,850", "kg", 20);
    this.seedInventory("Coconut Shell Products", "5,300", "units", 85);
    
    // Seed weather
    this.seedWeather("Keta, Volta Region", "28°C", "Partly Cloudy", "78%", "12 km/h", "32mm", "Optimal", "Expected rain in Western Region farms next 48 hours. Consider adjusting harvest schedule.");
    
    // Seed sustainability metrics
    this.seedSustainabilityMetric("Water Conservation", "4.2M", "Liters saved", "12% increase from last year", "ri-water-flash-line");
    this.seedSustainabilityMetric("Waste Reduction", "860", "Tons recycled", "8% increase from last year", "ri-recycle-line");
    this.seedSustainabilityMetric("Carbon Footprint", "-15%", "CO2 reduction", "5% better than target", "ri-cloud-line");
    
    // Seed sustainability initiatives
    this.seedSustainabilityInitiative("5 community water conservation projects");
    this.seedSustainabilityInitiative("3 solar energy installations at processing facilities");
    this.seedSustainabilityInitiative("2,500 farmers trained in sustainable practices");
    this.seedSustainabilityInitiative("15 hectares of new coconut farms using organic methods");
  }
  
  private seedDepartment(name: string, description: string | null, parentId: number | null, level: number, head: string | null, memberCount: number, icon: string): number {
    const id = this.currentDepartmentId++;
    const department: Department = {
      id,
      name,
      description,
      parentId,
      level,
      head,
      memberCount,
      icon
    };
    this.departments.set(id, department);
    return id;
  }
  
  private seedStat(name: string, value: string, change: string, target: string, progress: number, type: string, icon: string, color: string): void {
    const id = this.currentStatId++;
    const stat: Stat = {
      id,
      name,
      value,
      change,
      target,
      progress,
      type,
      icon,
      color
    };
    this.stats.set(id, stat);
  }
  
  private seedActivity(title: string, description: string, type: string, icon: string): void {
    const id = this.currentActivityId++;
    const timestamp = new Date();
    const activity: Activity = {
      id,
      title,
      description,
      type,
      icon,
      timestamp,
      departmentId: null
    };
    this.activities.set(id, activity);
  }
  
  private seedFarmingCommunity(name: string, region: string, production: string, farmerCount: number, change: string, image: string): void {
    const id = this.currentFarmingCommunityId++;
    const community: FarmingCommunity = {
      id,
      name,
      region,
      production,
      farmerCount,
      change,
      image
    };
    this.farmingCommunities.set(id, community);
  }
  
  private seedInventory(name: string, quantity: string, unit: string, level: number): void {
    const id = this.currentInventoryId++;
    const item: Inventory = {
      id,
      name,
      quantity,
      unit,
      level
    };
    this.inventoryItems.set(id, item);
  }
  
  private seedWeather(location: string, temperature: string, condition: string, humidity: string, wind: string, rainfall: string, soilMoisture: string, advisory: string): void {
    const id = this.currentWeatherId++;
    const weatherData: Weather = {
      id,
      location,
      temperature,
      condition,
      humidity,
      wind,
      rainfall,
      soilMoisture,
      advisory
    };
    this.weatherData.set(id, weatherData);
  }
  
  private seedSustainabilityMetric(metric: string, value: string, unit: string, change: string, icon: string): void {
    const id = this.currentSustainabilityId++;
    const sustainabilityMetric: Sustainability = {
      id,
      metric,
      value,
      unit,
      change,
      icon
    };
    this.sustainabilityMetrics.set(id, sustainabilityMetric);
  }
  
  private seedSustainabilityInitiative(title: string): void {
    const id = this.currentSustainabilityInitiativeId++;
    const initiative: SustainabilityInitiative = {
      id,
      title,
      completed: true
    };
    this.sustainabilityInitiatives.set(id, initiative);
  }
}

export const storage = new MemStorage();
