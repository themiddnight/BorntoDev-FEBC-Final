import type { Metadata, Viewport } from 'next'

import { Providers } from './providers'
import '../globals.css'

import MainNavbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg', apple: '/favicon.svg' },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_DOMAIN}/`),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
