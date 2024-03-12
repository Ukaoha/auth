// / lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export  default { prisma };


export function validateEmail(string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(string);
  }