// Course Page
import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import { Link, Divider, Image } from '@nextui-org/react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { fetchCourseDetail } from '@/utils/fetching';

import LecturesList from '@/components/LecturesList'
import NotFound from '@/components/NotFound';
import Typewrite from '@/components/Typewrite';
import PageBreadcrumbs from '@/components/PageBreadcrumbs';


export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata | ResolvingMetadata> {
  const data = await fetchCourseDetail(params.id)
  return {
    title: `${data.title} - Ake's FEBC Finale Project`,
    description: data.description,
  }
}

export default async function Course(
  { params }: { params: { id: string } }
) {
  const data = await fetchCourseDetail(params.id)
  const links = [
    { href: '/', text: 'Home' },
    { href: '/courses', text: 'Courses' },
    { href: `/courses/${data.id}`, text: data.title },
  ]

  const title = <>
    <Typewrite texts={[data.category.replaceAll(' ', '_')]} className={`text-content3/75 font-mono`} />
    <h1 className={`text-3xl text-primary font-bold my-5`}>{data.title}</h1>
  </>

  if (data === null) return <NotFound />

  return (
    <div className='px-0 sm:px-10'>
      <PageBreadcrumbs links={links} className='mb-7' />
      <div className='flex flex-col lg:flex-row-reverse gap-10'>
        <div className='flex-1 flex flex-col gap-5'>
          <div className='lg:hidden'>
            {title}
          </div>
          <Image src={data.thumbnail_url} alt={data.title} className='rounded-lg shadow-lg' />
          <Link href={`/courses/${data.id}/lesson`} showAnchorIcon underline='hover' className='mx-auto'>Go to lesson</Link>
        </div>
        <div className='flex-1'>
          <div className='hidden lg:block'>
            {title}
          </div>
          <p>{data.description}</p>
          <Divider className='my-7' />
          <LecturesList lectures={data.lectures} />
        </div>
      </div>
    </div>
  )
}
