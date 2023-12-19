import React from 'react'

import CourseCard from '@/components/CourseCard'
import FilterBox from '@/components/FilterBox'
import Typewrite from './Typewrite'

interface Props {
	coursesList: Course[]
	selectedCategory: string
}

interface Course {
	id: string
	title: string
	description: string
	category: string
	categoryId: number
	thumbnail: string
}

// Fetch categories from API to use in FilterBox
async function fetchCategories() {
	const res = await fetch('https://febc-final-project-api--pathompongthiti.repl.co/categories')
	if (!res.ok) throw new Error(res.statusText)
	return res.json()
}

export default async function CoursesList({ coursesList, selectedCategory }: Props) {
	console.log(coursesList)
	const categories = await fetchCategories()
	const categoryTitle = selectedCategory.replaceAll(' ', '_').toUpperCase()

	return (
		<>
			<p className='font-sans text-white/50'>Our developer courses:</p>
			<Typewrite texts={['Hello, world!',categoryTitle]} className='sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono py-5 text-amber-300' />
			<FilterBox list={categories} selectedKey={selectedCategory} />
			<div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{coursesList.map((course) => (
					<CourseCard
						key={course.id}
						id={course.id}
						title={course.title}
						description={course.description}
						category={course.category}
						categoryId={course.categoryId}
						thumbnail={course.thumbnail}
					/>
				))}
			</div>
		</>
	)
}