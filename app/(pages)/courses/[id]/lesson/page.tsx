// Lesson Page
import type { Metadata, ResolvingMetadata } from 'next'

import { fetchLectures, fetchCourseDetail } from '@/utils/fetching'

import NotFound from '@/components/NotFound'


export async function generateMetadata(
	{ params }: { params: { id: string } }
): Promise<Metadata | ResolvingMetadata> {
	const data = await fetchCourseDetail(params.id)
	return {
		title: `${data.title} lesson - Ake's FEBC Finale Project`,
		description: data.description,
	}
}

export default async function Lesson({ params }: { params: { id: string } }) {
	const lectures = await fetchLectures(params.id)

	if (!lectures) return <NotFound />

	return (
		<div>
			Lesson: {params.id}
			{lectures.map((lecture: any) => (
				<div key={lecture.id}>
					<h1>{lecture.title}</h1>
				</div>
			))}
		</div>
	)
}
