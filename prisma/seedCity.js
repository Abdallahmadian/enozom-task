import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function seedCities() {
  await prisma.city.createMany({
    data: [
      { name: 'Cairo' },
      { name: 'Alexandria' },
      { name: 'Giza' },
    ],
    skipDuplicates: true,
  });
  const cities = await prisma.city.findMany();
  console.log('Seeded cities:', cities);
}
