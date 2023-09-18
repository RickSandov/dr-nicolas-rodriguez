import React from 'react'
import { DoctorIconWhite, LogoTextWhite, LogoWhite } from '../icons'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer
            className='flex flex-col items-center justify-between bg-gradient-to-b from-primary to-secondary pb-14'
        >
            <div>

            </div>
            <div className='flex flex-col items-center gap-4' >
                <div className='w-28' >
                    <DoctorIconWhite />
                </div>
                {/* <LogoWhite /> */}
                <LogoTextWhite />
                <Link href={'/admin'} className='mt-2 text-xs text-secondary-light' >{'©2023 Dr. Nicolás Rodriguez'}</Link>
            </div>
        </footer>
    )
}
