import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.delete("/trains/:id", async (req, res) => {
  try {
    await prisma.train.delete({
      where: { train_id: parseInt(req.params.id) },
    });
    res.json({ message: "Train deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
