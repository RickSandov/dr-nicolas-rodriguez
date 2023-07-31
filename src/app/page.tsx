import { Navbar } from '@/components'
import { HomePage } from '@/components/pages/HomePage'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drnicolasrodriguez.com'),
  title: ``,
  description: ``,
  openGraph: {
    type: `website`,
    title: `Dr. Nicolás Rodríguez Luna. Ginecología y Obstetricia. Clínica de Displasias. Colposcopía.`,
    countryName: 'México',
    locale: `es-MX`,
    url: `https://www.drnicolasrodriguez.com/`,
    images: [
      `https://www.drnicolasrodriguez.com/`,
      `https://www.drnicolasrodriguez.com/`,

      // {
      //   url: 'https://www.drnicolasrodriguez.com/',
      //   alt: 'https://drnicolasrodriguez.com/',
      //   type: 'image/png',
      //   width: '',
      //   height: '',
      // }
    ]
  },
  // verification: {
  //   google: '',
  // }
}

//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:site" content="@site" />
//       <meta name="twitter:creator" content="@creator" />
//       <meta name="twitter:title" content="My Website" />
//       <meta name="twitter:description" content="My Website Description" />
//       <meta name="twitter:image" content="https://example.com/og.png" /> */

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />

    </>
  )
}
