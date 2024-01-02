'use client'

import { useState } from 'react'

export default function PageSpinner() {
  const [dotText, setDotText] = useState('')

  let i = 0
  setInterval(() => {
    if (i === 0) {
      setDotText('.')
      i++
    } else if (i === 1) {
      setDotText('..')
      i++
    } else if (i === 2) {
      setDotText('...')
      i = 0
    }
  }, 500)

  return (
    <div className='flex flex-col items-center justify-center py-36'>
      <p className='text-lg font-bold font-mono text-content2 mt-5'>Loading{dotText}</p>
    </div>
  )
}