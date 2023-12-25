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
    title: `${data.title} lecture - Ake's FEBC Finale Project`,
    description: data.description,
  }
}

export default function page({ params }: { params: { id: string } }) {
  return (
	<Lesson id={params.id} />
  )
}
