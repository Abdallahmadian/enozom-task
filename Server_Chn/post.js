import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/trains", async (req, res) => {
  try {
    const { train_name, capacity } = req.body;
    const newTrain = await prisma.train.create({
      data: { train_name, capacity },
    });
    res.status(201).json(newTrain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
