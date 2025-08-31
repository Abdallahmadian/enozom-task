export const getCities = async (req, res) => {
  try {
    const cities = await prisma.city.findMany();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add more city methods as needed (e.g., createCity, updateCity, deleteCity)
