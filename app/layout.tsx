import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import Head from 'next/head'


const rubik = Rubik({ subsets: ['latin']})
const ogImg = 'https://ucarecdn.com/41824360-e893-40b5-840a-d5c72ea70b16/Twitterpost1.png'
export const metadata: Metadata = {
  title: 'RIOTGEAR',
  description: 'Streetwear Brand',
  metadataBase: new URL('https://riotgear.vercel.app'),
  openGraph: {
    title: 'RIOTGEAR',
    description: 'Streetwear Clothing Brand',
    url: 'https://riotgear.vercel.app',
    siteName: 'RIOTGEAR',
    images: [
      {
        url: ogImg,
        width: 800,
        height: 600,
      },
      {
        url: ogImg,
        width: 1800,
        height: 1600,
        alt: 'Streetwear Brand',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
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
