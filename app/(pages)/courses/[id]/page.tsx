// Course Page
import React from 'react'
import { Link, Divider } from '@nextui-org/react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import LecturesList from '@/components/LecturesList'
import NotFound from '@/components/NotFound';

async function fetchCourseDetail(id: string) {
  const res = await fetch(`https://febc-final-project-api--pathompongthiti.repl.co/courses/${id}`)
  if (!res.ok) return null
  return res.json()
}

export default async function Course({ params }: { params: { id: string } }) {
  const data = await fetchCourseDetail(params.id)

  if (data === null) return <NotFound />

  return (
    <>
      <div className='flex flex-col lg:flex-row-reverse gap-10'>
        <div className='flex-1 flex flex-col gap-5'>
          <video controls src={data.video} className='w-full'></video>
          <Link href={`/courses/${data.id}/lesson`} className='mx-auto'>Go to lesson <OpenInNewIcon className='ms-1' /></Link>
        </div>
        <div className='flex-1'>
          <p className={`text-secondary font-mono`}>{data.category}</p>
          <h1 className={`text-3xl text-primary font-bold my-5`}>{data.title}</h1>
          <p>{data.description}</p>
          <Divider className='my-7' />
          <LecturesList lectures={data.lectures} />
        </div>
      </div>
    </>
  )
}
