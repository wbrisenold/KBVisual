import { pgTable, text, serial, integer, boolean, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});



export const googleReviews = pgTable("google_reviews", {
  id: serial("id").primaryKey(),
  reviewId: text("review_id").notNull().unique(),
  rating: integer("rating").notNull(),
  text: text("text").notNull(),
  authorName: text("author_name").notNull(),
  timeDescription: text("time_description").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const bookingSlots = pgTable("booking_slots", {
  id: serial("id").primaryKey(),
  sessionType: text("session_type").notNull(),
  date: text("date").notNull(),
  startTime: text("start_time").notNull(),
  endTime: text("end_time").notNull(),
  isAvailable: boolean("is_available").default(true).notNull(),
  clientName: text("client_name"),
  clientEmail: text("client_email"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const portfolioPhotos = pgTable("portfolio_photos", {
  id: serial("id").primaryKey(),
  url: text("url").notNull(),
  thumbnail: text("thumbnail"),
  title: text("title").notNull(),
  category: text("category").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  page: text("page").notNull(), // 'home', 'portfolio', 'pricing', 'testimonials'
  order: integer("order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertGoogleReviewSchema = createInsertSchema(googleReviews).omit({
  id: true,
  createdAt: true,
});

export const insertBookingSlotSchema = createInsertSchema(bookingSlots).omit({
  id: true,
  createdAt: true,
});

export const insertPortfolioPhotoSchema = createInsertSchema(portfolioPhotos).omit({
  id: true,
  createdAt: true,
});

export const insertFaqSchema = createInsertSchema(faqs).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertGoogleReview = z.infer<typeof insertGoogleReviewSchema>;
export type GoogleReview = typeof googleReviews.$inferSelect;

export type InsertBookingSlot = z.infer<typeof insertBookingSlotSchema>;
export type BookingSlot = typeof bookingSlots.$inferSelect;

export type InsertPortfolioPhoto = z.infer<typeof insertPortfolioPhotoSchema>;
export type PortfolioPhoto = typeof portfolioPhotos.$inferSelect;

export type InsertFaq = z.infer<typeof insertFaqSchema>;
export type Faq = typeof faqs.$inferSelect;
