'use client' // Error components must be Client Components

import { Button } from '@nextui-org/react'
import { useEffect } from 'react'

export default function Error({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col justify-center align-middle h-96 gap-10'>
            <h1 className='text-3xl font-mono font-bold text-primary text-center'>Oops! Something went wrong!</h1>
            {/* Attempt to recover by trying to re-render the segment */}
            <Button variant='light' fullWidth={false} onClick={() => reset()} >Try again</Button>
        </div>
    )
}