// Category Page
import React from 'react'

import CourseCard from '@/components/CourseCard'
import FilterBox from '@/components/FilterBox'

async function fetchCourseByCategory(categoryUrl: string) {
  const category = categoryUrl.replace(/%20/g, ' ')
  const res = await fetch(`https://febc-final-project-api--pathompongthiti.repl.co/categories/${category}/courses`)
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

async function fetchCategories() {
  const res = await fetch('https://febc-final-project-api--pathompongthiti.repl.co/categories')
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}

export default async function CoursesCategory({ params }: { params: { categoryUrl: string } }) {
  const courses = await fetchCourseByCategory(params.categoryUrl)
  const categories = await fetchCategories()
  const category = params.categoryUrl.replace(/%20/g, ' ')

  return (
    <>
      <h1 className='text-4xl text-center font-bold p-5'>[{category.toUpperCase()}]</h1>
      <FilterBox list={categories} selectedKey={category} />
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {courses.map((course: any) => (
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
