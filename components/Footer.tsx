import React from 'react'
import { Divider } from '@nextui-org/react'

export default function Footer() {
	return (
		<>
			<footer className='container dark:text-white/50 text-black/75 py-10 px-5'>
				<Divider className="my-10" />
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20 px-3'>
					<div className='flex flex-col gap'>
						<p className='font-bold text-lg mb-2'>About</p>
						<p className='text-sm'>This is a project for BorntoDev Front-End Bootcamp.</p>
						<p className='text-sm'>Built with Next.js 14, TailwindCSS, NextUI and Prisma to connect to PlanetScale MySQL. Deployed on Vercel.</p>
						<p className='text-sm my-1'>Uses placehold.co for video placeholders and ChatGPT for the contents.</p>
					</div>
					<div className='flex flex-col gap'>
						<p className='font-bold text-lg mb-2'>Contact</p>
						<b className='text-sm'>Pathompong Thitithan</b>
						<div className='flex flex-col xl:flex-row gap-5 xl:gap-10'>
							<div className='flex flex-col'>
								<p className='text-sm'>Email:</p>
								<a href='mailto:the.midnight.k.0173@gmail.com' className='dark:text-white/75 text-black/75 underline'>the.midnight.k.0173@gmail.com</a>
							</div>
							<div className='flex flex-col'>
								<p className='text-sm'>GitHub:</p>
								<a href='https://github.com/themiddnight' target='blank' className='dark:text-white/75 text-black/75 underline'>themiddnight</a>
							</div>
							<div className='flex flex-col'>
								<p className='text-sm'>Project repository:</p>
								<a href='https://github.com/themiddnight/borntodev-febc-final' target='blank' className='dark:text-white/75 text-black/75 underline'>borntodev-febc-final</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
