// courses route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: Request) {
    const categories = await prisma.categories.findMany();
    const courses = await prisma.courses.findMany();
    const data = courses.map((course) => {
        const category = categories.find((category) => category.id === course.category_id);
        return {
            ...course,
            category: category ? category.title : null,
        };
    });
    await prisma.$disconnect();
    
    return Response.json(data)
}