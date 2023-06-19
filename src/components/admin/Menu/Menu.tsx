'use client'

import * as Popover from '@radix-ui/react-popover';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { ArrowDown } from '@/components/icons';


const links = [
    {
        text: 'mensajes',
        to: '/admin/mensajes'
    },
    {
        text: 'agenda',
        to: '/admin'
    }
]
export const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const [colors, setColors] = useState({
        button: 'bg-secondary text-white hover:bg-primary dark:marker:bg-secondary dark:text-primary',
        link: 'bg-secondary-light'
    })

    useEffect(() => {

        if (isOpen) {
            setColors(pv => ({
                ...pv,
                button: 'bg-secondary-light text-primary rotate-180'
            }))
        } else {
            setColors(pv => ({
                ...pv,
                button: 'bg-secondary text-white hover:bg-primary'
            }))
        }

    }, [isOpen, pathname])


    return (
        <Popover.Root open={isOpen} onOpenChange={() => setIsOpen(!isOpen)} >
            <Popover.Trigger asChild>
                <button className={`transition-all shadow-dark w-11 h-11 p-1 rounded-full flex items-center justify-center ${colors.button}`} aria-label="Update dimensions">
                    <ArrowDown className='w-full h-full' />
                </button>
            </Popover.Trigger>
            <Popover.Portal >
                <Popover.Content className='z-50' style={{
                    zIndex: 100
                }} sideOffset={0}>
                    <div className='px-4 text-right flex flex-col gap-2 items-end relative' >

                        {
                            links.map(({ text, to }) => {
                                return (
                                    <Link
                                        key={text}
                                        href={to}
                                        className={cn(`bg-white py-2 px-3 rounded-full shadow-light hover:bg-secondary-light ${to === pathname ? colors.link : ''}`)}
                                    >
                                        {text}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <Popover.Close className="PopoverClose" aria-label="Close">
                        {/* <Cross2Icon /> */}
                    </Popover.Close>
                    {/* <Popover.Arrow className="PopoverArrow" /> */}
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}