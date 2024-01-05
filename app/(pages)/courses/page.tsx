// Courses Page
import React from 'react'

import { fetchCourses, fetchCoursesByCondition } from '@/utils/fetching'

import CoursesList from '@/components/CoursesList'

interface Props {
  params: {}
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata = {
  title: "Courses - Ake's FEBC Finale Project",
  description: "Pathompong's Final Project for FEBC",
  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_DOMAIN}/courses`,
    title: "Courses - Ake's FEBC Finale Project",
    description: "Pathompong's Final Project for FEBC",
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

export default async function Courses(props: Props) {
  const searchParams = props.searchParams;
  const search = searchParams['course_name'];
  if (search) {
    const courses = await fetchCoursesByCondition('course_name', search.toString())
    return <CoursesList title={search.toString()} coursesList={courses} selectedCategory='All' />
  }
  const courses = await fetchCourses()
  return <CoursesList coursesList={courses} selectedCategory='All' />
}
