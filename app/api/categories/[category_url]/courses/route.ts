// categories/[category_url]/courses route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { category_url: string } }) {
    const coursesByCategory = await prisma.courses.findMany({
        where: {
            category: {
                title: {
                    equals: params.category_url,
                },
            },
        },
        include: {
            category: true,
        },
    });
    await prisma.$disconnect();

    if (coursesByCategory) {
        coursesByCategory.forEach((course) => {
            course.category = course.category.title as any;
        })
        return Response.json(coursesByCategory);
    } else {
        return Response.json({ error: 'Category not found' }, { status: 404 });
    }
}