// Courses Page
import React from 'react'

import { fetchCourses } from '@/utils/fetching'

import CoursesList from '@/components/CoursesList'


export const metadata = {
  title: "Courses - Ake's FEBC Finale Project",
  description: "Pathompong's Final Project for FEBC",
}

export default async function Courses() {
  const courses = await fetchCourses()
  return <CoursesList coursesList={courses} selectedCategory='All' />
}
