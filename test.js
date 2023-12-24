import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const categories = await prisma.categories.findMany();
  const courses = await prisma.courses.findMany();
  const lectures = await prisma.lectures.findMany();
  const coursesWithLectures = courses.map((course) => {
    return {
      ...course,
      category: categories.find((category) => category.id === course.category_id).title,
      lectures: lectures.filter((lecture) => lecture.course_id === course.id),
    };
  });
  console.log(coursesWithLectures);
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