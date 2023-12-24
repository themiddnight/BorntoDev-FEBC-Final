// courses/id route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const course = await prisma.courses.findUnique({
        where: { id: Number(params.id) },
        select: {
            id: true,
            title: true,
            description: true,
            category_id: true,
            video_url: true,
            category: {
                select: {
                    title: true,
                },
            },
            lectures: {
                select: {
                    id: true,
                    title: true,
                    duration: true,
                    video_url: true,
                },
            },
        },
    });
    await prisma.$disconnect();

    if (course) {
        course.category = course.category.title as any;
        return Response.json(course);
    } else {
        return Response.json({ error: 'Course not found' }, { status: 404 });
    }
}