// categories/[category_url]/coursesByCategory route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { category_url: string } }) {
    const category = await prisma.categories.findUnique({
        where: {
            title: params.category_url,
        },
    });
    const coursesByCategory = await prisma.courses.findMany({
        where: {
            category_id: category?.id,
        },
    });
    const data = coursesByCategory.map((course) => {
        return {
            ...course,
            category: category?.title,
        };
    })
    await prisma.$disconnect()

    if (data) {
        return Response.json(data);
    } else {
        return Response.json({ error: 'Category not found' }, { status: 404 });
    }
}