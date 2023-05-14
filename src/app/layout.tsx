
import { Navbar } from '@/components';
import '@/styles/globals.css';
import { Lato } from 'next/font/google';

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
  return (
    <html lang="en" className='bg-secondary' >
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
