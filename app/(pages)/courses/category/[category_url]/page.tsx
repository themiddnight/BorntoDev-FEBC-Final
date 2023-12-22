// Category Page
import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'

import { fetchCoursesByCategory } from '@/utils/fetching'

import CoursesList from '@/components/CoursesList'
import NotFound from '@/components/NotFound'


export async function generateMetadata(
  { params }: { params: { category_url: string } }
): Promise<Metadata | ResolvingMetadata> {
  const category = params.category_url.replace(/%20/g, ' ')
  return {
    title: `${category} courses - Ake's FEBC Finale Project`,
  }
}

export default async function CoursesCategory(
  { params }: { params: { category_url: string } }
) {
  const courses = await fetchCoursesByCategory(params.category_url)
  const category = params.category_url.replace(/%20/g, ' ')

  if (!courses) return <NotFound />

  return (
    <CoursesList coursesList={courses} selectedCategory={category} />
  )
}
