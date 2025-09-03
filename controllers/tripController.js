import prisma from '../prismaClient.js';

export const getTrips = async (req, res) => {
  try {
    const trips = await prisma.trip.findMany({
      include: {
        train: true,
        city: true,
      },
    });
    res.status(200).json(trips);
  } catch (error) {
    console.error("Error fetching trips:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Trips from Alexandria to Cairo (train must stop in both)
export const getTripsFromAlexToCairo = async (req, res) => {
  try {
    const alex = await prisma.city.findFirst({
      where: { city_name: 'Alexandria' },
    });
    const cairo = await prisma.city.findFirst({
      where: { city_name: 'Cairo' },
    });

    if (!alex || !cairo) {
      return res.status(404).json({ error: 'City not found' });
    }

    // Find trains that stop at both Alexandria and Cairo
    const trains = await prisma.train.findMany({
      where: {
        trip: {
          some: { city_id: alex.city_id },
        },
        AND: {
          trip: {
            some: { city_id: cairo.city_id },
          },
        },
      },
      include: {
        trip: {
          include: {
            city: true,
          },
        },
      },
    });

    res.status(200).json(trains);
  } catch (error) {
    console.error("Error fetching trips Alexandria → Cairo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
