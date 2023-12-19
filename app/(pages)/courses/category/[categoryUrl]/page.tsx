// Category Page
import React from 'react'

import CoursesList from '@/components/CoursesList'
import NotFound from '@/components/NotFound'

async function fetchCourseByCategory(categoryUrl: string) {
  const category = categoryUrl.replace(/%20/g, ' ')
  const res = await fetch(`https://febc-final-project-api--pathompongthiti.repl.co/categories/${category}/courses`)
  if (!res.ok) return null
  return res.json()
}

export default async function CoursesCategory({ params }: { params: { categoryUrl: string } }) {
  const courses = await fetchCourseByCategory(params.categoryUrl)
  const category = params.categoryUrl.replace(/%20/g, ' ')

  if (!courses) return <NotFound />

  return (
    <CoursesList coursesList={courses} selectedCategory={category} />
  )
}
