export const getTrains = async (req, res) => {
  try {
    const trains = await prisma.train.findMany();
    res.json(trains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};