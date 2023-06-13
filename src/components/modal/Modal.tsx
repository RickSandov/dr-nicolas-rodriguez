'use client'

import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'

interface Props extends PropsWithChildren {
    isActive: boolean;
    withCross?: boolean;
    onClose: () => void
}

export const Modal = ({ children, isActive, withCross = true, onClose }: Props) => {
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

    return (
        <dialog
            ref={modalRef}
            className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl h-72 w-[500px] max-w-[95%] shadow-dark'
        >
            <div className='p-5 pt-9 h-full relative' >
                {withCross && (
                    <button
                        onClick={onClose}
                        className='absolute right-4 top-2 text-xl text-primary'
                    >
                        &times;
                    </button>
                )}
                {children}
            </div>
        </dialog>
    )
}
