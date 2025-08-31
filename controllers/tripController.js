export const getTrips = async (req, res) => {
  try {
    const trips = await prisma.trip.findMany();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add more trip methods as needed (e.g., createTrip, updateTrip, deleteTrip)
