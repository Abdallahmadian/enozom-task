export const createTrain = async (req, res) => {
  try {
    const { train_name, capacity } = req.body;
    const train = await prisma.train.create({
      data: { train_name, capacity },
    });
    res.json(train);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
