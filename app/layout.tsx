import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

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
      <body className={`max-w-6xl mx-auto ${rubik.className}`}>
      <Hero />
      {children}
      <Footer />
      </body>
    </html>
  )
}
