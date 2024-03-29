'use client'
import * as Popover from '@radix-ui/react-popover'
import React, { useState } from 'react'
import { ArrowDown } from '../icons'
import { ContactFormStatusType, contactFormStatusTypeArray } from '@/interfaces';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/stores/useAppStore';

export const StatusPopOver = ({ currentStatus, statusClassName, phoneNumber, changeFilter }: { currentStatus: string, statusClassName: string, phoneNumber: string, changeFilter: (status: ContactFormStatusType) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const updateContactCardStatus = useAppStore(state => state.updateContactCardStatus);

    const handleUpdate = (status: ContactFormStatusType) => {
        updateContactCardStatus(phoneNumber, status, () => {
            changeFilter(status);
        });
    }

    return (
        <Popover.Root open={isOpen} onOpenChange={() => setIsOpen(!isOpen)} >
            <Popover.Trigger asChild>
                <span className={cn(`block w-fit ml-auto text-right p-1 px-3 rounded-full border-2 text-black font-bold cursor-pointer ${statusClassName}`)}>
                    {currentStatus}
                </span>
            </Popover.Trigger>
            <Popover.Portal >
                <Popover.Content className='z-50' style={{
                    zIndex: 100
                }} sideOffset={0}>
                    <div className='mt-2 text-center flex flex-col justify-center gap-2 relative bg-white dark:bg-secondary-light p-3 shadow-light rounded-2xl' >

                        {
                            contactFormStatusTypeArray.map((status) => {
                                if (status === currentStatus) {
                                    return (
                                        null
                                    )
                                }
                                return (
                                    <span onClick={() => handleUpdate(status)} key={status} className={cn(`self-center p-1 px-3 rounded-full border-2 font-bold border-slate-400 bg-slate-100 text-slate-600 cursor-pointer`)}>
                                        {status}
                                    </span>
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
