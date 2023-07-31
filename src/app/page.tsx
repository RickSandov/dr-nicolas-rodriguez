import { Navbar } from '@/components'
import { HomePage } from '@/components/pages/HomePage'
import Image from 'next/image'
import { Metadata } from 'next'

const description = 'Atención médica especializada en salud femenina, con enfoque preventivo y soluciones personalizadas para cada etapa de tu vida.';
export const metadata: Metadata = {
  metadataBase: new URL('https://www.drnicolasrodriguez.com'),
  title: ``,
  description,
  openGraph: {
    description,
    type: `website`,
    title: `Dr. Nicolás Rodríguez Luna. Ginecología y Obstetricia. Clínica de Displasias. Colposcopía.`,
    countryName: 'México',
    locale: `es-MX`,
    url: `https://www.drnicolasrodriguez.com/`,
    images: [
      `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drnicolasrodriguez.com'}/_next/image?url=%2Fconsultorio.jpg&w=2048&q=75`,
      `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.drnicolasrodriguez.com'}/_next/image?url=%2Fconsultorio.jpg&w=2048&q=75`,
    ]
  },
  // verification: {
  //   google: '',
  // }
}
export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />

    </>
  )
}
