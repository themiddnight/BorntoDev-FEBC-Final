// Lesson Page
import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'

import { fetchCourseDetail } from '@/utils/fetching'

import Lesson from './lesson'

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata | ResolvingMetadata> {
  const data = await fetchCourseDetail(params.id)
  return {
    title: `${data.title} lectures - Ake's FEBC Finale Project`,
    description: data.description,
    openGraph: {
      type: 'website',
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/courses/${data.id}/lesson`,
      title: `${data.title} lectures - Ake's FEBC Finale Project`,
      description: data.description,
      images: [
        {
          url: data.thumbnail_url,
          width: 1200,
          height: 630,
          alt: 'Og Image Alt',
        },
      ],
    },
  }
}

export default function page({ params }: { params: { id: string } }) {
  return (
	<Lesson id={params.id} />
  )
}
