export const updateTrain = async (req, res) => {
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
};