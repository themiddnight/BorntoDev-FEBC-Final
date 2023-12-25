// courses route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: Request) {
    const courses = await prisma.courses.findMany({
        include: {
            category: {
                select: {
                    title: true,
                },
            }
        },
    });
    courses.forEach(course => course.category = course.category.title as any)
    await prisma.$disconnect();

    return Response.json(courses)
}