// admin page
'use client'
import { useState, useRef } from 'react'
import { Button } from '@nextui-org/react'

import CategoriesTable from '@/components/admin/CategoriesTable';
import CoursesTable from '@/components/admin/CoursesTable';

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

	// if (!isLoggedIn) {
	// 	return (
	// 		<div className='flex flex-col gap-5 max-w-md items-center align-middle mx-auto pt-48'>
	// 			<h1 className='text-4xl font-bold text-primary text-center mb-8'>Admin Login</h1>
	// 			<Input
	// 				name='username'
	// 				placeholder="Username"
	// 				className='shadow-md'
	// 				ref={usernameRef}
	// 				onInput={(e) => {
	// 					setUsername((e.target as HTMLInputElement).value)
	// 				}}
	// 				value={username}
	// 				onKeyDown={(e) => { if (e.key === 'Enter') checkLogin() }}
	// 			/>
	// 			<Input
	// 				name='password'
	// 				type='password'
	// 				placeholder="Password"
	// 				className='shadow-md'
	// 				onInput={(e) => {
	// 					setPassword((e.target as HTMLInputElement).value)
	// 				}}
	// 				value={password}
	// 				onKeyDown={(e) => { if (e.key === 'Enter') checkLogin() }}
	// 			/>
	// 			<Button
	// 				className='w-1/2 mt-10 shadow-lg text-background'
	// 				color='primary'
	// 				onClick={() => checkLogin()}
	// 			>
	// 				Log in
	// 			</Button>
	// 		</div>
	// 	)
	// }

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
