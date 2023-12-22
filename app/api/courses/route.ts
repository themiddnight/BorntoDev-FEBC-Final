// courses route
import data from '@/data/data.json'
export async function GET(request: Request) {
    if (data.courses) {
        return Response.json(data.courses);
    } else {
        return Response.json({ error: 'Courses not found' }, { status: 404 });
    }
}