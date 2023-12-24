const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const courses = await prisma.courses.findMany({
    select: {
      id: true,
      title: true,
      category: {
        select: {
          title: true,
        },
      },
    },
    where: {
      category: {
        id: {
          equals: 3,
        },
      },
    },
  });

  const courseA = await prisma.courses.findUnique({
    where: { id: 1 },
    select: {
      id: true,
      title: true,
      category: {
        select: {
          title: true,
        },
      },
    },
  });

  console.log(courses);
  // console.log(courseA);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })