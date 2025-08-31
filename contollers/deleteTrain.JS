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
