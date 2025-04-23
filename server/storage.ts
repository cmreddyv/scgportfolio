import { 
  type GuestbookEntry, 
  type InsertGuestbookEntry 
} from "@shared/schema";

export interface IStorage {
  getGuestbookEntries(): Promise<GuestbookEntry[]>;
  addGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry>;
}

export class MemStorage implements IStorage {
  private guestbookEntries: GuestbookEntry[];
  private currentId: number;

  constructor() {
    this.guestbookEntries = [];
    this.currentId = 1;
  }

  async getGuestbookEntries(): Promise<GuestbookEntry[]> {
    return this.guestbookEntries;
  }

  async addGuestbookEntry(entry: InsertGuestbookEntry): Promise<GuestbookEntry> {
    const newEntry: GuestbookEntry = {
      ...entry,
      id: this.currentId++,
      createdAt: new Date()
    };
    this.guestbookEntries.push(newEntry);
    return newEntry;
  }
}

export const storage = new MemStorage();