import React from 'react'
import { Card, CardHeader, CardBody, Link, Image, Divider } from '@nextui-org/react'
import { NavigateNext } from '@mui/icons-material';
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
				<Typewrite texts={[props.category.replaceAll(' ', '_')]} speed={30} hasCursor={false} className={`text-content3/75 font-mono text-sm mb-1`} />

				<Link href={`/courses/${props.id}`} underline='hover' className={`text-primary text-xl font-bold mb-3 flex-auto`}>
					{props.title}
				</Link>

				<p className='text-sm flex-auto mb-4'>
					{props.description}
				</p>

				<div className='flex gap-2'>
					<Link href={`/courses/${props.id}`} underline='hover' className='text-secondary'>Details</Link>
					<Divider orientation='vertical' />
					<Link href={`/courses/${props.id}/lesson`} underline='hover' showAnchorIcon anchorIcon={<NavigateNext />} className='text-secondary flex'>
						Learn Now!
					</Link>
				</div>
			</CardBody>
		</Card>
	)
}