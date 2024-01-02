// Lesson Page
'use client'
import { useState, useEffect } from 'react'
import { Listbox, ListboxItem } from '@nextui-org/react'
import CircleIcon from '@mui/icons-material/Circle';

import NotFound from '@/components/NotFound'
import ReactPlayer from 'react-player'
import PageSpinner from '@/components/PageSpinner'
import PageBreadcrumbs from '@/components/PageBreadcrumbs';

interface Course {
	id: string,
	title: string,
	lectures: Lecture[]
}

interface Lecture {
	id: string,
	title: string,
	duration: number,
	video_url: string
}

export default function Lesson({ id }: { id: string }) {
	const [course, setCourse] = useState<Course>({ id: '', title: '', lectures: [] })
	const [isLoading, setIsLoading] = useState(true)
	const [currentLecture, setCurrentLecture] = useState(0)
	const [duration, setDuration] = useState(0)
	const [isFinished, setIsFinished] = useState(false)

	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/courses', text: 'Courses' },
		{ href: `/courses/${course.id}`, text: course.title },
		{ href: `/courses/${course.id}/lesson`, text: 'Lesson' },
	]

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/courses/${id}`)
			.then(res => res.json())
			.then(data => {
				setCourse(data)
				setIsLoading(false)
			})
	}, [id])

	if (isLoading) return <PageSpinner />
	if (!course) return <NotFound />

	return (
		<>
			<PageBreadcrumbs links={links} className='mb-7' />
			<div className='flex flex-col lg:flex-row gap-10'>
				<div className='basis-3/4'>
					<ReactPlayer
						controls={true}
						onProgress={(state) => {
							if (duration - state.playedSeconds < 5 && !isFinished) {
								setIsFinished(true)
								console.log('finished')
							}
						}}
						onDuration={(state) => setDuration(state)}
						width={'100%'}
						height={'auto'}
						className='shadow-lg'
						url={course.lectures[currentLecture].video_url}
					/>

					<p>Course: {course.title}</p>
					<p>Lesson: {course.lectures[currentLecture].title}</p>
					<p>ID: {course.lectures[currentLecture].id}</p>
				</div>

				<Listbox label='Lectures' className='basis-1/4'>
					{course.lectures.map((lecture: Lecture) => (
						<ListboxItem
							key={lecture.id}
							startContent={<CircleIcon className='text-small' />}
							description={<p className='dark:text-white/50'>
								{Math.floor(lecture.duration / 60)}:{String(lecture.duration % 60).padStart(2, '0')}
								{Math.floor(lecture.duration / 60) == 1 ? ' minute' : ' minutes'}</p>
							}
							showDivider
						>
							{lecture.title}
						</ListboxItem>
					))}
				</Listbox>
			</div>
		</>
	)
}
