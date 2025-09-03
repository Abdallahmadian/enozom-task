import prisma from '../prismaClient.js';

export const getCities = async (req, res) => {
  try {
    const cities = await prisma.city.findMany();
    res.status(200).json(cities);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
