import React from 'react'
import { Card, CardHeader, CardBody, Divider, Link, Image } from '@nextui-org/react'

type Props = {
	id: string,
	title: string,
	description: string,
	category: string,
	thumbnail: string
}

export default function CourseCard(props: Props) {
	return (
		<>
			<Card className='flex items-stretch'>
				<CardHeader className='p-0'>
					<Link href={`/courses/${props.id}`}>
						<Image src={props.thumbnail} alt={props.title} className='rounded-none' />
					</Link>
				</CardHeader>
				<CardBody className='p-5 flex flex-col'>
					<small className='text-white/25'>{props.category}</small>
					<Link href={`/courses/${props.id}`} color='foreground'>
						<p className='text-xl font-bold my-3 flex-auto'>{props.title}</p>
					</Link>
					<p className='text-sm flex-auto'>{props.description}</p>
				</CardBody>
			</Card>
		</>
	)
}