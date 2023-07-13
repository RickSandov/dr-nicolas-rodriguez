'use client'

import Button from '@/components/button/Button'
import { Logo, LogoText } from '@/components/icons'
import { useAppStore } from '@/stores/useAppStore'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Page = () => {

    const login = useAppStore((state) => state.login);
    const setRouter = useAppStore((state) => state.setRouter);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const router = useRouter();

    useEffect(() => {
        setRouter(router);
    }, [router])

    const onSubmit = async (values: { [key: string]: string }) => {
        const { userName, password } = values;
        login(userName, password);
    }

    return (
        <main className='bg-gradient-to-br from-primary to-secondary h-[100vh] flex items-center justify-center' >
            <div className='h-[450px] max-h-full w-[350px] max-w-[90%] bg-white rounded-xl shadow-dark p-4 flex flex-col items-center' >
                <div className='flex gap-2 mt-4' >
                    <Logo />
                    <LogoText />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mt-20 w-[90%]' >
                    <div className='flex flex-col gap-1 w-full' >
                        <label htmlFor="userName">Usuario</label>
                        <input className='py-1 px-3 rounded-md border-2 border-primary bg-white' type="text" {...register('userName', { required: 'Este campo es requerido' })} />
                    </div>
                    <div className='flex flex-col gap-1 w-full' >
                        <label htmlFor="password">Contraseña</label>
                        <input className='py-1 px-3 rounded-md border-2 border-primary bg-white' type="password" {...register('password', { required: 'Este campo es requerido' })} />
                    </div>
                    <Button type='submit' className='bg-primary text-white mt-3' >Iniciar sesión</Button>
                </form>
            </div>
        </main>
    )
}

export default Page