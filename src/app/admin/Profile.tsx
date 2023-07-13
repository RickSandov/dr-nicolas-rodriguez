'use client'

import Button from '@/components/button/Button';
import { Modal } from '@/components/modal/Modal';
import { IShortUser } from '@/interfaces/user';
import { useAppStore } from '@/stores/useAppStore';
import * as Popover from '@radix-ui/react-popover';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const Profile = ({ user }: { user: IShortUser }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const changePassword = useAppStore((state) => state.changePassword);
    const logout = useAppStore((state) => state.logout);

    const onSubmit = (values: { [key: string]: string }) => {
        const { prevPassword, password } = values;
        changePassword(prevPassword, password, () => { setIsModalOpen(false); setIsOpen(false); reset(); });
    }

    return (
        <>
            <Popover.Root open={isOpen} onOpenChange={() => setIsOpen(!isOpen)} >
                <Popover.Trigger asChild>
                    {/* content */}
                    <p className='text-white pointer select-none' >Hola, <strong>{user.displayName}</strong></p>
                </Popover.Trigger>
                <Popover.Portal >
                    <Popover.Content
                    // style={{
                    //     zIndex: 0
                    // }} sideOffset={0}
                    >
                        {/* content */}
                        <div className=' bg-white z-50 mt-5 p-5 rounded-lg shadow-light w-[250px]'>
                            <Button type='button' onClick={() => setIsModalOpen(true)} className='w-full bg-secondary-light shadow-light'>
                                cambiar contraseña
                            </Button>
                            <Button type='button' onClick={() => {
                                logout();
                            }} className='w-full bg-secondary-light shadow-light mt-2'>
                                cerrar sesión
                            </Button>

                        </div>
                        <Popover.Close className="PopoverClose" aria-label="Close">
                            {/* <Cross2Icon /> */}
                        </Popover.Close>
                        {/* <Popover.Arrow className="PopoverArrow" /> */}
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
            <Modal title='Cambiar contraseña' isActive={isModalOpen} onClose={() => setIsModalOpen(false)} >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div >
                        <label className="block" htmlFor="prevPassword">Contraseña actual</label>
                        <input className="w-full border-2 border-primary dark:border-none dark:bg-white text-primary py-1 px-2 rounded-md " {...register("prevPassword", { required: 'Es necesario escribir su contraseña actual' })} />
                    </div>
                    <div className='mt-3' >
                        <label className="block" htmlFor="password">Nueva contraseña</label>
                        <input className="w-full border-2 border-primary dark:border-none dark:bg-white text-primary py-1 px-2 rounded-md " {...register("password", { required: 'Es necesario escribir su contraseña actual' })} />
                    </div>
                    <Button className='mt-4 bg-primary text-white w-full' >Cambiar contraseña</Button>
                </form>
            </Modal>
        </>
    )
}
