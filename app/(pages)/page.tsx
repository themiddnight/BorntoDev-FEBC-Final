// Home Page

import { Card } from "@nextui-org/react"
import CircleIcon from '@mui/icons-material/Circle';

import Typewrite from "@/components/Typewrite"

export const metadata = {
  title: "Ake's FEBC Finale Project",
  description: "Pathompong's Final Project for FEBC",
}

export default function Home() {
  return (
    <>
      <Card className='flex items-stretch shadow-lg'>
        <div className="flex p-5 gap-2">
          <CircleIcon fontSize="small" className='text-red-500' />
          <CircleIcon fontSize="small" className='text-amber-500' />
          <CircleIcon fontSize="small" className='text-green-500' />
        </div>
        <div className="p-10">
          <p className='font-sans mb-3 dark:text-white/50 light:text-black/50 mb-5'>Welcome to</p>
          <Typewrite
            texts={['Hello World!', 'Welcome to my website!']}
            loop 
            pretype={300}
            startText="> "
            className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-8 dark:text-amber-300 light:text-amber-300'
          />
        </div>
      </Card>
    </>
  )
}
