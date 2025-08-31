import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedTrains() {
  await prisma.train.createMany({
    data: [
      { name: 'Express 1', capacity: 200 },
      { name: 'Regional 2', capacity: 150 },
    ],
    skipDuplicates: true,
  });
  const trains = await prisma.train.findMany();
  console.log('Seeded trains:', trains);
}
