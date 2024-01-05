// admin's layout
import type { Metadata } from 'next'

import '../../globals.css'


export const metadata: Metadata = {
  title: "Admin - Ake's FEBC Finale Project",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='admin'>
      <body>
          <main className="container py-10">
            {children}
          </main>
      </body>
    </html>
  )
}
