'use client'

import { cn } from '@/lib/utils';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'

interface Props extends PropsWithChildren {
    isActive: boolean;
    withCross?: boolean;
    onClose: () => void;
    className?: string;
    title?: string;
}

export const Modal = ({ children, isActive, withCross = true, onClose, className = '', title = '' }: Props) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const open = () => {
        if (modalRef.current) {
            modalRef.current.showModal()
        }
    }
    const close = () => {
        if (modalRef.current) {
            modalRef.current.close()
        }
    }

    useEffect(() => {
        if (isActive) {
            open()
        } else {
            close()
        }
    }, [isActive])

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.addEventListener('close', onClose);
            modalRef.current.addEventListener('click', (e) => {
                if (e.target === modalRef.current) {
                    onClose()
                }
            })
        }
        return () => {
            if (modalRef.current) {
                modalRef.current.removeEventListener('close', onClose);
            }
        }
    }, [])


    return (
        <dialog
            ref={modalRef}
            className={cn(`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl min-h-[300px] w-[500px] max-w-[95%] shadow-dark dark:bg-primary dark:text-white backdrop:bg-[#00000080] open:animate-fade-in ${className}`)}
        >
            <div className='p-5 pt-9 h-full relative' >
                {withCross && (
                    <button
                        onClick={onClose}
                        className='absolute right-4 top-2 text-xl text-primary dark:text-white'
                    >
                        &times;
                    </button>
                )}
                {
                    title ? (
                        <>
                            <h3 className='capitalize text-secondary dark:text-secondary-light text-center text-xl'>{title}</h3>
                            <div className='w-1/2 mx-auto h-1 bg-secondary dark:bg-secondary-light mb-5' />
                            <div className='' >
                                {children}
                            </div>
                        </>
                    ) : children
                }


            </div>
        </dialog>
    )
}
