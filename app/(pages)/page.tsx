// Home Page
/* eslint-disable react/no-unescaped-entities */

import { Link, Button, Card, Divider, Image } from "@nextui-org/react"
import { Circle, CircleOutlined } from '@mui/icons-material';

import Typewrite from "@/components/Typewrite"

export const metadata = {
  title: "Ake's FEBC Finale Project",
  description: "Pathompong's Final Project for FEBC",
}

export default function Home() {
  return (
    <>
      <header className="flex flex-col lg:flex-row lg:items-center gap-10">
        <Card className='flex lg:basis-2/3 h-[250px] sm:h-[400px] shadow-lg'>
          <div className="flex p-5 gap-2">
            <Circle fontSize="small" className='text-red-500' />
            <Circle fontSize="small" className='text-amber-500' />
            <Circle fontSize="small" className='text-green-500' />
          </div>
          <div className="p-5 sm:p-10">
            <p className='font-sans mb-3 dark:text-white/50 light:text-black/50'>Welcome to our developer online course!</p>
            <Typewrite
              texts={[
                'Transforming Novices into Ninjas!',
                'Learn, Code, Create!',
                'Your Journey Starts with Code!',]}
              loop
              pretype={300}
              startText="> "
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-8 text-content2'
            />
          </div>
        </Card>
        <div className="flex flex-col basis-full lg:basis-1/3 p-5">
          <div className="flex flex-col gap-5 justify-center mb-5">
            <h1 className="text-3xl font-bold">Master Software Development: Learn, Code, Excel!</h1>
            <p>Unlock Your Potential with Our Comprehensive Online Software Development Courses.</p>
            <p>A concise paragraph introducing your online course platform and its mission.</p>
          </div>
          <Button
            href="/courses"
            as={Link}
            className="text-black bg-primary font-bold font-mono mt-5"
          >
            Explore Courses!
          </Button>
        </div>
      </header>

      <Divider className='my-10' />

      <article className="sm:px-10">
        <div className="flex flex-col items-center md:flex-row gap-10">
          <div className='basis-1/2 flex flex-col gap-5'>
            <h1 className="text-3xl font-bold mb-5">About Us</h1>
            <p>Welcome to My Project, where we are dedicated to providing top-notch online education in software development. Our mission is to empower individuals with the knowledge and skills needed to thrive in the dynamic world of technology.</p>
            <p>Our courses are designed to be beginner-friendly, so you don't need any prior knowledge or experience to get started. You'll learn everything you need to know about programming in no time!</p>
          </div>
          <div className="basis-1/2">
            <Image
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress"
              alt="About Us"
              width={'auto'}
            />
          </div>
        </div>

        <Divider className='my-10' />

        <div>
          <h1 className="text-3xl font-bold mb-8 mt-10">Why Choose Us</h1>
          <div className="flex flex-col md:flex-row gap-10">
            <Card className='flex-1 gap-5 p-7 shadow-lg'>
              <CircleOutlined fontSize="medium" />
              <p>Experienced Instructors: Learn from industry professionals with years of hands-on experience.</p>
            </Card>
            <Card className='flex-1 gap-5 p-7 shadow-lg'>
              <CircleOutlined fontSize="medium" />
              <p>Hands-On Projects: Apply theoretical knowledge through real-world projects.</p>
            </Card>
            <Card className='flex-1 gap-5 p-7 shadow-lg'>
              <CircleOutlined fontSize="medium" />
              <p>Industry-Relevant Curriculum: Stay ahead with courses crafted to meet industry demands.</p>
            </Card>
            
          </div>
        </div>
      </article>
    </>
  )
}
