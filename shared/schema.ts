import { pgTable, text, serial, integer, jsonb, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User Schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  role: text("role").notNull(),
  position: text("position"),
  department: text("department"),
  profileImage: text("profile_image"),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

// Department Schema
export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  parentId: integer("parent_id").references(() => departments.id),
  level: integer("level").notNull().default(0),
  head: text("head"),
  memberCount: integer("member_count").default(0),
  icon: text("icon"),
});

export const insertDepartmentSchema = createInsertSchema(departments).omit({
  id: true,
});

// Stats Schema
export const stats = pgTable("stats", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  value: text("value").notNull(),
  change: text("change"),
  target: text("target"),
  progress: integer("progress"),
  type: text("type").notNull(),
  icon: text("icon"),
  color: text("color"),
});

export const insertStatsSchema = createInsertSchema(stats).omit({
  id: true,
});

// Activity Schema
export const activities = pgTable("activities", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  type: text("type").notNull(),
  icon: text("icon"),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
  departmentId: integer("department_id").references(() => departments.id),
});

export const insertActivitySchema = createInsertSchema(activities).omit({
  id: true,
});

// Farming Communities Schema
export const farmingCommunities = pgTable("farming_communities", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  region: text("region").notNull(),
  production: text("production").notNull(),
  farmerCount: integer("farmer_count").notNull(),
  change: text("change"),
  image: text("image"),
});

export const insertFarmingCommunitySchema = createInsertSchema(farmingCommunities).omit({
  id: true,
});

// Inventory Schema
export const inventory = pgTable("inventory", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  quantity: text("quantity").notNull(),
  unit: text("unit").notNull(),
  level: integer("level").notNull(), // percentage
});

export const insertInventorySchema = createInsertSchema(inventory).omit({
  id: true,
});

// Weather Schema
export const weather = pgTable("weather", {
  id: serial("id").primaryKey(),
  location: text("location").notNull(),
  temperature: text("temperature").notNull(),
  condition: text("condition").notNull(),
  humidity: text("humidity"),
  wind: text("wind"),
  rainfall: text("rainfall"),
  soilMoisture: text("soil_moisture"),
  advisory: text("advisory"),
});

export const insertWeatherSchema = createInsertSchema(weather).omit({
  id: true,
});

// Sustainability Schema
export const sustainability = pgTable("sustainability", {
  id: serial("id").primaryKey(),
  metric: text("metric").notNull(),
  value: text("value").notNull(),
  unit: text("unit").notNull(),
  change: text("change"),
  icon: text("icon"),
});

export const insertSustainabilitySchema = createInsertSchema(sustainability).omit({
  id: true,
});

// Sustainability Initiative Schema
export const sustainabilityInitiatives = pgTable("sustainability_initiatives", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  completed: boolean("completed").notNull().default(true),
});

export const insertSustainabilityInitiativeSchema = createInsertSchema(sustainabilityInitiatives).omit({
  id: true,
});

// Type exports
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Department = typeof departments.$inferSelect;
export type InsertDepartment = z.infer<typeof insertDepartmentSchema>;

export type Stat = typeof stats.$inferSelect;
export type InsertStat = z.infer<typeof insertStatsSchema>;

export type Activity = typeof activities.$inferSelect;
export type InsertActivity = z.infer<typeof insertActivitySchema>;

export type FarmingCommunity = typeof farmingCommunities.$inferSelect;
export type InsertFarmingCommunity = z.infer<typeof insertFarmingCommunitySchema>;

export type Inventory = typeof inventory.$inferSelect;
export type InsertInventory = z.infer<typeof insertInventorySchema>;

export type Weather = typeof weather.$inferSelect;
export type InsertWeather = z.infer<typeof insertWeatherSchema>;

export type Sustainability = typeof sustainability.$inferSelect;
export type InsertSustainability = z.infer<typeof insertSustainabilitySchema>;

export type SustainabilityInitiative = typeof sustainabilityInitiatives.$inferSelect;
export type InsertSustainabilityInitiative = z.infer<typeof insertSustainabilityInitiativeSchema>;
