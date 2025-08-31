import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.put("/trains/:id", async (req, res) => {
  try {
    const { train_name, capacity } = req.body;
    const updatedTrain = await prisma.train.update({
      where: { train_id: parseInt(req.params.id) },
      data: { train_name, capacity },
    });
    res.json(updatedTrain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
