import type { Metadata } from 'next'

import { Providers } from './providers'
import './globals.css'

import MainNavbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { StyledBody } from '@/style/styledComponents'

export const metadata: Metadata = {
  title: "Ake's FEBC Finale Project",
  description: "Pathompong's Final Project for FEBC",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      {/* <StyledBody> */}
      <body>
        <Providers>
          <MainNavbar />
          <div className="container py-10 px-5">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
      {/* </StyledBody> */}
    </html>
  )
}
