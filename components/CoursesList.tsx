/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { fetchCategories } from '@/utils/fetching'

import CourseCard from '@/components/CourseCard'
import FilterBox from '@/components/FilterBox'
import Typewrite from './Typewrite'

interface Props {
	title?: string
	coursesList: Array<Course>
	selectedCategory: string
}

interface Course {
	id: string
	title: string
	description: string
	category: string
	categoryId: number
	thumbnail_url: string
}

export default async function CoursesList({ title, coursesList, selectedCategory }: Props) {
	let categoryTitle = ''
	const categories = await fetchCategories()
	if (title) {
		categoryTitle = `Search: ${title}`
	} else {
		categoryTitle = selectedCategory.replaceAll(' ', '_').toUpperCase()
	}

	const courseListComponent = coursesList.map((course) => {
		return (
			<CourseCard
				key={course.id}
				id={course.id}
				title={course.title}
				description={course.description}
				category={course.category}
				categoryId={course.categoryId}
				thumbnail={course.thumbnail_url}
			/>
		)
	})

	const notFoundComponent = (
		<div className='col-span-full py-10'>
			<h1 className='text-3xl text-foreground font-mono font-bold my-5 text-center'>We don't have any courses related to "{title}"</h1>
			<p className='text-foreground/75 font-mono text-center'>We're sorry 🥹. We'll add more courses soon.</p>
		</div>
	)

	return (
		<>
			<p className='font-sans sm:mt-10 mb-3 dark:text-white/50 light:text-black/50'>Our developer courses:</p>
			<Typewrite texts={[categoryTitle]} startText='> ' className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-10 text-content2' />
			<FilterBox list={categories} selectedKey={selectedCategory} />
			<div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{coursesList.length > 0 ? courseListComponent : notFoundComponent}
			</div>
		</>
	)
}