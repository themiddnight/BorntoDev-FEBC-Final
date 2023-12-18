import React from 'react'

import CourseCard from '@/components/CourseCard'
import FilterBox from '@/components/FilterBox'

type Props = {
	coursesList: Course[]
	selectedCategory: string
}

type Course = {
	id: string
	title: string
	description: string
	category: string
	thumbnail: string
}

async function fetchCategories() {
  const res = await fetch('https://febc-final-project-api--pathompongthiti.repl.co/categories')
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

export default async function CoursesList({ coursesList, selectedCategory }: Props) {
  const categories = await fetchCategories()

	return (
		<>
		  <h1 className='text-4xl text-center font-bold p-5'>[COURSES]</h1>
		  <FilterBox list={categories} selectedKey={selectedCategory} />
		  <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{coursesList.map((course: any) => (
			  <CourseCard
				key={course.id}
				id={course.id}
				title={course.title}
				description={course.description}
				category={course.category}
				thumbnail={course.thumbnail}
			  />
			))}
		  </div>
		</>
	  )
}