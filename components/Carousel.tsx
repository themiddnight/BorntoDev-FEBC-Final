'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button, Image } from '@nextui-org/react'
import Link from 'next/link'

const imageList = [
  'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=800'
]

interface DataProp {
  id: number
  title: string
  href: string
}

export default function Carousel({ data }: { data: DataProp[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="h-80 lg:h-96 overflow-hidden shadow-md" ref={emblaRef}>
      <div className="flex">
        {data.map((slide: DataProp) => (
          <div className='relative shrink-0 grow-0 basis-full' key={slide.id}>
            <div className='absolute z-10 top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent'>
              <div className='flex flex-col items-center justify-end h-56 sm:h-80 lg:h-96 gap-5 py-10'>
                <h2 className='text-white font-bold font-mono text-xl md:text-2xl lg:text-3xl'>Catagory: {slide.title}</h2>
                <Button color='primary' as={Link} href={slide.href} className='text-background font-bold z-20'>Explore Now!</Button>
              </div>
            </div>
            <Image className='z-0 object-cover rounded-none' removeWrapper src={imageList[slide.id]} alt={slide.title} width={'100%'} />
          </div>
        ))}
      </div>
    </div>
  )
}
