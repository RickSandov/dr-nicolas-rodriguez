import { Metadata } from 'next'
import '@/styles/globals.css';
import { Lato } from 'next/font/google';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

const title = `Dr. Nicolás Rodríguez Luna. Ginecología y Obstetricia. Colposcopía. Clínica de Displasias.`
const description = 'Atención médica especializada en salud femenina, con enfoque preventivo y soluciones personalizadas para cada etapa de tu vida.';
export const metadata: Metadata = {
  metadataBase: new URL('https://www.drnicolasrodriguez.com'),
  title,
  description,
  openGraph: {
    description,
    type: `website`,
    title,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const headersList = headers();
  // const fullUrl = headersList.get('referer') || "";
  return (
    <html lang="en" className='bg-white scroll-pt-[50px] sm:scroll-pt-[100px] text-primary max-w-[100vw]' >
      <Head>
        <title>Dr. Nicolás Rodríguez Luna</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-384x384.png"></link>
      </Head>
      <body className={lato.className}>
        <Toaster
          position="bottom-left"
          reverseOrder={false}
        />
        {children}
      </body>
    </html>
  )
}
