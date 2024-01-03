// admin page
'use client'
import { useState, useRef, useEffect } from 'react'
import {
	Button, Input,
	Table, TableHeader, TableColumn, TableBody, TableRow, TableCell
} from '@nextui-org/react'
import { DriveFileRenameOutline as Edit, DeleteOutlineOutlined as Delete } from '@mui/icons-material';

import { fetchCourses, fetchCategories, fetchLectures } from '@/utils/fetching';

// table columns

const categoryColumns = [
	{ key: 'id', title: 'ID' },
	{ key: 'title', title: 'Title' },
	{ key: 'actions', title: 'Actions' }
]

const courseColumns = [
	{ key: 'id', title: 'ID' },
	{ key: 'title', title: 'Title' },
	{ key: 'category', title: 'Category' },
	{ key: 'lectures_count', title: 'Lectures Count' },
	{ key: 'actions', title: 'Actions' }
]

// buttons component

function ActionButtons({ table, id }: { table: string, id: number }) {
	function handleEdit() {
		console.log(`Edit: ${id} in ${table}`)
	}

	function handleDelete() {
		const confirm = window.confirm(`Are you sure you want to delete ${id} in ${table}?`)
		if (confirm) {
			console.log(`Delete: ${id} in ${table}`)
		}
	}

	return (
		<div>
			<Button variant='light' size='sm' className='mx-1' isIconOnly color='secondary' onClick={() => handleEdit()}>
				<Edit />
			</Button>
			<Button variant='light' size='sm' className='mx-1' isIconOnly color='danger' onClick={() => handleDelete()}>
				<Delete />
			</Button>
		</div>
	)
}

function AddButton({ table }: { table: string }) {
	function handleAdd() {
		console.log(`Add new ${table}`)
	}

	return (
		<Button variant='flat' color='success' className='w-[150px]' onClick={() => handleAdd()}>
			Add Data
		</Button>
	)
}

// interfaces

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

// tables component

function CategoriesTable() {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetchCategories().then((data) => setCategories(data))
	}, [])
	return (
		<Table isStriped isHeaderSticky topContent='Categories' bottomContent={<AddButton table='categories' />} classNames={{ wrapper: 'p-8' }} aria-label='Categories'>
			<TableHeader columns={categoryColumns}>
				{(columns) => <TableColumn key={columns.key} align='center' className='text-primary'>{columns.title}</TableColumn>}
			</TableHeader>
			<TableBody items={categories}>
				{(category: Category) => (
					<TableRow key={category.id}>
						<TableCell>{category.id}</TableCell>
						<TableCell>{category.title}</TableCell>
						<TableCell>
							<ActionButtons table='categories' id={category.id} />
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	)
}

function CoursesTable() {
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

// main component

export default function AdminPage() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [currentTab, setCurrentTab] = useState('categories')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const usernameRef = useRef<HTMLInputElement>(null)

	function checkLogin() {
		if (username == process.env.NEXT_PUBLIC_ADMIN_USERNAME && password == process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
			setIsLoggedIn(true)
			setUsername('')
			setPassword('')
		} else {
			alert('Wrong username or password');
			setUsername('')
			setPassword('')
			usernameRef.current?.focus()
		}
	}

	if (!isLoggedIn) {
		return (
			<div className='flex flex-col gap-5 max-w-md items-center align-middle mx-auto pt-48'>
				<h1 className='text-4xl font-bold text-primary text-center mb-8'>Admin Login</h1>
				<Input
					name='username'
					placeholder="Username"
					className='shadow-md'
					ref={usernameRef}
					onInput={(e) => {
						setUsername((e.target as HTMLInputElement).value)
					}}
					value={username}
					onKeyDown={(e) => { if (e.key === 'Enter') checkLogin() }}
				/>
				<Input
					name='password'
					type='password'
					placeholder="Password"
					className='shadow-md'
					onInput={(e) => {
						setPassword((e.target as HTMLInputElement).value)
					}}
					value={password}
					onKeyDown={(e) => { if (e.key === 'Enter') checkLogin() }}
				/>
				<Button
					className='w-1/2 mt-10 shadow-lg text-background'
					color='primary'
					onClick={() => checkLogin()}
				>
					Log in
				</Button>
			</div>
		)
	}

	return (
		<>
			<h1 className='text-3xl font-bold text-primary text-center my-5'>Manage Courses Data</h1>
			<div className='flex flex-col gap-5'>
				<div className='flex justify-between text-background'>
					<div className='flex gap-5'>
						<Button
							onClick={() => setCurrentTab('categories')}
							className='w-[150px] shadow-md'
							color={currentTab === 'categories' ? 'primary' : 'default'}
						>
							Categories
						</Button>
						<Button
							onClick={() => setCurrentTab('courses')}
							className='w-[150px] shadow-md'
							color={currentTab === 'courses' ? 'primary' : 'default'}
						>
							Courses
						</Button>
					</div>
					<div>
						<Button
							onClick={() => setIsLoggedIn(false)}
							className='w-[150px] shadow-md'
							variant='solid'
							color='danger'
						>
							Log out
						</Button>
					</div>
				</div>
				<div className='grow'>
					{currentTab === 'categories' && <CategoriesTable />}
					{currentTab === 'courses' && <CoursesTable />}
				</div>
			</div>
		</>
	)
}
