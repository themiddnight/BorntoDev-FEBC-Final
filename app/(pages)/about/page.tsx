/* eslint-disable react/no-unescaped-entities */
// About Page
import { Metadata, ResolvingMetadata } from 'next'
import { ArrowDownwardOutlined } from '@mui/icons-material'

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata | ResolvingMetadata> {
  return {
    title: `About - Ake's FEBC Finale Project`,
    description: 'About this project',
    openGraph: {
      type: 'website',
      url: '${process.env.NEXT_PUBLIC_DOMAIN}/about',
      title: `About - Ake's FEBC Finale Project`,
      description: 'About this project',
      images: [
        {
          url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
          width: 1200,
          height: 630,
          alt: 'Og Image Alt',
        },
      ],
    },
  }
}

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 py-32">
        <h1 className="font-center text-3xl font-bold">About</h1>
        <p className="text-center">This is my final project for FEBC. Please see the details in the footer below.</p>
          <ArrowDownwardOutlined fontSize='large' className='font-center mt-10 animate-bounce' />
      </div>
    </>
  )
}
