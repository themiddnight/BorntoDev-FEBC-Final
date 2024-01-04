import { useState, useEffect } from "react"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"

import { fetchCourses, fetchCategories, fetchLectures } from "@/utils/fetching"

import ActionButtons from "./AcrionButtons"
import AddButton from "./AddDataButton"

interface Category {
	id: number,
	title: string
}

interface Course {
	id: number,
	title: string,
	description: string,
	category_id: number
	thumbnail_url: string
	video_url: string
}

interface Lecture {
	id: number,
	course_id: number,
	title: string,
	duration: number,
	video_url: string
}

export default function CoursesTable() {
    const courseColumns = [
        { key: 'id', title: 'ID' },
        { key: 'title', title: 'Title' },
        { key: 'category', title: 'Category' },
        { key: 'lectures_count', title: 'Lectures Count' },
        { key: 'actions', title: 'Actions' }
    ]

	const [courses, setCourses] = useState<Course[]>([])
	const [categories, setCategories] = useState<Category[]>([])
	const [lectures, setLectures] = useState<Lecture[]>([])

	useEffect(() => {
		fetchCourses().then((data) => setCourses(data))
		fetchCategories().then((data) => setCategories(data))
		fetchLectures().then((data) => setLectures(data))
	}, [])

	return (
		<Table isStriped isHeaderSticky topContent='Courses' bottomContent={<AddButton table='courses' />} classNames={{ wrapper: 'p-8' }} aria-label='Courses'>
			<TableHeader columns={courseColumns}>
				{(columns) => <TableColumn key={columns.key} align='center' className='text-primary'>{columns.title}</TableColumn>}
			</TableHeader>
			<TableBody items={courses}>
				{(course: Course) => (
					<TableRow key={course.id}>
						<TableCell>{course.id}</TableCell>
						<TableCell>{course.title}</TableCell>
						<TableCell>{categories.find((category: Category) => category.id === course.category_id)?.title}</TableCell>
						<TableCell>{lectures.filter((lecture: Lecture) => lecture.course_id === course.id).length}</TableCell>
						<TableCell>
							<ActionButtons table='courses' id={course.id} />
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	)
}