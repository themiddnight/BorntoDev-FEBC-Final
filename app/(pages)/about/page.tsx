// About Page
import { Metadata, ResolvingMetadata } from 'next'
import React from 'react'

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata | ResolvingMetadata> {
  return {
    title: `About - Ake's FEBC Finale Project`,
    description: 'About this project',
    openGraph: {
      type: 'website',
      locale: 'th_TH',
      url: 'https://ake-febc-final.vercel.app/',
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
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-center py-48">This is my final project for FEBC</p>
      </div>
    </>
  )
}
