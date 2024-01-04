// Courses Page
import React from 'react'

import { fetchCourses } from '@/utils/fetching'

import CoursesList from '@/components/CoursesList'

export const metadata = {
  title: "Courses - Ake's FEBC Finale Project",
  description: "Pathompong's Final Project for FEBC",
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://ake-febc-final.vercel.app/',
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

export default async function Courses() {
  const courses = await fetchCourses()
  return <CoursesList coursesList={courses} selectedCategory='All' />
}
