import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const guestbookEntries = pgTable("guestbook_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

export const insertGuestbookEntrySchema = createInsertSchema(guestbookEntries).pick({
  name: true,
  email: true,
  message: true
});

export type InsertGuestbookEntry = z.infer<typeof insertGuestbookEntrySchema>;
export type GuestbookEntry = typeof guestbookEntries.$inferSelect;
