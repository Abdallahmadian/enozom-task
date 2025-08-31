import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedTrips() {
  await prisma.trip.createMany({
    data: [
      { train_id: 1, from_city_id: 1, to_city_id: 2, departure: new Date(), arrival: new Date(Date.now() + 3600000) },
      { train_id: 2, from_city_id: 2, to_city_id: 3, departure: new Date(), arrival: new Date(Date.now() + 7200000) },
    ],
    skipDuplicates: true,
  });
  const trips = await prisma.trip.findMany();
  console.log('Seeded trips:', trips);
}
