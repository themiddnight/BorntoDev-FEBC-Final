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
      <header className="flex flex-col lg:flex-row">
        <Card className='flex basis-full lg:basis-2/3 h-[400px] shadow-lg'>
          <div className="flex p-5 gap-2">
            <CircleIcon fontSize="small" className='text-red-500' />
            <CircleIcon fontSize="small" className='text-amber-500' />
            <CircleIcon fontSize="small" className='text-green-500' />
          </div>
          <div className="p-10">
            <p className='font-sans mb-3 dark:text-white/50 light:text-black/50 mb-5'>Welcome to our developer online course!</p>
            <Typewrite
              texts={[
                'Transforming Novices into Ninjas!', 
                'Learn, Code, Create!',
                'Your Journey Starts with Code!',]}
              loop 
              pretype={300}
              startText="> "
              className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-8 dark:text-amber-300 light:text-amber-300'
            />
          </div>
        </Card>
        <div className="basis-full lg:basis-1/3 p-5">
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-3xl">Master Software Development: Learn, Code, Excel!</h1>
            <p>Unlock Your Potential with Our Comprehensive Online Software Development Courses.</p>
            <p>A concise paragraph introducing your online course platform and its mission.</p>
          </div>
        </div>
      </header>
    </>
  )
}
