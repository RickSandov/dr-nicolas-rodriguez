import React, { PropsWithChildren } from 'react'


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
                    className={`rounded-3xl bg-white ${noPadding ? '' : 'px-6 py-14 md:px-14 md:py-12 lg:px-16 lg:py-20'} shadow-dark mx-auto ${className}`}
                    id={id}
                >
                    {children}
                </section>

            )
        default:
            return (
                <div
                    className={`rounded-3xl bg-white ${noPadding ? '' : 'px-6 py-14 md:px-14 md:py-12 lg:px-16 lg:py-20'} shadow-dark ${className}`}>
                    {children}
                </div>
            )
    }
}
