// categories route
import data from '@/data/data.json'
export async function GET(request: Request) {
    const categoriesSet = new Set(data.courses.map((course) => course.category));
    const categories = Array.from(categoriesSet);
    if (categories) {
        return Response.json(categories);
    } else {
        return Response.json({ error: 'Categories not found' }, { status: 404 });
    }
}