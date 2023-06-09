import React from 'react'
import Button from '../button/Button'
import { ArrowDown } from '../icons'

export const Hero = () => {
    return (
        <section id='inicio' className='bg-no-repeat bg-cover bg-center bg-hero relative h-[100vh] bg-primary w-full px-6 md:px-14 lg:px-20 xl:px-28 flex flex-col justify-center items-start ' >
            <div className='flex flex-col gap-3 relative top-6 md:top-10' >
                <h1 className='font-bold text-secondary-light text-4xl sm:text-5xl' style={{
                    lineHeight: 1.3
                }} >
                    TU <strong className='text-primary bg-white px-1'>SALUD,</strong><br />NUESTRA PRIORIDAD.<br /> SIEMPRE.
                </h1>
                <div className='text-white max-w-[500px]'>
                    <p>
                        Atención médica especializada en <strong className='text-secondary-light'>salud femenina</strong>, con enfoque preventivo y soluciones personalizadas para cada etapa de tu vida.
                        <br />
                    </p>
                    <div className='mt-8 flex flex-col items-start gap-2'>
                        <p> Solicite una consulta con<br />el
                            <a
                                href='#doctor'
                                className='text-secondary-light ml-1 p-1 bg-primary font-bold cursor-pointer transition-colors hover:bg-primary-light hover:text-primary' >
                                {`Dr. Nicolás Rodríguez Luna.`}
                            </a>
                        </p>
                        <Button
                            className='animate-pulse mt-2 text-xl uppercase font-bold w-full text-center bg-secondary-light hover:animate-none hover:translate-y-1 hover:shadow-sm hover:text-secondary py-4 hover:bg-primary-light'
                            href='#formulario'
                        >
                            Agendar cita
                        </Button>
                    </div>
                </div>
            </div>
            <a
                href='#doctor'
                className='absolute bottom-3 left-1/2 h-10 w-10 text-white -translate-x-1/2'
            >
                <ArrowDown className='animate-bounce' />
            </a>
        </section >
    )
}
