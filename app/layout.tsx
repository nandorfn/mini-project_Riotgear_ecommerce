import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Head from 'next/head'


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
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={` ${rubik.className}`}>
      {children}
      </body>
    </html>
  )
}
