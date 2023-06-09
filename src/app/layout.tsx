import { Navbar } from '@/components';
import '@/styles/globals.css';
import { Lato } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { headers } from 'next/headers'

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers();
  const fullUrl = headersList.get('referer') || "";
  return (
    <html lang="en" className='bg-white scroll-pt-[50px] sm:scroll-pt-[100px] text-primary max-w-[100vw]' >
      <title>
        Dr. Nicolás Rodríguez Luna
      </title>
      <meta name="description" content="Clínica" />
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
