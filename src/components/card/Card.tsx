'use client'

import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';


interface Props extends PropsWithChildren {
    className?: string;
    element?: 'section' | 'div';
    id?: string;
    noPadding?: boolean;
}

export const Card = ({ children, className, element, id = '', noPadding = false }: Props) => {
    switch (element) {
        case 'section':
            return (
                <section
                    className={cn(`rounded-3xl bg-white ${noPadding ? '' : 'px-6 py-14 md:px-14 md:py-12 lg:px-16 lg:py-20'} shadow-dark mx-auto ${className}`)}
                    id={id}
                >
                    {children}
                </section>

            )
        default:
            return (
                <motion.div
                    variants={fadeIn('up', 'spring', .2, 1)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{
                        once: true,
                        margin: '50px'
                    }}
                    id={id}
                    className={cn(`rounded-3xl bg-white ${noPadding ? '' : 'px-6 py-14 md:px-14 md:py-12 lg:px-16 lg:py-20'} shadow-dark ${className}`)}>
                    {children}
                </motion.div>
            )
    }
}
