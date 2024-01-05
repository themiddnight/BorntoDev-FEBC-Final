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
    description: `Courses in ${category} category`,
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/courses/category/${params.category_url}`,
      title: `${category} courses - Ake's FEBC Finale Project`,
      description: `Courses in ${category} category`,
      images: [
        {
          url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
          width: 1200,
          height: 630,
          alt: 'Og Image Alt',
        },
      ],
    },
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
