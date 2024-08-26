import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
export const COOKIE_NAME = "crsftoken";
export const MAX_AGE = 60 * 60 * 24 * 1;
export const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "localhost:3000";
