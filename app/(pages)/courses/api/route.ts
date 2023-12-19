// Courses page route definition
import data from '../../../../data/data.json'
export async function GET() {
    return Response.json(data.courses);
}