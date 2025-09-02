import prisma from '../prismaClient.js';

export const getTrips = async (req, res) => {
  try {
    const trips = await prisma.trip.findMany();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTripsFromAlexToCairo = async (req, res) => {
  try {
    const alex = await prisma.city.findUnique({ where: { name: 'Alexandria' } });
    const cairo = await prisma.city.findUnique({ where: { name: 'Cairo' } });

    if (!alex || !cairo) {
      return res.status(404).json({ error: 'City not found' });
    }

    const trips = await prisma.trip.findMany({
      where: {
        from_city_id: alex.id,
        to_city_id: cairo.id,
      },
      include: {
        train: true,
        from_city: true,
        to_city: true,
        // author: true, // Uncomment if you have an author relation
      },
    });

    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add more trip methods as needed (e.g., createTrip, updateTrip, deleteTrip)
// Add more trip methods as needed (e.g., createTrip, updateTrip, deleteTrip)
