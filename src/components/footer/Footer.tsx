import React from 'react'
import { DoctorIconWhite, LogoTextWhite, LogoWhite } from '../icons'

export const Footer = () => {
    return (
        <footer
            className='bg-gradient-to-b from-primary to-secondary
            flex flex-col items-center justify-between pb-14'
        >
            <div>

            </div>
            <div className='flex flex-col items-center gap-4' >
                <div className='w-28' >
                    <DoctorIconWhite />
                </div>
                {/* <LogoWhite /> */}
                <LogoTextWhite />
                <span className='mt-2 text-xs text-secondary-light' >{'©2023 Dr. Nicolás Rodriguez'}</span>
            </div>
        </footer>
    )
}
