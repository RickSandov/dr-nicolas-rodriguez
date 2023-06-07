'use client'
import * as Popover from '@radix-ui/react-popover';
import { CallIcon } from '../icons';

export const CallPopOver = ({ className, phoneNumber }: { className: string, phoneNumber: string; }) => {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button className="IconButton" aria-label="Update dimensions">
                    <CallIcon className={`w-9 h-9 p-2 rounded-full fill-white transition-all ${className}`} />
                </button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className='bg-white rounded-lg shadow-light p-1 px-2' sideOffset={5}>
                    <div className="flex flex-wrap flex-col">
                        <a href={`tel:${phoneNumber}`} target='_blank' >Llamar</a>
                        <p className='text-lg' >{
                            phoneNumber.slice(0, 3)
                            + ' '
                            + phoneNumber.slice(3, 6)
                            + ' '
                            + phoneNumber.slice(6)}</p>
                        <Popover.Close className='flex-1 ' aria-label="Close">
                            {/* <Cross2Icon /> */}
                            {/* <p className="text-center" >&times;</p> */}
                        </Popover.Close>
                    </div>
                    <Popover.Arrow className="PopoverArrow" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}
