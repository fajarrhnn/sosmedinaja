import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
export const COOKIE_NAME = "crsftoken";
export const MAX_AGE = 60 * 60 * 24 * 1;
