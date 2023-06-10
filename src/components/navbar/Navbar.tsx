'use client'

import { useEffect, useRef } from 'react'
import { Logo, LogoText } from '../icons'
import { NavLinks } from './NavLinks'
import { useRouter } from 'next/navigation'
import { Variant, Variants, motion } from 'framer-motion';
import { fadeIn, zoomIn } from '@/utils/motion'

const navbarVariant: Variants = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        // transform: 'fixed',
        opacity: 1,
        transition: {
            delay: 0,
            duration: 1,
            ease: "easeOut",
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
}

export const Navbar = () => {

    const navbar = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        router.push('');
        window.scroll({
            top: 0
        })

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
        <motion.nav
            variants={fadeIn('', 'spring', .5, 1)}
            initial='hidden'
            animate='show'
            viewport={{
                once: true
            }}
            id='nav' ref={navbar} className={`fixed z-30 left-2 right-2 top-3 bg-white rounded-full py-3 px-4 mx-auto max-w-[1200px] shadow-md flex justify-between items-center transition-all duration-700`} >
            <a href='/#inicio' className="flex gap-2 md:gap-3 items-center">
                <Logo />
                <LogoText />
            </a>
            <NavLinks />
        </motion.nav>
    )
}
