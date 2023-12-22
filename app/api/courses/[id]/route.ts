// courses/id route
import data from '@/data/data.json'
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const course = data.courses.find((course) => course.id === Number(params.id));
    if (course) {
        return Response.json(course);
    } else {
        return Response.json({ error: 'Course not found' }, { status: 404 });
    }
}