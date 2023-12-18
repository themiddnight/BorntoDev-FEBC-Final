export async function fetchCategories() {
    const res = await fetch('https://febc-final-project-api--pathompongthiti.repl.co/categories')
    const data = await res.json()
    return data
}

export async function fetchCourses() {
    const res = await fetch('https://febc-final-project-api--pathompongthiti.repl.co/courses')
    const data = await res.json()
    return data
}

export async function fetchCourseByCategory(category) {
    let categoryUrl = category.replace(/\s/g, '%20')
    const res = await fetch(`https://febc-final-project-api--pathompongthiti.repl.co/categories/${categoryUrl}/courses`)
    const data = await res.json()
    return data
}

export async function fetchLectures(id) {
    const res = await fetch(`https://febc-final-project-api--pathompongthiti.repl.co/courses/${id}`)
    const data = await res.json()
    return data
}

export async function fetchCourseDetail(id) {
  const res = await fetch(`https://febc-final-project-api--pathompongthiti.repl.co/courses/${id}`)
  const data = await res.json()
  return data
}