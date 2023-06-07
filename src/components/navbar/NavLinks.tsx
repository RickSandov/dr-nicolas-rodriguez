'use client'

import { MouseEventHandler, useEffect, useState } from 'react'

export const NavLinks = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let lastOffsetY = 0

        const listenerHandler = (e: Event) => {
            const newOffsetY = window.scrollY;
            if (newOffsetY - lastOffsetY >= 10 || newOffsetY - lastOffsetY <= -9) {
                setIsOpen(false);
            }
            lastOffsetY = newOffsetY;
        }
        document.addEventListener('scroll', listenerHandler)
        return () => {
            document.removeEventListener('scroll', listenerHandler)
        }
    }, [])

    return (
        <>
            <div className='flex md:flex-row flex-col' >
                <HamburgerMenu isOpen={isOpen} toggleIsOpen={() => setIsOpen(!isOpen)} />
                <ul className={`flex md:flex-row flex-col items-center justify-center md:relative absolute md:h-fit  gap-2 ${isOpen ? 'h-44 shadow-lg' : 'h-0'} right-0 left-0 top-24 md:top-0 md:shadow-none overflow-hidden transition-all duration-300 w-full md:w-fit md:rounded-none rounded-lg bg-white `} >
                    <li>
                        <a href="#servicios"
                            className={`text-primary uppercase cursor-pointer text-sm font-bold px-3 py-2 hover:bg-secondary-light transition-all rounded-full`}
                        >
                            áreas de atención
                        </a>
                    </li>
                    <li>
                        <a href="#ubicacion"
                            className={`text-primary uppercase cursor-pointer text-sm font-bold px-3 py-2 hover:bg-secondary-light transition-all rounded-full`}
                        >
                            ubicación
                        </a>
                    </li>
                    <li className='py-2'>
                        <a href="#contacto"
                            className={`text-white uppercase cursor-pointer text-sm font-bold px-3 py-2 hover:bg-secondary-light hover:text-primary transition-all bg-primary rounded-full`}>
                            {/* agendar cita */}
                            contacto
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

function HamburgerMenu({ isOpen, toggleIsOpen }: { isOpen: boolean, toggleIsOpen: () => void }) {
    return (
        <button onClick={toggleIsOpen} className='flex flex-col mr-1 relative translate-y-1 md:hidden' >
            <div className={`w-6 h-6 relative cursor-pointer`} >
                <span className={`block absolute w-full h-[3px] bg-primary rounded-full transition-all duration-500 top-0 ${isOpen ? 'translate-y-2 rotate-45' : ''} `} ></span>
                <span className={`block absolute w-full h-[3px] bg-primary rounded-full transition-all duration-500 top-2 ${isOpen ? 'opacity-0 -translate-x-5' : ''}`} ></span>
                <span className={`block absolute w-full h-[3px] bg-primary rounded-full transition-all duration-500 top-4 ${isOpen ? '-translate-y-2 -rotate-45' : ''} `} ></span>
            </div>
        </button>
    )
}