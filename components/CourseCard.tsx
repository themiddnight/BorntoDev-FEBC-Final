import React from 'react'
import { Card, CardHeader, CardBody, Link, Image } from '@nextui-org/react'
import Typewrite from './Typewrite'

interface Props {
	id: string,
	title: string,
	description: string,
	category: string,
	categoryId: number,
	thumbnail: string
}

export default function CourseCard(props: Props) {

	return (
			<Card className='flex items-stretch shadow-lg'>
				<CardHeader className='p-0'>
					<Link href={`/courses/${props.id}`}>
						<div className='h-48 overflow-hidden'>
							<Image src={props.thumbnail} width={'100%'} height={'100%'} alt={props.title} isZoomed radius='none' className='rounded-none' />
						</div>
					</Link>
				</CardHeader>
				<CardBody className='p-5 flex flex-col'>
					<Typewrite texts={[props.category.replaceAll(' ', '_')]} hasCursor={false} className={`text-secondary font-mono text-sm`} />
					<Link href={`/courses/${props.id}`} color='foreground'>
						<p className={`text-primary text-xl font-bold my-3 flex-auto`}>{props.title}</p>
					</Link>
					<p className='text-sm flex-auto'>{props.description}</p>
				</CardBody>
			</Card>
	)
}