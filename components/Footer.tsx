import React from 'react'
import { Divider } from '@nextui-org/react'

export default function Footer() {
	return (
		<footer className='mt-5 text-white/50'>
			<Divider />
			<div className='container p-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
					<div className='flex flex-col'>
						<p className='font-bold text-lg'>About</p>
						<p className='text-sm'>This is a project for BorntoDev Front-End Bootcamp.</p>
						<p className='text-sm'>Built with Next.js, TailwindCSS, and NextUI.</p>
						<p className='text-sm'><a href='https://replit.com/@PathompongThiti/FEBC-Final-Project-API' target='blank' className='text-white/75 underline'>Using Flask as an API</a></p>
					</div>
					<div className='flex flex-col'>
						<p className='font-bold text-lg'>Contact</p>
						<p className='text-sm'>Pathompong Thitithan</p>
						<p className='text-sm'>Email: <a href='mailto:the.midnight.k.0173@gmail.com' className='text-white/75 underline'>the.midnight.k.0173@gmail.com</a></p>
						<p className='text-sm'>GitHub: <a href='https://github.com/themiddnight' target='blank' className='text-white/75 underline'>themiddnight</a></p>
					</div>
				</div>
			</div>
		</footer>
	)
}
