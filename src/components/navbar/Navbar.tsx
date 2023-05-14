import React from 'react'
import { Logo, LogoText } from '../icons'
import { NavLinks } from './NavLinks'

export const Navbar = () => {
    return (
        <nav className={`fixed z-50 left-2 right-2 top-3 bg-white rounded-full py-3 px-4 mx-auto max-w-[1200px] shadow-md flex justify-between items-center `} >
            <a href='/#inicio' className="flex gap-2 md:gap-3 items-center">
                <Logo />
                <LogoText />
            </a>
            <NavLinks />
        </nav>
    )
}
