import React from 'react'
import { Spinner } from '@nextui-org/react'

export default function PageSpinner() {
  return (
    <div className='flex justify-center h-96'>
      <Spinner color='default' />
    </div>
  )
}