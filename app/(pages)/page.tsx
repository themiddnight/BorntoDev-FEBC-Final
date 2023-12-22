// Home Page

import Typewrite from "@/components/Typewrite"

export const metadata = {
  title: "Ake's FEBC Finale Project",
  description: "Pathompong's Final Project for FEBC",
}

export default function Home() {
  return (
    <>
      <Typewrite
        texts={['Hello World!', 'Welcome to my website!']}
        loop 
        pretype={300}
        startText="> "
        className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-8 dark:text-amber-300 light:text-amber-300'
      />
    </>
  )
}
