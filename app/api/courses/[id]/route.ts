// courses/id route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const course = await prisma.courses.findUnique({
            where: {
                id: Number(params.id),
            },
        });
        const category = await prisma.categories.findUnique({
            where: {
                id: course?.category_id,
            },
        });
        const lectures = await prisma.lectures.findMany({
            where: {
                course_id: Number(params.id),
            },
        });
        const data = {
            ...course,
            category: category ? category.title : null,
            lectures,
        };
        await prisma.$disconnect();
        return Response.json(data);
    } catch (error) {
        await prisma.$disconnect();
        return Response.json({ error: 'Course not found' }, { status: 404 });
    }
}