import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGuestbookEntrySchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendGuestbookNotification } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Guestbook routes
  app.get("/api/guestbook", async (req, res) => {
    try {
      const entries = await storage.getGuestbookEntries();
      res.json(entries);
    } catch (error) {
      console.error("Error fetching guestbook entries:", error);
      res.status(500).json({ message: "Failed to fetch guestbook entries" });
    }
  });

  app.post("/api/guestbook", async (req, res) => {
    try {
      const entryData = insertGuestbookEntrySchema.parse(req.body);
      const newEntry = await storage.addGuestbookEntry(entryData);
      
      // Send email notification
      try {
        await sendGuestbookNotification(newEntry);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // We don't want to fail the request if email fails
      }
      
      res.status(201).json(newEntry);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Invalid guestbook entry data", 
          errors: error.errors 
        });
      } else {
        console.error("Error adding guestbook entry:", error);
        res.status(500).json({ message: "Failed to add guestbook entry" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
