// Lesson Page
'use client';

import React from 'react'

import { fetchLectures } from '@/api/data';
import PageSpinner from '@/components/PageSpinner';

export default function Lesson({ params }: { params: { id: string } }) {
    const [isLoading, setIsLoading] = React.useState(true)
    const [lectures, setLectures] = React.useState([])
    const [currentLectureId, setCurrentLectureId] = React.useState(0)

    React.useEffect(() => {
        fetchLectures(params.id)
            .then((data) => {
                setLectures(data.lectures)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [params.id]);


    if (isLoading) return <PageSpinner />

    return (
        <div>
            Lesson: {params.id}
            {lectures.map((lecture: any) => (
                <div key={lecture.id}>
                    <h1>{lecture.title}</h1>
                </div>
            ))}
        </div>
    )
}
