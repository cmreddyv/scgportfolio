import { 
  users, 
  type User, 
  type InsertUser, 
  guestbookEntries, 
  type GuestbookEntry, 
  type InsertGuestbookEntry 
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Guestbook methods
  getGuestbookEntries(): Promise<GuestbookEntry[]>;
  addGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private guestbookEntries: Map<number, GuestbookEntry>;
  private userCurrentId: number;
  private guestbookCurrentId: number;

  constructor() {
    this.users = new Map();
    this.guestbookEntries = new Map();
    this.userCurrentId = 1;
    this.guestbookCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getGuestbookEntries(): Promise<GuestbookEntry[]> {
    return Array.from(this.guestbookEntries.values())
      .sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }

  async addGuestbookEntry(insertEntry: InsertGuestbookEntry): Promise<GuestbookEntry> {
    const id = this.guestbookCurrentId++;
    const entry: GuestbookEntry = { 
      ...insertEntry, 
      id, 
      createdAt: new Date() 
    };
    this.guestbookEntries.set(id, entry);
    return entry;
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getGuestbookEntries(): Promise<GuestbookEntry[]> {
    return db.select().from(guestbookEntries).orderBy(desc(guestbookEntries.createdAt));
  }

  async addGuestbookEntry(insertEntry: InsertGuestbookEntry): Promise<GuestbookEntry> {
    const [entry] = await db
      .insert(guestbookEntries)
      .values(insertEntry)
      .returning();
    return entry;
  }
}

// Use DatabaseStorage with PostgreSQL
export const storage = new DatabaseStorage();
