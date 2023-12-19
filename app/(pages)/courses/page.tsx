// Courses Page
import React from 'react'

import CoursesList from '@/components/CoursesList'

async function fetchCourses() {
  const res = await fetch('https://febc-final-project-api--pathompongthiti.repl.co/courses')
  if (!res.ok) return null
  return res.json()
}

export default async function Courses() {
  const courses = await fetchCourses()

  if (!courses) return null

  return (
    <CoursesList coursesList={courses} selectedCategory='All' />
  )
}
