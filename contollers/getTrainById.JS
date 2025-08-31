export const getTrainById = async (req, res) => {
  try {
    const train = await prisma.train.findUnique({
      where: { train_id: parseInt(req.params.id) },
    });
    if (!train) return res.status(404).json({ error: "Train not found" });
    res.json(train);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};