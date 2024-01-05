// courses route
import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const courseName = searchParams.get('course_name');
    if (courseName) {
        const courses = await prisma.courses.findMany({
            where: {
                title: {
                    contains: courseName,
                },
            },
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