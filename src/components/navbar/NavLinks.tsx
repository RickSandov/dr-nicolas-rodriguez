'use client'

import { MouseEventHandler, useState } from 'react'

export const NavLinks = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClick = (event: MouseEventHandler<HTMLAnchorElement>) => {
        window.scroll
    }

    return (
        <>
            <div className='flex md:flex-row flex-col' >
                <HamburgerMenu isOpen={isOpen} toggleIsOpen={() => setIsOpen(!isOpen)} />
                <ul className={`flex md:flex-row flex-col md:relative absolute md:h-fit  gap-2 ${isOpen ? 'h-44 shadow-lg bg-white' : 'h-0'} right-0 left-0 top-24 md:top-0 md:shadow-none overflow-hidden transition-all w-full md:w-fit items-center pt-5 md:pt-0 md:rounded-none rounded-lg`} >
                    <li className={`text-primary uppercase cursor-pointer text-sm font-bold px-3 py-2 hover:bg-secondary-light transition-all rounded-full`} >
                        <a href="#servicios" >
                            especialidades
                        </a>
                    </li>
                    <li className={`text-primary uppercase cursor-pointer text-sm font-bold px-3 py-2 hover:bg-secondary-light transition-all rounded-full`} >
                        <a href="#ubicacion">
                            ubicación
                        </a>
                    </li>
                    <li className={`text-white uppercase cursor-pointer text-sm font-bold px-3 py-2 hover:bg-secondary-light hover:text-primary transition-all bg-primary rounded-full`} >
                        <a href="#agendar">
                            agendar cita
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
                <span className={`block absolute w-full h-[3px] bg-primary rounded-full transition-all top-0 ${isOpen ? 'translate-y-2 rotate-45' : ''} `} ></span>
                <span className={`block absolute w-full h-[3px] bg-primary rounded-full transition-all top-2 ${isOpen ? 'opacity-0 -translate-x-5' : ''}`} ></span>
                <span className={`block absolute w-full h-[3px] bg-primary rounded-full transition-all top-4 ${isOpen ? '-translate-y-2 -rotate-45' : ''} `} ></span>
            </div>
        </button>
    )
}