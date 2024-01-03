const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchCourses() {
    const res = await fetch(`${apiUrl}/api/courses`, { cache: 'no-store' })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

export async function fetchCategories() {
    const res = await fetch(`${apiUrl}/api/categories`, { cache: 'no-store' })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

export async function fetchCoursesByCategory(category: string) {
    const res = await fetch(`${apiUrl}/api/categories/${category}/courses`, { cache: 'no-store' })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

export async function fetchCourseDetail(id: string) {
    const res = await fetch(`${apiUrl}/api/courses/${id}`, { cache: 'no-store' })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

export async function fetchLectures() {
    const res = await fetch(`${apiUrl}/api/lectures`, { cache: 'no-store' })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}

export async function fetchCourseLectures(id: string) {
    const res = await fetch(`${apiUrl}/api/courses/${id}`, { cache: 'no-store' })
    if (!res.ok) throw new Error(res.statusText)
    return res.json()
}