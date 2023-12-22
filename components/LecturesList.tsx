'use client';

import React from 'react'
import { Listbox, ListboxItem, cn } from '@nextui-org/react'
import CircleIcon from '@mui/icons-material/Circle';

interface Props {
	lectures: Lecture[]
}

interface Lecture {
	id: string,
	title: string,
	duration: number,
}

export default function LecturesList({ lectures }: Props) {
	return (
		<>
			<h2 className='text-xl mb-5'>Lectures:</h2>
			<Listbox>
				{lectures.map((lecture) => (
					<ListboxItem
						key={lecture.id}
						startContent={<CircleIcon className='text-small' />}
						description={<p className='dark:text-white/50'>
							{Math.floor(lecture.duration / 60)}:{String(lecture.duration % 60).padStart(2, '0')} 
							{Math.floor(lecture.duration / 60) == 1 ? ' minute' : ' minutes'}</p>
						}
						showDivider
					>
						{lecture.title}
					</ListboxItem>
				))}
			</Listbox>
		</>
	)
}