import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json()); 


app.post("/trains", async (req, res) => {
  try {
    const { train_name, capacity } = req.body;
    const train = await prisma.train.create({
      data: { train_name, capacity },
    });
    res.json(train);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get("/trains", async (req, res) => {
  try {
    const trains = await prisma.train.findMany();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.get("/trains/:id", async (req, res) => {
  try {
    const train = await prisma.train.findUnique({
      where: { train_id: parseInt(req.params.id) },
    });
    if (!train) return res.status(404).json({ error: "Train not found" });
    res.json(train);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.put("/trains/:id", async (req, res) => {
  try {
    const { train_name, capacity } = req.body;
    const train = await prisma.train.update({
      where: { train_id: parseInt(req.params.id) },
      data: { train_name, capacity },
    });
    res.json(train);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.delete("/trains/:id", async (req, res) => {
  try {
    await prisma.train.delete({
      where: { train_id: parseInt(req.params.id) },
    });
    res.json({ message: "Train deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
