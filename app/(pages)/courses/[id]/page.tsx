// Course Page
'use client';

import React from 'react'
import { Link, Divider, Spinner } from '@nextui-org/react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { fetchCourseDetail } from '@/api/data';
import LecturesList from '@/components/LecturesList'
import PageSpinner from '@/components/PageSpinner';

export default function Course({ params }: { params: { id: string } }) {
  const [isLoading, setIsLoading] = React.useState(true)
  const [data, setData] = React.useState({
    id: '',
    title: '',
    duration: 0,
    video: '',
    description: '',
    lectures: []
  });

  React.useEffect(() => {
    fetchCourseDetail(params.id)
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [params.id]);

  if (isLoading) return <PageSpinner />

  return (
    <>
      <div className='flex flex-col lg:flex-row-reverse gap-10'>
        <div className='flex-1 flex flex-col gap-5'>
          <video controls src={data.video} className='w-full'></video>
          <Link href={`/courses/${data.id}/lesson`} className='mx-auto'>Go to lesson <OpenInNewIcon className='ms-1' /></Link>
        </div>
        <div className='flex-1'>
          <h1 className='text-2xl font-bold mb-5'>{data.title}</h1>
          <p>{data.description}</p>
          <Divider className='my-7' />
          <LecturesList lectures={data.lectures} />
        </div>
      </div>
    </>
  )
}
