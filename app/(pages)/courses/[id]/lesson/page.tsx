// Lesson Page
import NotFound from '@/components/NotFound'
import React from 'react'

async function fetchLectures(id: string) {
    const res = await fetch(`https://febc-final-project-api--pathompongthiti.repl.co/courses/${id}`, { cache: 'no-store' })
    if (!res.ok) return null
    const data = await res.json()
    return data.lectures
}

export default async function Lesson({ params }: { params: { id: string } }) {
    const lectures = await fetchLectures(params.id)

    if (!lectures) return <NotFound />

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
