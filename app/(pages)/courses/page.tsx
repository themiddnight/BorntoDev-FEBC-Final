// Courses Page
'use client';

import React from 'react'

import { fetchCourses, fetchCourseByCategory, fetchCategories } from '@/api/data'
import CourseCard from '@/components/CourseCard'
import FilterBox from '@/components/FilterBox'
import PageSpinner from '@/components/PageSpinner';

export default function Courses() {
  const [courses, setCourses] = React.useState([])
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [isLoading, setIsLoading] = React.useState(true)

  function getCourses() {
    fetchCourses()
      .then((data) => {
        setCourses(data)
        setIsLoading(false)
      })
      .catch((err) => { console.log(err) })
  }

  React.useEffect(() => {
    getCourses()
    fetchCategories()
      .then((data) => { setCategories(data) })
      .catch((err) => { console.log(err); });
    console.log('fetching categories')
  }, [])

  React.useEffect(() => {
    if (selectedCategory === "All") {
      getCourses()
    } else {
      fetchCourseByCategory(selectedCategory)
        .then((data) => { setCourses(data) })
        .catch((err) => { console.log(err) })
    }
  }, [selectedCategory]);

  if (isLoading) return <PageSpinner />

  return (
    <>
      <h1 className='text-4xl text-center font-bold p-5'>[COURSES]</h1>
      <FilterBox onChangeFunc={setSelectedCategory} list={categories} />
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
