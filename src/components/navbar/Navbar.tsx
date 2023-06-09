'use client'

import { useEffect, useRef } from 'react'
import { Logo, LogoText } from '../icons'
import { NavLinks } from './NavLinks'

export const Navbar = () => {

    const navbar = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const { current: nav } = navbar;
        let lastScrollTop = 0;

        const handleScroll = () => {
            const documentScrollTop = document.documentElement.scrollTop
            let scrollTop = window.pageXOffset || documentScrollTop;
            if (scrollTop > lastScrollTop && documentScrollTop > 600) {
                nav!.style.top = '-15rem';
            } else {
                nav!.style.top = '12px';
            }
            lastScrollTop = scrollTop;
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <nav id='nav' ref={navbar} className={`fixed z-30 left-2 right-2 top-3 bg-white rounded-full py-3 px-4 mx-auto max-w-[1200px] shadow-md flex justify-between items-center transition-all duration-700`} >
            <a href='/#inicio' className="flex gap-2 md:gap-3 items-center">
                <Logo />
                <LogoText />
            </a>
            <NavLinks />
        </nav>
    )
}
