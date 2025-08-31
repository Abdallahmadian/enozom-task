import { prisma } from "../prismaClient.js";

export const getTrains = async (req, res) => {
  try {
    const trains = await prisma.train.findMany();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTrain = async (req, res) => {
  try {
    await prisma.train.delete({
      where: { train_id: parseInt(req.params.id) },
    });
    res.json({ message: "Train deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add more train methods as needed (e.g., createTrain, updateTrain)