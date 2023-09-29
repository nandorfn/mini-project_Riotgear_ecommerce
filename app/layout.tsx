import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Rubik } from 'next/font/google'
import Hero from './components/Hero/Hero'

const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'RIOTGEAR',
  description: 'Streetwear Brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
      <Hero />
      {children}
      </body>
    </html>
  )
}
