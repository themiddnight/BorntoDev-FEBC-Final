// categories/[category_url]/courses route
import data from '@/data/data.json'
export async function GET(request: Request, { params }: { params: { category_url: string } }) {
    const courses = data.courses.filter((course) => course.category === params.category_url);
    if (courses) {
        return Response.json(courses);
    } else {
        return Response.json({ error: 'Category not found' }, { status: 404 });
    }
}