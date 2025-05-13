import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertDepartmentSchema, insertUserSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  const apiRouter = app.route('/api');
  
  // Users
  app.get('/api/users/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }
    
    const user = await storage.getUser(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Don't send the password
    const { password, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  });
  
  app.post('/api/users', async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      
      // Don't send the password
      const { password, ...userWithoutPassword } = user;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors });
      }
      res.status(500).json({ message: 'Failed to create user' });
    }
  });
  
  // Departments
  app.get('/api/departments', async (req, res) => {
    const departments = await storage.getDepartments();
    res.json(departments);
  });
  
  app.get('/api/departments/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid department ID' });
    }
    
    const department = await storage.getDepartment(id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    
    res.json(department);
  });
  
  app.get('/api/departments/:id/subdepartments', async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid department ID' });
    }
    
    const subDepartments = await storage.getSubDepartments(id);
    res.json(subDepartments);
  });
  
  app.post('/api/departments', async (req, res) => {
    try {
      const departmentData = insertDepartmentSchema.parse(req.body);
      const department = await storage.createDepartment(departmentData);
      res.status(201).json(department);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: error.errors });
      }
      res.status(500).json({ message: 'Failed to create department' });
    }
  });
  
  app.patch('/api/departments/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid department ID' });
    }
    
    try {
      const department = await storage.updateDepartment(id, req.body);
      if (!department) {
        return res.status(404).json({ message: 'Department not found' });
      }
      
      res.json(department);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update department' });
    }
  });
  
  // Dashboard Stats
  app.get('/api/stats', async (req, res) => {
    const { type } = req.query;
    
    if (!type || typeof type !== 'string') {
      return res.status(400).json({ message: 'Type parameter is required' });
    }
    
    const stats = await storage.getStats(type);
    res.json(stats);
  });
  
  // Activities
  app.get('/api/activities', async (req, res) => {
    const activities = await storage.getActivities();
    res.json(activities);
  });
  
  // Farming Communities
  app.get('/api/farming-communities', async (req, res) => {
    const communities = await storage.getFarmingCommunities();
    res.json(communities);
  });
  
  // Inventory
  app.get('/api/inventory', async (req, res) => {
    const inventory = await storage.getInventory();
    res.json(inventory);
  });
  
  // Weather
  app.get('/api/weather', async (req, res) => {
    const { location } = req.query;
    
    if (!location || typeof location !== 'string') {
      return res.status(400).json({ message: 'Location parameter is required' });
    }
    
    const weather = await storage.getWeather(location);
    if (!weather) {
      return res.status(404).json({ message: 'Weather data not found for this location' });
    }
    
    res.json(weather);
  });
  
  // Sustainability
  app.get('/api/sustainability/metrics', async (req, res) => {
    const metrics = await storage.getSustainabilityMetrics();
    res.json(metrics);
  });
  
  app.get('/api/sustainability/initiatives', async (req, res) => {
    const initiatives = await storage.getSustainabilityInitiatives();
    res.json(initiatives);
  });

  const httpServer = createServer(app);
  return httpServer;
}
