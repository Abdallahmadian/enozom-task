import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/trains", async (req, res) => {
  try {
    const trains = await prisma.train.findMany();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
