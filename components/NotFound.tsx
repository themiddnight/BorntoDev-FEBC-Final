import React from 'react'

export default function NotFound({ message='' }: { message?: string }) {
  return (
    <div className='flex justify-center h-96'>
        <p className='text-center font-sans text-white/50'>No page found.</p>
    </div>
  )
}
