// Lesson Page
'use client'
import { useState, useEffect } from 'react'
import { Button, Listbox, ListboxItem } from '@nextui-org/react'
import { CheckCircle, CircleOutlined } from '@mui/icons-material';
import ReactPlayer from 'react-player'

import { fetchCourseLectures } from '@/utils/fetching';

import NotFound from '@/components/NotFound'
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

interface Learnt {
	id: string,
	learnt: boolean
}

export default function Lesson({ id }: { id: string }) {
	const [course, setCourse] = useState<Course>({ id: '', title: '', lectures: [] })
	const [isLoading, setIsLoading] = useState(true)
	const [currentLecture, setCurrentLecture] = useState<Lecture>()
	const [duration, setDuration] = useState(0)
	const [isFinished, setIsFinished] = useState(false)
	const [learntArray, setLearntArray] = useState<Learnt[]>([])

	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/courses', text: 'Courses' },
		{ href: `/courses/${course.id}`, text: course.title },
		{ href: `/courses/${course.id}/lesson`, text: 'Lesson' },
	]

	function clearLearned() {
		const clearLearnedConfirm = confirm('Are you sure you want to clear all learned lectures?')
		if (!clearLearnedConfirm) return
		localStorage.setItem('learntArray', JSON.stringify([]))
		setLearntArray([])
	}

	function setLearned() {
		setIsFinished(true)
		const learnt = learntArray.find((item: Learnt) => item.id === currentLecture?.id)
		if (learnt) {
			learnt.learnt = true
		} else {
			if (currentLecture?.id) {
				learntArray.push({ id: currentLecture.id, learnt: true });
			}
		}
		localStorage.setItem('learntArray', JSON.stringify(learntArray))
		setLearntArray(learntArray)
	}

	// load course from API and set it to state
	useEffect(() => {
		fetchCourseLectures(id).then((data) => {
			setCourse(data)
			setIsLoading(false)
		})
	}, [id])

	useEffect(() => {
		setCurrentLecture(course.lectures[0])
	}, [course])

	// load learntArray from localStorage and set it to state
	useEffect(() => {
		const learntArray = JSON.parse(localStorage.getItem('learntArray') || '[]')
		setLearntArray(learntArray)
	}, [])

	const title = <h1 className='text-2xl sm:text-3xl text-primary font-mono font-bold my-5'>Lesson: {currentLecture?.title}</h1>

	if (isLoading) return <PageSpinner />
	if (!course) return <NotFound />

	return (
		<>
			<PageBreadcrumbs links={links} className='mb-5' />
			<div className='hidden lg:flex'>{title}</div>
			<div className='flex flex-col lg:flex-row gap-10'>
				<div className='basis-3/4'>
					<ReactPlayer
						controls={true}
						config={{ file: { attributes: { controlsList: 'nodownload' } } }} // disable download
						onContextMenu={(e: { preventDefault: () => any; }) => e.preventDefault()} // disable right click
						onProgress={(state) => {
							if (duration - state.playedSeconds < 5 && !isFinished) {
								setLearned()
							}
						}}
						onDuration={(state) => setDuration(state)}
						width={'100%'}
						height={'auto'}
						className='shadow-lg'
						url={currentLecture?.video_url}
					/>
					<div className='lg:hidden'>{title}</div>
				</div>

				<div className='basis-1/4 flex flex-col align-middle'>
					<Listbox label='Lectures' className='mb-5'>
						{course.lectures.map((lecture: Lecture) => (
							<ListboxItem
								key={lecture.id}
								startContent={learntArray.find((item: Learnt) => item.id === lecture.id)?.learnt ? <CheckCircle /> : <CircleOutlined />}
								description={<p className={currentLecture?.id === lecture.id ? 'text-background/50' : 'text-foreground/50'}>
									{Math.floor(lecture.duration / 60)}:{String(lecture.duration % 60).padStart(2, '0')}
									{Math.floor(lecture.duration / 60) == 1 ? ' minute' : ' minutes'}</p>
								}
								onClick={() => {
									setIsFinished(false)
									setCurrentLecture(lecture)
									window.scrollTo({ top: 0, behavior: 'smooth' })
								}}
								showDivider
								className={currentLecture?.id === lecture.id ? 'bg-primary text-background' : ''}
							>
								{lecture.title}
							</ListboxItem>
						))}
					</Listbox>
					<Button variant='light' className='text-danger underline underline-offset-2' onClick={clearLearned}>Clear learned marks</Button>
				</div>
			</div>
		</>
	)
}
