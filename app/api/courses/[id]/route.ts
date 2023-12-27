// courses/id route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const course = await prisma.courses.findUnique({
        where: { id: Number(params.id) },
        include: {
            category: true,
            lectures: true,
        },
    });
    await prisma.$disconnect();

    if (course) {
        course.category = course.category.title as any;
        return Response.json(course);
    } else {
        return Response.json({ error: 'Course not found' }, { status: 404, statusText: 'Course not found' });
    }
}