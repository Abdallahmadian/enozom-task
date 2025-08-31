const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


async function main() {
  const allUsers = await prisma.trip.findMany();
  console.log(allUsers);
  app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
    
  });
  
