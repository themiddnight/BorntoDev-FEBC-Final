'use client'

import { useState } from 'react'
import { Spinner } from '@nextui-org/react'

export default function PageSpinner() {
  const [dotText, setDotText] = useState('')

  let i = 0
  setInterval(() => {
    setDotText(dotText + '.')
    i++
    if (i == 4) {
      setDotText('')
      i = 0
    }
  }, 500)

  return (
    <div className='flex flex-col items-center justify-center py-36'>
      {/* <Spinner color='primary' /> */}
      <p className='text-lg font-bold font-mono text-amber-300 mt-5'>Loading{dotText}</p>
    </div>
  )
}