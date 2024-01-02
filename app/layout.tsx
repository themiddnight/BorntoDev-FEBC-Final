import type { Metadata } from 'next'

import { Providers } from './providers'
import './globals.css'

import MainNavbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Ake's FEBC Finale Project",
  description: "Pathompong's Final Project for FEBC",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#110011" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Providers>
          <MainNavbar />
          <main className="container my-5 px-5">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
