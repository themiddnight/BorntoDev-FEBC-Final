// all lectures route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request: Request) {
    const lectures = await prisma.lectures.findMany();
    await prisma.$disconnect();

    return Response.json(lectures);
}